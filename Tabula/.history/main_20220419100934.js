window.addEventListener("scroll", function() {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 0);
})
window.addEventListener("click", function() {
    var btn = this.document.click("#btn-reponsive");
    btn.classList.toggle("click");
})