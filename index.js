let btn = document.getElementById("hi");
let body = document.getElementsByTagName("body");

btn.addEventListener("click", () => {
    body[0].style.backgroundColor = "red";
    alert("hi");
});

