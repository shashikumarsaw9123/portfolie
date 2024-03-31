let x=document.getElementById("himber")
let y=document.getElementById("divu1")
let z=document.getElementById("main")
let a=document.querySelector("li")
let b=document.getElementById("big2")


x.addEventListener("click",()=>{
    y.style.display="block"
    z.style.marginTop="160px"

})
window.addEventListener("resize",()=>{
    if(window.innerWidth>820){
        y.style.display="none"
    }
})
a.addEventListener("click",()=>{
    let temp=document.getElementById("big4")
    temp.scrollIntoView({
        behavior:"smooth"
    })
    console.log("jai")

})
