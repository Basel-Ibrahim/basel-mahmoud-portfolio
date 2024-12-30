// Sample Portfolio Data
const portfolioData = [
    {
        id: "app1",
        category: "pc",
        title: "Solar Load Calculator",
        type: "Windows App",
        description: "A native Windows application built using C# and .NET Framework to calculate solar load with precision and reliability.",
        image: "images/app1.jpg"
    },
    {
        id: "app2",
        category: "mobile",
        title: "Solar Load Calculator",
        type: "Android App",
        description: "A native Android app developed with Java and Android Studio, offering offline functionality for solar load calculations.",
        image: "images/app2.jpg"
    },
    {
        id: "app3",
        category: "web",
        title: "Portfolio Website",
        type: "Website",
        description: "A responsive and professional portfolio website created using HTML, CSS, and JavaScript to showcase projects, skills, and achievements.",
        image: "images/app3.jpg"
    },
    {
        id: "app4",
        category: "web",
        title: "Government Bill Payment Website",
        type: "Web App",
        description: "A user-friendly platform for paying utility bills online with features like bill tracking, payment history, and reminders.",
        image: "images/app5.png"
    },
    {
        id: "app5",
        category: "others",
        title: "Twitch Channel Designs",
        type: "Graphics",
        description: "Custom Twitch channel designs, including overlays, banners, and icons, created with Adobe Photoshop for a professional look.",
        image: "images/app6.jpg"
    },
];

