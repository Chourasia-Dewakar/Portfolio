var typed = new Typed(".multiple-text", {
    strings:["Frontend Developer", "MCA Student" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the navbar
    hamburgerMenu.classList.toggle('active'); // Change the hamburger icon
});
