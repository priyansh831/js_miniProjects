let textarea=document.querySelector(".textArea");
let counter=document.getElementById("counter");
let btn=document.getElementById("btn");

const maxlength=100;
counter.textContent=maxlength;

function updateFun(){
    let currentLength=textarea.value.length;
    let remaining=maxlength-currentLength;
    counter.textContent=remaining;
// counterDisplay.style.color = 'inherit'; 
    const redcolor=10;
    const greencolor=50;
    if(remaining<=redcolor){
    counter.style.color="red";
    }
    else if(remaining<=greencolor){
        counter.style.color="yellow";
    }
    else{
        counter.style.color="green";
    }
}

textarea.addEventListener("input",updateFun);


btn.addEventListener("click",()=>{
    document.body.classList.toggle("black-mode");
})