var arr = [];
var services = new Services();

window.addEventListener("scroll", function() {
        var nav = this.document.querySelector("nav");
        nav.classList.toggle("sticky", this.window.scrollY > 0);
    })
    // document.getElementById("btn-reponsive").onclick = function() {
    //     var result = document.getElementById('btn-reponsive');
    //     result.classList.add('click');
    // }

function getListUser() {
    var promise = services;
    promise
        .then(function(result) {
            //hide loading
            console.log(result.data);
            renderHTML(result.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}
getListUser();

function renderHTML(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var user = arr = [i];
        content += ` <div class="card" style="width: 18rem;">
        <div class="img-card">
            <img class="card-img-top" srcset="./img/${user.hinhAnh} " alt="Card image cap">
        </div>
        <div class="card-body">
            <p>${user.ngonNgu}</p>
            <h5 class="card-title">${user.hoTen}</h5>
            <p class="card-text">${user.moTa}
            </p>
        </div>
    </div>`
    }
    document.getElementById("card").innerHTML = content;
}