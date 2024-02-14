let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

// agar turnO is true then O will play its chance else the chance will be of X 
        let turnO = true;

// now we will store the winning chance in an 2 dimensional array 

        const winPatterns = [
            [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
        ];

// Apply Event listener on incidual boxes to display X or O 

        boxes.forEach((box) => {
            box.addEventListener('click', () => {
                // console.log("The box was clicked");
                if (turnO === true) {
                    box.innerText = "O"
                    turnO = false;
                }
                else {
                    box.innerText = "X"
                    turnO = true
                }
                // Now ek baar click karne ke baad agar dobara same box par click krege toh box ki value firse change ho jayegi so to prevent ghis we use .disabled i.e
                box.disabled = true;
                checkwinner();
            })
        });



// Display Winner

        //agar winner mil jaye toh baki boxes ko click nhi kr sakte

        const disableBoxes=()=>{
            for(let box of boxes)
            box.disabled=true;  
        }

        // now if we start a new game again we need to enable the boxes 

        const enableBoxes=()=>{
            for (let box of boxes) {
                box.disabled=false;
                box.innerText=""
            }
        }

        const showWinner = (winner) => {
            msg.innerText = `Winner is ${winner}`
            msgcontainer.classList.add("active")
            disableBoxes();
        }

// To check the Winner 

        const checkwinner = () => {
            for (let pattern of winPatterns) {
                // console.log(pattern[0],pattern[1],pattern[2]);
                //    here 0,1,2 represesnt the index of each pattern 
                // boexs is set of box , now if pattern[0]=6, so we find boxes[pattern[0]], i.e boxes[6].innerText that could be x or y 

                // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

                let pos1val = boxes[pattern[0]].innerText
                let pos2val = boxes[pattern[1]].innerText
                let pos3val = boxes[pattern[2]].innerText
                // winner tabhi ayega jab koi bhi box empty na ho 

                if (pos1val != "" && pos2val != "" && pos3val != "") {
                    if (pos1val === pos2val && pos2val === pos3val) {
                        showWinner(pos1val);
                    }
                }
            }
        }

        // reset button 

        const resetGame=()=>{
            turnO=true;
            enableBoxes();
            msgcontainer.classList.remove("active")
        }

        resetbtn.addEventListener('click',resetGame)
        newbtn.addEventListener("click",resetGame)
