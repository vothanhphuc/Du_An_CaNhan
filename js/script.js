let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let body = document.getElementById("body")
let nav = document.getElementById("na");
let sec_03 = document.getElementById("sec_3");
let sec_04 = document.getElementById("sec_4");
moon.addEventListener("click",function(){
    moon.style.display = "none";
    sun.style.display = "block";
    body.style.backgroundColor = "rgb(0 0 0/80%)";
    nav.style.backgroundColor = "#fff";
    nav.style.borderRadius = "15%";
    sec_03.style.backgroundColor = "rgb(0 0 0/80%)";
    sec_04.style.backgroundColor = "rgb(0 0 0/80%)";
})
sun.addEventListener("click",function(){
    sun.style.display = "none";
    moon.style.display = "block";
    body.style.background= "#fff";
    sec_03.style.backgroundColor = "#fff";
    sec_04.style.backgroundColor = "#fff";
})