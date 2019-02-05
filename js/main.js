/*----- cached element references -----*/
let setImg1 = document.querySelector('.ring1'); 
let setImg2 = document.querySelector('.ring2'); 
let setImg3 = document.querySelector('.ring3'); 

/*----- event listeners -----*/

document.getElementById('spin').addEventListener('click',setSlot);
document.getElementById('quit').addEventListener('click', endGame);

/*----- app's state (variables) -----*/

let intialArray = [7, 7, 7, 10, 7, 8, 10, 9, 10, 9, 7, 8]; 
let slotArray = [];



/*----- functions -----*/
startGame();
//function startGame() 
/* Game will sart when start button is click*/ 
function startGame(){ 

setImg1.innerText = intialArray[0];
setImg2.innerText = intialArray[0];
setImg3.innerText = intialArray[0];
}

//function spinSlot() 
//will spin each slot one at a time
function spinSlot(){ 
    
}

//function checkForWin()
//will check for possible on single 
function checkForWin(){ 
    if (slotArray[0] === slotArray[1] && slotArray[0] === slotArray[2]){ 
        slotArray = []; 
        timer();
        document.getElementById('msg').innerText = "win"; 
        return; 
        
    }else { 
        slotArray = [];
        timer();
        document.getElementById('msg').innerText = "lose"; 
        return; 
    
    }
}
function setSlot(){ 
   // document.getElementById('msg').innerText = ""; 
    //pushes 3 elements to slotArray
    for(var i = 0; i < 3; i++){ 
       slotArray.push( intialArray[Math.floor(Math.random() * intialArray.length)]);    
       console.log(slotArray);    
    }
    setImg1.innerText = slotArray[0];
    setImg2.innerText = slotArray[1];
    setImg3.innerText = slotArray[2];

    checkForWin();

}
//function endGame()
//will end Game when QUIT button is click 
function endGame(){ 
    alert("Game Over"); 
    document.getElementById('msg').innerText = ""; 
    startGame(); 
}

function timer(){ 
    setTimeout(function(){ 
        document.getElementById('msg').innerText = "";
    }, 1000);
}