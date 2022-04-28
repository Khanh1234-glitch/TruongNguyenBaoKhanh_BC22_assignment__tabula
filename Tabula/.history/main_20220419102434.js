window.addEventListener("scroll", function() {
        var nav = this.document.querySelector("nav");
        nav.classList.toggle("sticky", this.window.scrollY > 0);
    })
    // document.getElementById("btn-reponsive").onclick = function() {
    //     var result = document.getElementById('btn-reponsive');
    //     result.classList.add('click');
    // }