const toggle = document.getElementById("toggleDark");
const header = document.querySelector("header");
const inputFeild = document.querySelector("input");
const button = document.querySelector("button");
const info = document.querySelector(".info");
// const = document.querySelector("");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle("bi-brightness-high-fill")) {//light mode js
        header.style.cssText = "transition: 1s; background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.621)); color: white;";
        inputFeild.style.cssText = "transition: .5s; background-color: white; color: black;"
        button.style.cssText = "transition: .5s; background-color: white; color: black;"
        info.style.cssText = "transition: .5s; background-color: white; color: black; box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.493)"; 
    } else {//dark mode js
        header.style.cssText = "transition: 1s; background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0)); color: rgb(155, 155, 155);";
        inputFeild.style.cssText = "transition: .5s; background-color: rgba(0, 0, 0, 0.55); color: white;"
        button.style.cssText = "transition: .5s; background-color: rgba(0, 0, 0, 0.55); color: white;"
        info.style.cssText = "transition: .5s; background-color: rgba(0, 0, 0, 0.55); color: white;     box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.493)";
   }
});