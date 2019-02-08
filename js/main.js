/*----- cached element references -----*/
let setImg1 = document.querySelector('.ring1'); 
let setImg2 = document.querySelector('.ring2'); 
let setImg3 = document.querySelector('.ring3'); 


/*----- event listeners -----*/

document.getElementById('spin').addEventListener('click',function(){
  setImg1.style.animationName = 'none';
  setImg2.style.animationName = 'none';
  setImg3.style.animationName = 'none';
  setImg1.textContent = '';
  setImg2.textContent = '';
  setImg3.textContent = '';
  setTimeout(function() {
    // note that you only need a single animation
    setSlot()
    // setTimeout(function() {
      setImg1.style.animationName = 'ring1';
      setImg2.style.animationName = 'ring1';
      setImg3.style.animationName = 'ring1';
      
      // 
    // }, 3200);
  }, 100);
});
document.getElementById('quit').addEventListener('click', endGame);

/*----- app's state (variables) -----*/

let intialArray = [7, 7, 7, 1, 7, 8, 1, 9, 1, 9, 7, 8, 5, 5, 5]; 
let slotArray = [];



/*----- functions -----*/
startGame();
//function startGame() 
/* Game will sart when start button is click*/ 
function startGame(){ 
    
setImg1.style.backgroundImage = "url('images/Lucky_Seven.png')";
setImg2.style.backgroundImage = "url('images/Q.png')";
setImg3.style.backgroundImage = "url('images/King.png')";
}

//function spinSlot() 
//will spin each slot one at a time


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
  //pushes 3 elements to slotArray
  setImg1.innerText = ''
  setImg2.innerText = ''
  setImg3.innerText = ''

  for(var i = 0; i < 3; i++){ 
      slotArray.push( intialArray[Math.floor(Math.random() * intialArray.length)]);  
  }
  if(slotArray[0] === 1){ 
      setImg1.style.backgroundImage = "url('images/A.png')";
  } else if(slotArray[0] === 5){ 
    setImg1.style.backgroundImage = "url('images/cherry.png')";
  } else if(slotArray[0] === 7){ 
    setImg1.style.backgroundImage = "url('images/Lucky_Seven.png')";
  } else if(slotArray[0] === 8){ 
    setImg1.style.backgroundImage = "url('images/Q.png')";
  }else{ 
    setImg1.style.backgroundImage = "url('images/King.png')";
  }
  
  if(slotArray[1] === 1){ 
    setImg2.style.backgroundImage = "url('images/A.png')";
} else if(slotArray[1] === 5){ 
  setImg2.style.backgroundImage = "url('images/cherry.png')";
} else if(slotArray[1] === 7){ 
  setImg2.style.backgroundImage = "url('images/Lucky_Seven.png')";
} else if(slotArray[1] === 8){ 
  setImg2.style.backgroundImage = "url('images/Q.png')";
}else{ 
  setImg2.style.backgroundImage = "url('images/King.png')";
}

if(slotArray[2] === 1){ 
    setImg3.style.backgroundImage = "url('images/A.png')";
} else if(slotArray[2] === 5){ 
  setImg3.style.backgroundImage = "url('images/cherry.png')";
} else if(slotArray[2] === 7){ 
  setImg3.style.backgroundImage = "url('images/Lucky_Seven.png')";
} else if(slotArray[2] === 8){ 
  setImg3.style.backgroundImage = "url('images/Q.png')";
}else{ 
  setImg3.style.backgroundImage = "url('images/King.png')";
}
  setTimeout(function(){
    checkForWin();
  }, 3200)
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
