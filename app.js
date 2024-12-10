let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgconatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO  = true;

const winPatters = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgconatiner.classList.add("hide");
    count = 0;
}

let count = 0; 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText = "O";
            box.classList.add("toecolor");
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
            box.classList.remove("toecolor");
        }
        box.disabled = true;
        count++;
        drawGmae();
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disableBoxes();
};

const drawGmae = () => {
    if(count === 9){
        msg.innerText = "Oops !! Game is Draw";
        msgconatiner.classList.remove("hide");
    }
}

const checkWinner = () => {
    for(pattern of winPatters){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);
            }
        }
        
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


