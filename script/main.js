let menuIcon = document.querySelector(".navbar-mobile__icon");
let mobileNav = document.querySelector(".navbar-mobile__links");

menuIcon.addEventListener("click" , function(){
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "flex";
    } else {
        mobileNav.style.display = "none";
    }

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});