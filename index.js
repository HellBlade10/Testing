let btn = document.getElementById("toggle");
let body = document.getElementsByTagName("body");

btn.addEventListener("click", () => {
    if (body[0].style.backgroundColor == "black"){
        body[0].style.backgroundColor = "white";
        body[0].style.color = "black";
        btn.textContent = "Dark Mode";
    }
    else{
        body[0].style.backgroundColor = "black";
        body[0].style.color = "white";
        btn.textContent = "Light Mode";
        
    }
});

