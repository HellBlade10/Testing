let btn = document.getElementById("toggle");
let body = document.getElementsByTagName("body");

btn.addEventListener("click", () => {
    if (body[0].style.backgroundColor == "black"){
        body[0].style.backgroundColor = "white";
        btn.value = "Dark Mode";
    }
    else{
        body[0].style.backgroundColor = "black";
        btn.value = "Light Mode";
    }
});

