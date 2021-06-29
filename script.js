// // toggle class
// let toggle = document.querySelectorAll(".navbar-nav a");

// // loop event handling
// for (let i = 0; i < toggle.length; i++) {
//     toggle[i].addEventListener("click", () => {
//         // remove all class name (active)
//         for (let j = 0; j < toggle.length; j++) {
//             if (toggle[j].classList[1] == "active") {
//                 toggle[j].classList.remove("active");
//             }
//         }

//         // add class name (active) to current element
//         toggle[i].classList.add("active");
//     });
// }

function tampil (e){
    document.querySelector(".hai").innerHTML = e;
}

let ajax = new XMLHttpRequest();
ajax.onload = function(){
    let response = ajax.responseText;
    tampil(response);
};

ajax.open("GET", "ajax/ajax.html");
ajax.send();