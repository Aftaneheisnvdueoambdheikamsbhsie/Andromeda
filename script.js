function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("nav-hidden")) {
        navMenu.classList.remove("nav-hidden");
        navMenu.classList.add("nav-visible");
    } else {
        navMenu.classList.remove("nav-visible");
        navMenu.classList.add("nav-hidden");
    }
}
