let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let body = document.getElementById("body")
let nav = document.getElementById("na");
let sec_03 = document.getElementById("sec_3");
let sec_04 = document.getElementById("sec_4");
let secNav = document.getElementById("sec_nav");
let h1 = document.querySelectorAll("h1");
let p = document.querySelectorAll("p")
console.log(h1);
moon.addEventListener("click",function(){
    moon.style.display = "none";
    sun.style.display = "block";
    body.style.backgroundColor = "rgb(0 0 0/80%)";
    nav.style.backgroundColor = "#fff";
    sec_03.style.backgroundColor = "rgb(0 0 0/80%)";
    sec_04.style.backgroundColor = "rgb(0 0 0/80%)";
    secNav.style.backgroundColor = "rgb(0 0 0/80%)";
    for(let i=0; i<h1.length-9;i++){
        h1[i].style.color = "#fff";
    }
    for(let i=0; i < p.length-7;i++){
        p[i].style.color = "#fff";
    }
})
sun.addEventListener("click",function(){
    sun.style.display = "none";
    moon.style.display = "block";
    body.style.background= "#fff";
    sec_03.style.backgroundColor = "#fff";
    sec_04.style.backgroundColor = "#fff";
    secNav.style.backgroundColor = "#fff";
    for(let i=0; i<h1.length-9;i++){
        h1[i].style.color = "rgb(0, 0, 0)";
    }
    for(let i=0; i < p.length-7;i++){
        p[i].style.color = "rgb(0, 0, 0)";
    }
})