// Function to Load Portfolio Items Dynamically
function loadPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = portfolioData.map(item => `
        <div class="portfolio-item ${item.category}" data-id="${item.id}">
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <h4>${item.type}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');

    // Add event listeners dynamically for the portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const id = item.getAttribute('data-id');
            openModal(id);
        });        
    });
}

// Global variable to store the selected category
let currentCategory = 'all';

// Function to Filter by Category
function filterCategory(event, category) {
    currentCategory = category;  // Update the current selected category
    const items = document.querySelectorAll('.portfolio-item');
    
    // Show or hide portfolio items based on category selection
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = '';  // Show item
        } else {
            item.style.display = 'none';  // Hide item
        }
    });

    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to the clicked button
    event.target.classList.add('active');

    // Apply the current search filter after changing category
    filterPortfolio();
}

// Function to Filter by Search and Category
function filterPortfolio() {
    const search = document.getElementById('portfolioSearch').value.toLowerCase();
    const items = document.querySelectorAll('.portfolio-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const isVisibleByCategory = currentCategory === 'all' || item.classList.contains(currentCategory);
        
        // Show item only if it matches the category and the search term
        if (isVisibleByCategory && text.includes(search)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Clear search and reset portfolio view
function clearSearch() {
    document.getElementById('portfolioSearch').value = '';  // Clears the search bar
    filterPortfolio();  // Optionally, you can reset the portfolio display
}

// Get elements
const searchInput = document.getElementById('portfolioSearch');
const clearButton = document.getElementById('clearSearch');

// Function to toggle visibility of the clear button
function toggleClearButton() {
    if (searchInput.value.trim() !== "") {
        clearButton.style.opacity = 1;
    } else {
        clearButton.style.opacity = 0;
    }
}

// Event listener for input changes
searchInput.addEventListener('input', toggleClearButton);

// Clear search input when clear button is clicked
clearButton.addEventListener('click', function() {
    searchInput.value = '';
    toggleClearButton();  // Hide the button after clearing
});

// Initialize Portfolio on Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();

    // Default to 'all' category on page load
    const allCategoryBtn = document.querySelector('.filter-btn[data-category="all"]');
    if (allCategoryBtn) {
        allCategoryBtn.classList.add('active');
    }
});

// Header Scroll Behavior
const header = document.querySelector('header');
let debounceTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#151531'; /* Darker background when scrolling */
        } else {
            header.style.backgroundColor = '#0a0a23'; /* Original background color */
        }

        // Scroll to Top Button visibility
        const scrollToTopButton = document.getElementById('scrollToTopBtn');
        if (window.scrollY > 200) {
            scrollToTopButton.classList.add('show');
            scrollToTopButton.classList.remove('hide');
        } else {
            if (scrollToTopButton.classList.contains('show')) {
                scrollToTopButton.classList.add('hide');
                setTimeout(() => {
                    scrollToTopButton.classList.remove('show');
                }, 500); // Match fadeOut animation duration
            }
        }
    }, 100); // Delay scroll event to improve performance
});

// Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // This ensures smooth scrolling
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".scroll-to-top");
    let isScrollingToTop = false; // Track if the page is scrolling to top

    // Handle button click
    scrollToTopButton.addEventListener("click", function () {
        if (!isScrollingToTop) {
            isScrollingToTop = true; // Set flag to prevent multiple triggers

            // Play the click animation
            scrollToTopButton.classList.add("click");

            // Scroll to the top smoothly
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            // Wait for the click animation to complete before hiding
            scrollToTopButton.addEventListener(
                "animationend",
                function (e) {
                    if (e.animationName === "clickEffect") {
                        scrollToTopButton.classList.remove("click");
                        scrollToTopButton.classList.add("hide"); // Trigger fadeOut
                    }
                },
                { once: true } // Ensure listener is removed after execution
            );

            // Reset the scrolling flag after the scroll completes
            const checkScroll = setInterval(() => {
                if (window.scrollY === 0) {
                    clearInterval(checkScroll);
                    isScrollingToTop = false;
                }
            }, 100);
        }
    });

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (!isScrollingToTop) {
            if (window.scrollY > 200) {
                scrollToTopButton.classList.add("show");
                scrollToTopButton.classList.remove("hide");
            } else {
                scrollToTopButton.classList.remove("show");
                scrollToTopButton.classList.add("hide");
            }
        }
    });
});

// Typing Effect for Text
const typingText = document.querySelector('.typing-text');
const textToType = "Full Stack Software Developer";  // The text you want to type out
let index = 0;

// Function to handle typing
function typeText() {
    if (index < textToType.length) {
        typingText.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
    } else {
        startCursorBlink(); // Start cursor blinking indefinitely after typing
    }
}

// Function for blinking cursor effect
function startCursorBlink() {
    setInterval(() => {
        typingText.classList.toggle('cursor'); // Toggle cursor class for blinking effect
    }, 500); // Adjust blink speed here
}

// Add blinking cursor style
typingText.classList.add('cursor'); // Ensure the cursor is initially visible

// Start typing when the page is loaded
window.addEventListener('load', typeText);

let modalIndex = 0;

// Example of portfolio data structure with images, platform, and description
const portfolioModalData = [
    {
        id: "app1",
        title: "Solar Load Calculator",
        platform: "Windows",  // Platform added
        description: `
            <p>
                <strong class="highlight">This native Windows application</strong> is designed to assist users in calculating 
                the solar load for buildings and other structures. It provides precise and reliable results 
                by allowing users to input variables such as <span class="highlight">location, time of year, and surface orientation</span>.
            </p>
            <p>
                Developed for the <strong class="highlight">Solar Energy branch of the Arab International Optronic Company</strong> 
                in Egypt, the app demonstrates advanced energy solutions tailored to regional needs. Debuting 
                at the <em class="highlight">LED Expo 2024 in Egypt</em>, it showcases the company's commitment to cutting-edge technology.
            </p>
            <p>
                Built using <strong class="highlight">C#</strong> and the <strong class="highlight">.NET Framework</strong>, the app ensures a seamless and responsive 
                user experience. Ideal for architects, engineers, and energy management professionals, it features 
                a clean interface and <span class="highlight">robust calculation algorithms</span> for accurate solar energy assessments.
            </p>
        `,
        technologies: "C#, .NET Framework, Windows Forms",
        images: ["images/app1-1.jpg", "images/app1-3.jpg", "images/app1-2.jpg"]
    },

    {
        id: "app2",
        title: "Solar Load Calculator",
        platform: "Android",
        description: `
            <p>
                <strong class="highlight">This native Android application</strong> offers a mobile-friendly solution for calculating 
                solar loads anytime, anywhere. It was specifically developed for the <strong class="highlight">Solar Energy branch 
                of the Arab International Optronic Company</strong> in Egypt to support their renewable energy initiatives.
            </p>
            <p>
                Showcased at the <em class="highlight">prestigious LED Expo 2024 in Egypt</em>, the app highlights innovative solutions 
                in solar energy management. Built with <strong class="highlight">Java</strong> and designed using <strong class="highlight">Android Studio</strong>, 
                the app features an intuitive interface that allows users to input environmental and structural parameters easily.
            </p>
            <p>
                Its <strong class="highlight">offline functionality</strong> ensures accessibility in remote areas, making it a reliable tool for professionals and enthusiasts.
            </p>
        `,
        technologies: "Java, Android Studio",
        images: ["images/app2-1.jpg", "images/app2-2.jpg", "images/app2-3.jpg", "images/app2-4.jpg"]
    },

    {
        id: "app3",
        title: "Portfolio Website",
        platform: "Website",
        description: `
            <p>
                This <strong class="highlight">Portfolio Website</strong> was created using HTML, CSS, and JavaScript. It is a professional and responsive platform 
                designed to showcase personal or professional projects, skills, and achievements. It is the current website you are visiting, 
                it demonstrates <span class="highlight">seamless navigation, a visually appealing design,</span> and optimized performance for a better user experience.
            </p>
        `,
        technologies: "HTML, CSS, JavaScript",
        images: ["images/iimage.png", "images/image.png", "images/image2.png", "images/image3.png"]
    },

    {
        id: "app4",
        title: "Government Bill Payment Website",
        platform: "Web App",
        description: `
            <p>
                This <strong class="highlight">Government Bill Payment Website</strong> simplifies the process of paying utility bills such as electricity, water, 
                and university tuition fees online. The website supports <span class="highlight">credit card payments</span>, ensuring a secure and user-friendly 
                experience. It provides features like bill tracking, payment history, and reminders to help users manage their obligations efficiently.
            </p>
            <p>
                Designed for <span class="highlight">accessibility and ease of use</span>, the platform is ideal for streamlining essential financial transactions for users across Egypt.
            </p>
        `,
        technologies: "Wordpress, Payment Gateway Integration",
        images: ["images/app5-1.png", "images/app5-2.png", "images/app5-3.png", "images/app5-4.png", "images/app5-5.png", "images/app5-6.png"]
    },

    {
        id: "app5",
        title: "Twitch Channel Designs",
        platform: "Graphics",
        description: `
            <p>
                A set of <strong class="highlight">custom-designed graphics</strong> created using Photoshop to enhance my Twitch channel's branding. 
                These include <span class="highlight">stream overlays, banners, and profile icons</span>, all tailored to provide a unique and professional appearance.
            </p>
            <p>
                Each design reflects creativity and attention to detail, ensuring an engaging visual experience for the audience.
            </p>
        `,
        technologies: "Adobe Photoshop",
        images: ["images/app6-1.jpg", "images/app6-2.jpg", "images/app6-3.jpg"]
    }
];

// Open Modal with Dynamic Images and Description
function openModal(projectId) {
    const modal = document.getElementById("projectModal");
    const carouselContainer = document.getElementById("carouselImages");
    const projectTitle = document.getElementById("projectTitle");
    const projectDescription = document.getElementById("projectDescription");
    const projectPlatform = document.getElementById("projectPlatform"); // New platform element

    // Find the project data by ID
    const project = portfolioModalData.find(item => item.id === projectId);

    // Clear any existing content in the carousel and description
    carouselContainer.innerHTML = '';
    projectTitle.textContent = '';
    projectDescription.innerHTML = ''; // Using innerHTML to support HTML content
    projectPlatform.textContent = ''; // Clearing the platform text

    // Add project data dynamically to the modal
    if (project) {
        // Set the project title and platform
        projectTitle.textContent = project.title;
        projectPlatform.textContent = `Platform: ${project.platform}`; // Display platform

        // Add images dynamically to the carousel
        project.images.forEach((src, index) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = `Image ${index + 1}`;
            img.className = "modal-image";
            img.style.display = index === 0 ? "block" : "none"; // Show only the first image
            carouselContainer.appendChild(img);
        });

        // Add project description (HTML content supported)
        projectDescription.innerHTML = project.description;
    }

    // Show the modal with fade-in effect
    modal.style.display = "block";
    modal.classList.remove("fade-out");
    modal.classList.add("fade-in");

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";
}

// Show specific slide
function showSlide(index) {
    const images = document.querySelectorAll(".modal-image");
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

// Next Slide
function nextSlide() {
    const images = document.querySelectorAll(".modal-image");
    modalIndex = (modalIndex + 1) % images.length; // Loop back to the first image
    showSlide(modalIndex);
}

// Previous Slide
function previousSlide() {
    const images = document.querySelectorAll(".modal-image");
    modalIndex = (modalIndex - 1 + images.length) % images.length; // Loop to the last image
    showSlide(modalIndex);
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");

    // Enable scrolling on the body
    document.body.style.overflow = "auto";
}

// Close Modal on Outside Click
window.addEventListener("click", (event) => {
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    if (event.target === modal) {
        closeModal();
    }
});

// Form Submission with Fetch API
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);

    // Disable the submit button to prevent multiple submissions
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerText = 'Sending...';

    // Send the form data to Formspree
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        if (data.success) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('There was an error sending the message. Please try again.');
        }
        submitButton.disabled = false;
        submitButton.innerText = 'Send';
    })
    .catch(error => {
        alert('Error: ' + error.message);
        submitButton.disabled = false;
        submitButton.innerText = 'Send';
    });
});
