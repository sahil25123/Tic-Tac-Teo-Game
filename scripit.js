let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#Reset")
let trun_O=true;
let trun_X;
let new_bt=document.querySelector("#new_bt")

let msg_container=document.querySelector(".msg_container")
let msg =document.querySelector("#msg")

const win_patterns= 
[[0,1,2]
,[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]]

boxes.forEach((box) =>{box.addEventListener("click",()=> {
    console.log("Box was Clicked"); 
    if (trun_O==true){

        box.innerText="O";
        trun_O= false;
    }
    else{
        box.innerText="X"
        trun_O=true;
    }
    box.disabled = true;
    check_winner();
}) 
})
const reset_game=()=>{
    trun_O=true
    enable_boxes()
    msg_container.classList.add("hide")
}
const disable_boxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }

}
const enable_boxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText="";
    }
}
const showWinner= (winner) =>{ 
    msg.innerText=`Congraluations, Winner is ${winner}`;
    msg_container.classList.remove("hide")
    disable_boxes()

}
const check_winner =() =>{
    for(pattern of win_patterns)
    {
        let pos_val1=boxes[pattern[0]].innerText;
        let pos_val2=boxes[pattern[1]].innerText;
        let pos_val3=boxes[pattern[2]].innerText;
        if(pos_val1!="" && pos_val2!="" && pos_val3!="")
            if(pos_val1===pos_val2 &&  pos_val2===pos_val3){
                console.log("Winner")
                showWinner(pos_val1)
            }
    }
}


new_bt.addEventListener("click",reset_game)
reset.addEventListener("click",reset_game)