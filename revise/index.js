let inputBox=document.getElementById("inputbox");
let addButton=document.getElementById("add-btn");
let list=document.getElementById("u-list");
function addItem(){
    let value=inputBox.value.trim();
    if(value===""){
        alert("invalid Input");
    }
}
addButton.addEventLisntener("click",addItem);