window.addEventListener("scroll", function() {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 0);
})
window.addEventListener("scroll", function() {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("click", this.window.scrollY > 0);
})