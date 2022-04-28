window.addEventListener("scroll", function() {
    var nav = this.document.querySelector("nav");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})