// Toggle mobile menu
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
