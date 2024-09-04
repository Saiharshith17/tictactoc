let boxes = document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");

let turno =true;




const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],
[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turno){
            box.innerText="O";
            turno=false;
                }
                else{
                    box.innerText="X";
                    turno=true;
                }
                box.disabled=true;
                checkwinner();
    });
});

const checkwinner=()=>{
   for(let pattern of winpatterns){
    if(boxes[pattern[0]].innerText=="O"&&boxes[pattern[1]].innerText=="O"&&boxes[pattern[2]].innerText=="O"){
        console.log("a wins");
    }
    if(boxes[pattern[0]].innerText=="X"&&boxes[pattern[1]].innerText=="X"&&boxes[pattern[2]].innerText=="X"){
        console.log("b wins");
    };
   }
};

reset.addEventListener("click",()=>{
     
});