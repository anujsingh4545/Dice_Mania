'use strict';
// Selecting elements 
const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");
const score_0 = document.getElementById("score--0");
const score_1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const dice_roll = document.querySelector(".btn--roll");
const new_game = document.querySelector(".btn--new");
const btn_hold = document.querySelector(".btn--hold");
const Currscore_0 = document.getElementById("current--0");
const Currscore_1 = document.getElementById("current--1");


// Scores section of players 
let score= [0,0];
let active_player =0;
let current_score = 0;

// To control when someone wins the game
let game = true;

//Similar function
function swap(){
    active_player = (active_player === 0) ? 1 : 0;
    player_0.classList.toggle('player--active');
    player_1.classList.toggle('player--active');
}

//Starting conditions 
score_0.textContent = 0;
score_1.textContent = 0;
diceEl.classList.add('hidden');


// Funtion to roll dice when clicked on dice_roll

dice_roll.addEventListener('click',function(){
    if(game===true){
    let random = Math.floor(Math.random()*6)+1;  // Generate value from 1 to 6

    // Displaying the dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;
    
    // Checking random number is 1 or not , if not add score to current player
    if(random==1){
        current_score = 0;
        document.getElementById(`current--${active_player}`).textContent = 0;
        swap();
    }
    else{
        // If number is not 1 add it to current score 
        current_score += random;
        document.getElementById(`current--${active_player}`).textContent = current_score;
    }
}
})


// Function to hold when btn_hold is clicked

btn_hold.addEventListener('click',function(){
    score[active_player] += current_score;
    document.getElementById(`score--${active_player}`).textContent = score[active_player];
    current_score =0;
    document.getElementById(`current--${active_player}`).textContent = current_score;
    if(score[active_player]>=50){
        game = false;
        document.querySelector(`.player--${active_player}`).classList.add('player--winner');
        document.getElementById(`name--${active_player}`).textContent = "WINNER";
        diceEl.classList.add('hidden');
    }
    else{
        swap();

    }
})

//Function when new game button  is clicked
new_game.addEventListener('click',function(){
    score[0]=0;
    score[1]=0;
    active_player =0;
    current_score =0;
    score_0.textContent = 0;
    score_1.textContent =0;
    Currscore_0.textContent =0;
    Currscore_1.textContent =0;
    diceEl.classList.add('hidden');
    player_1.classList.remove('player--active');
    player_0.classList.add('player--active');
    player_1.classList.remove('player--winner');
    player_0.classList.remove('player--winner');
    document.getElementById(`name--0`).textContent = "Player 1";
    document.getElementById(`name--1`).textContent = "Player 2";
    game = true;
})
