// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust if you have a sticky header
            behavior: 'smooth'
        });
    });
});

// Lazy Loading for Images (Improves performance)
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(image => {
        image.setAttribute('src', image.getAttribute('data-src'));
    });
});

// Sticky Navigation Bar
window.onscroll = function () { stickyNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar ? navbar.offsetTop : 0;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Image Gallery Lightbox (Optional)
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<img src="${img.src}" alt="Lightbox Image"><span class="close">X</span>`;
        document.body.appendChild(lightbox);
        lightbox.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Form Validation (Optional)
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function(event) {
        const email = document.querySelector("#email") ? document.querySelector("#email").value : null;
        if (email && !email.includes("@")) {
            alert("Please enter a valid email address!");
            event.preventDefault();
        }
    });
});
