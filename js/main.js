console.log("sanity check");

//players
const player = {
    hp: 5,
    move:''
}

const cpu = {
    hp: 5,
    move:''
}

//Cached elements
let newGameBtn = document.getElementById('newGame');
let rulesBtn = document.getElementById('rules');
let quitBtn = document.getElementById('quit');

let highBtn = document.getElementsByClassName('high');
let midBtn = document.getElementsByClassName('middle');
let lowBtn = document.getElementsByClassName('low');

let modal = document.getElementById('rulesModal');
let closeBtn = document.getElementsByClassName('close')[0];

let background = document.body.style.backgroundImage;

//Coin Toss
let choice = "";
let doubleDamage = true;

//Event listeners
newGameBtn.addEventListener('click', newGame);
rulesBtn.addEventListener('click', rules);
closeBtn.addEventListener('click', close);
quitBtn.addEventListener('click', quit);

highBtn[0].addEventListener('click', high);
midBtn[0].addEventListener('click', mid);
lowBtn[0].addEventListener('click', low);
highBtn[1].addEventListener('click', high);
midBtn[1].addEventListener('click', mid);
lowBtn[1].addEventListener('click', low);


//functions
function mainScreen(){
    background = www.images.com/titlescreen.png;
    //attack and defend buttons fade out
}

function newGame() {
    console.log("Button clicked");
    player.hp = 5;
    player.move = '';
    cpu.hp = 5;
    cpu.move = '';
    coinChoice = "";
    background = www.images.com/roundstart.png;
    coinToss();
}

//Rules pop up
function rules() {
    modal.style.display = "block";
}
//Closes rules pop up
function close() {
    modal.style.display = "none";
}
//Quits game and returns to main screen

function quit() {
    console.log("Button clicked");
    mainScreen();
}

//coin toss to see who goes first
function coinToss() {
    return (Math.floor(Math.random() * 2)=== 0) ? 'heads' : 'tails';
    //if player wins, go to attack mode; if player loses, go to defense mode
}

function attack() {
    //load attack bg
    //slide in attack buttons, slide out defend buttons
    //randomize opponent value
    //get player value
    //check for match
    //if match, go to attack fail bg
    //if not a match, go to attack success bg, minus 1hp from opponent
    //check doubleDamage; if 'true', minus 2hp instead of 1 and flip to 'false' 
    //check opponent hp
    //if 0, go to win()
    //if not 0, go to defend()
}

function defend () {
    //load defend bg
    //slide in defend buttons, slide out attack buttons
    //randomize opponent value
    //get player value
    //check for match
    //if match, go to defend fail bg, minus 1hp from player
    //check doubleDamage; if 'true', minus 2hp instead of 1 and flip to 'false'
    //if not a match, go to defend success bg
    //check player hp
    //if 0, go to lose()
    //if not 0, go to attack()
}

//Selects high attack or block
function high() {
    console.log("Button clicked");
    player.move = "high";
    console.log(player.move);
}
//Selects mid attack or block
function mid() {
    console.log("Button clicked");
    player.move = "mid";
    console.log(player.move);
}
//Selects low attack or block
function low() {
    console.log("Button clicked");
    player.move = "low";
    console.log(player.move);
}

coinToss();

//main screen
//display main background, no side buttons
//New Game starts game logic
//Quit resets to main screen


//coin flip
//player selects heads or tails
//coin flips
//win, player attacks first; loss, player defends first

//attack screen
//buttons on left fade out
//buttons on right fade in
//background switches to attack
//cpu selects random defense option
//player clicks attack option
//if successful attack: background switches to successful attack, opponent loses 1hp
//if failed attack: background switches to failed attack
//checks for 0hp on opponent: if false, moves to defend screen; if true, moves to win screen

//defend screen
//buttons on right fade out
//buttons on left fade in
//background switches to defend
//cpu selects random attack option
//player clicks defense option
//if successful defense, background switches to succesful defense
//if failed defense, background switches to failed defense, player loses 1hp
//checks for 0hp on player: if false, moves to attack screen; if true, moves to lose screen

//win screen
//background switches to win
//gives player option to play again

//loss screen
//background switches to loss
//gives player option to play again
