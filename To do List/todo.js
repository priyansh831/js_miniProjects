let inputbox=document.querySelector(".input-box");
let addbtn=document.querySelector(".add-btn");
let list=document.querySelector(".list");

function addItem(){
    let inputValue=inputbox.value.trim();
    if(inputValue==""){
        alert("Invalid Input");
        return;
    }
    let li=document.createElement("li");
    li.classList.add("ul-list")
    li.textContent=inputValue;


    let delbtn=document.createElement("button");
    delbtn.textContent="-";
    delbtn.classList.add("del-btn");

    delbtn.addEventListener("click",()=>{
        li.remove();
    })

     let editbtn=document.createElement("button");
    editbtn.textContent="Edit";
    editbtn.classList.add("edit-btn");
    function editItem(){
       let val= prompt("");
       inputValue=val;
       li.textContent=val;
       li.appendChild(delbtn);
       li.appendChild(editbtn);
    }

    editbtn.addEventListener("click",editItem);

    list.appendChild(li);
    li.appendChild(delbtn);
    li.appendChild(editbtn);

    inputbox.value = "";
}

addbtn.addEventListener("click",addItem);