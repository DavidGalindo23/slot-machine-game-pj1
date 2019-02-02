//function startGame() 
/* Game will sart when start button is click*/ 
function startGame(){ 

}

//function spinSlot() 
//will spin each slot one at a time
function spinSlot(){ 

}

//function checkForWin()
//will check for possible on single 
function checkForWin(){ 
    let intialArray = [7, 7, 7, 10, 7, 8, 10, 9, 10, 9, 7, 8]; 
    let slotArray = []
    for(var i = 0; i < 3; i++){ 
       slotArray.push( intialArray[Math.floor(Math.random() * intialArray.length)]);    
       console.log(slotArray);    
    }
    if (slotArray[0] === slotArray[1] && slotArray[0] === slotArray[2]){ 
        return console.log("winner"); 
    }else { 
        return console.log("loser"); 
    }
}
//function endGame()
//will end Game when cash out button is click 
function endGame(){ 

}



