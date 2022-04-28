window.addEventListener("scroll", function() {
        var nav = this.document.querySelector("nav");
        nav.classList.toggle("sticky", this.window.scrollY > 0);
    })
    // document.getElementById("btn-reponsive").onclick = function() {
    //     var result = document.getElementById('btn-reponsive');
    //     result.classList.add('click');
    // }


function renderHTML(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var product = arr = [i];
        content += ` <div class="card" style="width: 18rem;">
        <div class="img-card">
            <img class="card-img-top" srcset="./img/teacher_1.jpg " alt="Card image cap">
        </div>
        <div class="card-body">
            <p>ITALIAN</p>
            <h5 class="card-title">July Roberts</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
        </div>
    </div>`
    }
}