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
const newGameBtn = document.getElementById('newGame');
const rulesBtn = document.getElementById('rules');
const quitBtn = document.getElementById('quit');
const rulesModal = document.getElementById('rulesModal');
const closeBtn = document.getElementsByClassName('close');
console.log(closeBtn);

const coinTossModal = document.getElementById('coinToss');
const headsBtn = document.getElementById('heads');
const tailsBtn = document.getElementById('tails');
const coinTossWinModal = document.getElementById('coinTossWinModal');
const coinTossLoseModal = document.getElementById('coinTossLoseModal');

const highBtn = document.getElementsByClassName('high');
const midBtn = document.getElementsByClassName('mid');
const lowBtn = document.getElementsByClassName('low');
const attackModal = document.getElementById('slap');
const defendModal = document.getElementById('block');






let background = document.body.style.backgroundImage;

//Coin Toss
let coinChoice = "";
let doubleDamage = true;

//Event listeners
newGameBtn.addEventListener('click', newGame);
rulesBtn.addEventListener('click', rules);
closeBtn[0].addEventListener('click', close);
closeBtn[1].addEventListener('click', close);
closeBtn[2].addEventListener('click', close);
quitBtn.addEventListener('click', quit);

headsBtn.addEventListener('click', heads);
tailsBtn.addEventListener('click', tails);

highBtn[0].addEventListener('click', high);
midBtn[0].addEventListener('click', mid);
lowBtn[0].addEventListener('click', low);
highBtn[1].addEventListener('click', high);
midBtn[1].addEventListener('click', mid);
lowBtn[1].addEventListener('click', low);


//functions
function mainScreen(){
    //background = www.images.com/titlescreen.png;
    //attack and defend buttons fade out, modal windows gone
    closeModals()
}

function closeModals () {
    attackModal.style.transform = "scaleX(0)";
    defendModal.style.transform = "scaleX(0)";

    coinTossModal.style.display = "none";
    coinTossWinModal.style.display = "none";
    coinTossLoseModal.style.display = "none";

    rulesModal.style.display = "none";
}

function newGame() {
    document.body.style.backgroundColor = "purple";
    closeModals();
    player.hp = 5;
    player.move = '';
    cpu.hp = 5;
    cpu.move = '';
    coinChoice = "";
    coinTossModal.style.display = "block";
   //background = www.images.com/main.png; 
}

//Rules pop up
function rules() {
    rulesModal.style.display = "block";
}
//Closes rules pop up
function close() {
    rulesModal.style.display = "none";
    coinTossWinModal.style.display = "none";
    coinTossLoseModal.style.display = "none";
    console.log("close clicked");
}
//Quits game and returns to main screen

function quit() {
    console.log("Button clicked");
    mainScreen();
}

function heads() {
    coinChoice = 'heads';
    console.log(coinChoice);
    coinToss();
}

function tails() {
    coinChoice = 'tails';
    console.log(coinChoice);
    coinToss();
}

//coin toss to see who goes first
function coinToss() {
    console.log("Coin Toss")
    console.log(coinChoice);
    coinTossModal.style.display = "none";
    document.body.style.backgroundColor = "magenta";

    let randomValue = (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
    console.log(randomValue);
    //if player wins, go to attack mode; if player loses, go to defense mode
    if (coinChoice === randomValue) {       
        coinTossWinModal.style.display = "block";
        attack();
    } else {
        coinTossLoseModal.style.display = "block";
        defend();
    }
    
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

//Randomizes opponent's move
function randomize() {

}

function attack() {
    console.log("Attack");
    document.body.style.backgroundColor = "darkred";
    //background = www.images.com/attack.png;
    //slide in attack buttons, slide out defend buttons
    attackModal.style.transform = "scaleX(1)";
    defendModal.style.transform = "scaleX(0)";
    //randomize opponent value
    //get player value
    //check for match
    //if match, go to attack fail bg
    //background = www.images.com/attackFail.png;
    //if not a match, go to attack success bg, minus 1hp from opponent
    //background = www.images.com/attackSuccess.png;
    //check doubleDamage; if 'true', minus 2hp instead of 1 and flip to 'false' 
    //background = www.images.com/attack.png;
    //check opponent hp
    //if 0, go to win()
    //if not 0, go to defend()
}

function defend () {
    console.log("Defend");
    document.body.style.backgroundColor = "darkblue";
    //background = www.images.com/defend.png;
    //slide in defend buttons, slide out attack buttons
    attackModal.style.transform = "scaleX(0)";
    defendModal.style.transform = "scaleX(1)";
    //randomize opponent value
    //get player value
    //check for match
    //if match, go to defend fail bg, minus 1hp from player
    //check doubleDamage; if 'true', minus 2hp instead of 1 and flip to 'false'
    //background = www.images.com/defendFail.png;
    //if not a match, go to defend success bg
    //background = www.images.com/defendSuccess.png;
    //check player hp
    //if 0, go to lose()
    //if not 0, go to attack()
}


function win() {
    console.log("Win");
    document.body.style.backgroundColor = "pink";
    attackModal.style.transform = "scaleX(1)";
    defendModal.style.transform = "scaleX(0)";
    //background = www.images.com/win.png;
}

function loss() {
    console.log("Loss");
    document.body.style.backgroundColor = "grey";
    attackModal.style.transform = "scaleX(1)";
    defendModal.style.transform = "scaleX(0)";
    //background = www.images.com/loss.png;
}

mainScreen();
