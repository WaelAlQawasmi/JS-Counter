const addBtn=document.getElementById("add")
const subBtn=document.getElementById("subtract")
const headerCounter=document.getElementById("headerCounter")

var count =0

addBtn.addEventListener("click",()=>{
    count+=1
    headerCounter.innerHTML=count
})

subBtn.addEventListener("click",()=>{
    count-=1
    headerCounter.innerHTML=count
})