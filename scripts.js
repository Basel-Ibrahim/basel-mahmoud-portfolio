// Sample Portfolio Data
const portfolioData = [
    {
        id: "app1",
        category: "pc",
        title: "Solar Load Calculator",
        type: "Windows App",
        description: "A native Windows application built using C# to calculate solar load.",
        image: "images/app1.jpg"
    },
    {
        id: "app2",
        category: "mobile",
        title: "Solar Load Calculator",
        type: "Android App",
        description: "A native Android app for calculating solar load.",
        image: "images/app2.jpg"
    },
    {
        id: "app3",
        category: "web",
        title: "Expense Tracker Web App",
        type: "Web App",
        description: "A web-based app to track personal expenses.",
        image: "images/app3.jpg"
    },
    {
        id: "app5",
        category: "web",
        title: "Government Bill Payment Website",
        type: "Web App",
        description: "A website for paying government bills like electricity, water, and university tuition fees online.",
        image: "images/app5.jpg"
    },
    {
        id: "weather",
        category: "others",
        title: "Weather Forecast App",
        type: "Mobile App",
        description: "A mobile app that provides real-time weather updates.",
        image: "images/app3.jpg"
    }
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
        if (window.scrollY > 200) {
            document.getElementById('scrollToTopBtn').classList.add('show');
        } else {
            document.getElementById('scrollToTopBtn').classList.remove('show');
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

// Typing Effect for Text
const typingText = document.querySelector('.typing-text');
const textToType = "Full Stack Software Developer";  // The text you want to type out
let index = 0;
let cursorVisible = true;

function typeText() {
    typingText.textContent += textToType.charAt(index);
    index++;

    // Toggle the cursor visibility
    cursorVisible = !cursorVisible;
    typingText.classList.toggle('cursor', cursorVisible);

    if (index < textToType.length) {
        setTimeout(typeText, 100);  // Adjust typing speed here (in milliseconds)
    }
}

// Start typing when the page is loaded
window.addEventListener('load', typeText);

// Modal for Portfolio Item Details
let modalIndex = 0;
function openModal(id) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const portfolioItem = portfolioData.find(item => item.id === id);

    // Inject the content into the modal
    modalBody.innerHTML = `
        <h2>${portfolioItem.title}</h2>
        <img src="${portfolioItem.image}" alt="${portfolioItem.title}" class="modal-image">
        <p>${portfolioItem.description}</p>
    `;

    modalIndex = portfolioData.findIndex(item => item.id === id);
    modal.style.display = 'block';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Carousel Functionality for Modal (Previous and Next Buttons)
function nextProject() {
    modalIndex = (modalIndex + 1) % portfolioData.length; // Cycle back to first item after last
    openModal(portfolioData[modalIndex].id);
}

function prevProject() {
    modalIndex = (modalIndex - 1 + portfolioData.length) % portfolioData.length; // Cycle back to last item if at first
    openModal(portfolioData[modalIndex].id);
}

// Add event listeners to modal navigation buttons (if you want to use buttons instead of image clicks)
document.getElementById('nextBtn').addEventListener('click', nextProject);
document.getElementById('prevBtn').addEventListener('click', prevProject);

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