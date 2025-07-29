function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    let params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_duaer4t", "template_z7zga4c", params)
        .then(function(response) {
            alert("Email Sent Successfully!!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error("Error:", error);
        });
}

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    const query = document.getElementById('searchInput').value.trim(); // Get the search input value
    if (query) {
        // Redirect to test1.html with the search query
        window.location.href = `portfolio.html?search=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search term!"); // Alert if the input is empty
    }
});

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
const hamburger = document.querySelector('.hamburger').querySelectorAll('span');
const typingTextElement = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');
// const currentYearElement = document.getElementById('current-year');
const skillBars = document.querySelectorAll('.skill-progress');
const aboutText = document.querySelector('.about-text');
const skillsContainer = document.querySelector('.skills-container');
const projectCards = document.querySelectorAll('.project-card');
const contactInfo = document.querySelector('.contact-info');
const contactForm = document.querySelector('.contact-form');
const contactFormElement = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-btn');
const toastContainer = document.getElementById('toast-container');

// Variables
const roles = ["Web Developer", "Front-End Dev","Designer", "Creator", "Programmer", "01 lover", "Green lover"];
let currentRoleIndex = 0;
let displayText = "";
let isTyping = true;
let isVisible = false;

// Functions
// Initialize the page
function init() {
  // Set current year in the footer
  // currentYearElement.textContent = new Date().getFullYear();
  
  // Start the typing animation
  setTimeout(typeText, 1000);
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial scroll check
  handleScroll();
}

// Handle Navbar scroll
function handleScroll() {
  // Navbar background change on scroll
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Check for elements in viewport
  checkElementsInViewport();
}

// Animation for text typing effect
function typeText() {
  const currentRole = roles[currentRoleIndex];
  
  if (isTyping) {
    if (displayText.length < currentRole.length) {
      displayText = currentRole.slice(0, displayText.length + 1);
      typingTextElement.textContent = displayText;
      setTimeout(typeText, 100);
    } else {
      isTyping = false;
      setTimeout(typeText, 1500);
    }
  } else {
    if (displayText.length > 0) {
      displayText = displayText.slice(0, displayText.length - 1);
      typingTextElement.textContent = displayText;
      setTimeout(typeText, 50);
    } else {
      isTyping = true;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setTimeout(typeText, 300);
    }
  }
}

// Check if elements are in the viewport
function checkElementsInViewport() {
  // Skills section
  if (isElementInViewport(aboutText) && !aboutText.classList.contains('visible')) {
    aboutText.classList.add('visible');
  }
  
  if (isElementInViewport(skillsContainer) && !skillsContainer.classList.contains('visible')) {
    skillsContainer.classList.add('visible');
    // Animate skill bars
    setTimeout(() => {
      skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
      });
    }, 400);
  }
  
  // Project cards
  projectCards.forEach((card, index) => {
    if (isElementInViewport(card) && !card.classList.contains('visible')) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150);
    }
  });
  
  // Contact section
  if (isElementInViewport(contactInfo) && !contactInfo.classList.contains('visible')) {
    contactInfo.classList.add('visible');
  }
  
  if (isElementInViewport(contactForm) && !contactForm.classList.contains('visible')) {
    contactForm.classList.add('visible');
  }
}

// Check if element is in viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
    rect.bottom >= 0
  );
}

// Toggle mobile menu
// function toggleMobileMenu() {
//   const isOpen = mobileMenu.classList.toggle('open');
  
//   // Animate hamburger icon
//   if (isOpen) {
//     hamburger[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
//     hamburger[1].style.transform = 'rotate(45deg) translate(5px, 5px)';
//     hamburger[2].style.transform = 'rotate(45deg) translate(5px, 5px)';
//   } else {
//     hamburger[0].style.transform = 'none';
//     hamburger[1].style.transform = 'none';
//     hamburger[2].style.transform = 'none';
//   }
// }

// Close mobile menu
// function closeMobileMenu() {
//   mobileMenu.classList.remove('open');
//   hamburger[0].style.transform = 'none';
//   hamburger[1].style.transform = 'none';
//   hamburger[2].style.transform = 'none';
// }

// Smooth scroll to section
function scrollToSection(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    // Smooth scroll to the target
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}

// Handle form submit
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactFormElement);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Form validation
  if (!name || !email || !message) {
    showToast('Error', 'Please fill in all fields', 'error');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Error', 'Please enter a valid email address', 'error');
    return;
  }
  
  // Show loading state
  submitButton.innerHTML = '<svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg> Sending...';
  submitButton.disabled = true;
  submitButton.classList.add('loading');
  
  // Simulate form submission (would be replaced with actual API call)
  setTimeout(() => {
    // Reset form
    contactFormElement.reset();
    
    // Reset button
    submitButton.innerHTML = 'Send Message';
    submitButton.disabled = false;
    submitButton.classList.remove('loading');
    
    // Show success message
    showToast('Success', 'Your message has been sent successfully!', 'success');
  }, 1500);
}

// Show toast notification
function showToast(title, message, type) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <h4 class="toast-title">${title}</h4>
      <p class="toast-message">${message}</p>
    </div>
    <button class="toast-close">&times;</button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Add event listener to close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    removeToast(toast);
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    removeToast(toast);
  }, 5000);
}

// Remove toast notification
function removeToast(toast) {
  toast.style.opacity = '0';
  setTimeout(() => {
    toast.remove();
  }, 300);
}

// Add CSS for spinner
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
  .spinner {
    animation: rotate 2s linear infinite;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  
  .spinner .path {
    stroke: var(--primary-foreground);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

document.head.appendChild(spinnerStyle);

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
// mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Add click event to all nav links
document.querySelectorAll('.nav-link, .mobile-nav-link, .logo').forEach(link => {
  link.addEventListener('click', scrollToSection);
});

// Form submission
contactFormElement.addEventListener('submit', handleFormSubmit);

// js side nav: 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}