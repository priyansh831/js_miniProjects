let container=document.getElementById("chessboard-container");
const size=8;
// 

container.style.display="grid";
container.style.gridTemplateColumns='repeat(8,1fr)';
container.style.width="500px";
container.style.height="500px";


for(let i=0;i<size;i++){
for(let j=0;j<size;j++){

    let square=document.createElement("div");

    let isBlack= (i+j)%2===1
    square.style.backgroundColor = isBlack ? 'black':'white';

    // square.style.width="100px";
    // square.style.height="100px";

    container.appendChild(square);


}
}