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

const mentah = document.querySelector(".katal1");
const kering = document.querySelector(".katal2");
const bubuk = document.querySelector(".katal3");

// default page
const ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
    document.querySelector(".display").innerHTML = ajax.responseText;
    console.log(ajax.responseText);
};
ajax.open("get", "ajax/mentah.html");
ajax.send();

mentah.classList.add("aktif");
kering.classList.remove("aktif");
bubuk.classList.remove("aktif");

// mentah page

mentah.addEventListener("click", () => {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        document.querySelector(".display").innerHTML = ajax.responseText;
    };
    ajax.open("get", "ajax/mentah.html");
    ajax.send();

    kering.classList.remove("aktif");
    bubuk.classList.remove("aktif");
    mentah.classList.add("aktif");
});

// kering page
kering.addEventListener("click", () => {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        document.querySelector(".display").innerHTML = ajax.responseText;
    };
    ajax.open("get", "ajax/kering.html");
    ajax.send();

    kering.classList.add("aktif");
    bubuk.classList.remove("aktif");
    mentah.classList.remove("aktif");
});

// bubuk page
bubuk.addEventListener("click", () => {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        document.querySelector(".display").innerHTML = ajax.responseText;
    };
    ajax.open("get", "ajax/bubuk.html");
    ajax.send();

    kering.classList.remove("aktif");
    bubuk.classList.add("aktif");
    mentah.classList.remove("aktif");
});
