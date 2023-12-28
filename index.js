menuBar=document.querySelector(".menu_bar")
asideBar=document.querySelector(".left")
closeBar=document.querySelector(".close")

menuBar.addEventListener('click',function(){
    asideBar.classList.remove("aside")
})
closeBar.addEventListener('click',function(){
    asideBar.classList.add("aside")
})
function fun(){ 
let d=document.getElementById("gs")
d.innerHTML=Math.trunc(Math.random()*50+30);
let e=document.getElementById("gss")
e.innerHTML=Math.trunc(Math.random()*50+30);
let f=document.getElementById("gsss")
f.innerHTML=Math.trunc(Math.random()*50+30);
}
setInterval(fun,1000);