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

const healthBarValues = {
    '0': '190px',
    '1': '152px',
    '2': '114px',
    '3': '76px',
    '4': '38px',
    '5': '0'
}

//Cached elements
const newGameBtn = document.getElementById('newGame');
const rulesBtn = document.getElementById('rules');
const quitBtn = document.getElementById('quit');
const rulesModal = document.getElementById('rulesModal');
const closeBtn = document.getElementsByClassName('close');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const playAgainModal = document.getElementById('playAgainModal');
const menuModal = document.getElementById('menu');

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
const playerHealth = document.querySelector('#playerHealth .bar .hit');
const cpuHealth = document.querySelector('#cpuHealth .bar .hit');
const playerBoxModal = document.getElementById('playerBox');
const cpuBoxModal = document.getElementById('cpuBox');
const healthBarsModal = document.getElementById('healthBars');


//Coin Toss
let coinChoice = '';
let doubleDamage = true;

let round = '';
let roundNumber = 0;


//Event listeners
newGameBtn.addEventListener('click', newGame);
rulesBtn.addEventListener('click', rules);
closeBtn[0].addEventListener('click', close);
closeBtn[1].addEventListener('click', close);
closeBtn[2].addEventListener('click', close);
quitBtn.addEventListener('click', quit);
yesBtn.addEventListener('click', newGame);
noBtn.addEventListener('click', mainScreen);

headsBtn.addEventListener('click', heads);
tailsBtn.addEventListener('click', tails);

//0 = defend, 1 = attack
highBtn[0].addEventListener('click', high);
midBtn[0].addEventListener('click', mid);
lowBtn[0].addEventListener('click', low);
highBtn[1].addEventListener('click', high);
midBtn[1].addEventListener('click', mid);
lowBtn[1].addEventListener('click', low);


//FUNCTIONS

//Title screen
function mainScreen(){
    document.body.style.backgroundImage = "url('../images/TitleScreen.png')";
    //attack and defend buttons fade out, modal windows gone
    closeModals()
}

//Closes all modals
function closeModals () {
    attackModal.style.transform = "scaleX(0)";
    defendModal.style.transform = "scaleX(0)";

    coinTossModal.style.display = "none";
    coinTossWinModal.style.display = "none";
    coinTossLoseModal.style.display = "none";

    rulesModal.style.display = "none";

    playAgainModal.style.display = "none";
    playerBoxModal.style.transform = "scaleX(0)";
    cpuBoxModal.style.transform = "scaleX(0)";
    // healthBarsModal.style.display = "none";
}

//Rules pop up
function rules() {
    rulesModal.style.display = "block";
}

//Closes individual modals
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

//Starts new game, resets variables to defaults, brings up coin toss
function newGame() {
    document.body.style.backgroundColor = "purple";
    closeModals();
    menuModal.style.transform = "scaleY(0)";
    playerBoxModal.style.transform = "scaleX(1)";
    cpuBoxModal.style.transform = "scaleX(1)";
    // healthBarsModal.style.display = "flex";
    player.hp = 5;
    player.move = '';
    cpu.hp = 5;
    cpu.move = '';
    doubleDamage = true;
    coinChoice = "";
    coinTossModal.style.display = "block";
    healthBars();
    document.body.style.backgroundImage = "url('../images/TitleScreen.png')";
}

function healthBars() {
    playerHealth.style.width = healthBarValues[player.hp.toString()];
    cpuHealth.style.width = healthBarValues[cpu.hp.toString()];
}

//Coin toss heads option
function heads() {
    coinChoice = 'heads';
    console.log(coinChoice);
    coinToss();
}

//Coin toss tails option
function tails() {
    coinChoice = 'tails';
    console.log(coinChoice);
    coinToss();
}

//Coin toss results to see who goes first
function coinToss() {
    console.log("Coin Toss")
    console.log(coinChoice);
    coinTossModal.style.display = "block";
    document.body.style.backgroundColor = "magenta";

    let randomValue = (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
    console.log(randomValue);
    //if player wins, go to attack mode; if player loses, go to defense mode
    if (coinChoice === randomValue) {       
        coinTossModal.style.display = "none";
        coinTossWinModal.style.display = "block";
        round = 'attack'
        attack();
    } else {
        coinTossModal.style.display = "none";
        coinTossLoseModal.style.display = "block";
        round = 'defend'
        defend();
    }
    
}
function whichMode() {
    coinTossWinModal.style.display = "none";
    coinTossLoseModal.style.display = "none";
    if (round === 'attack') {
        attackResolve();
    } else if (round === 'defend') {
        defendResolve();
    }
} 
//Selects high attack or block
function high() {
    console.log("High Button clicked");
    player.move = "high";
    console.log(`Player move: ${player.move}`);
    whichMode();
}
//Selects mid attack or block
function mid() {
    console.log("Mid Button clicked");
    player.move = "mid";
    console.log(`Player move: ${player.move}`);
    whichMode();
}
//Selects low attack or block
function low() {
    console.log("Low Button clicked");
    player.move = "low";
    console.log(`Player move: ${player.move}`);
    whichMode();
}

//Randomizes opponent's move
function randomizer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Assigns random move
function cpuMove() {
    console.log("Randomizing opponent")
    cpuMoveVar = randomizer(0, 2);
    
    if (cpuMoveVar === 0){
        cpu.move = "high";
    } else if (cpuMoveVar === 1) {
        cpu.move = "mid";
    } else if (cpuMoveVar === 2) {
        cpu.move = "low";
    }
    console.log(cpuMoveVar);
    console.log(`CPU move: ${cpu.move}`);
}

function moveReset () {
    cpu.move = '';
    player.move = '';
    roundNumber++;
}

function attack() {
    moveReset();
    cpuMove();
    console.log("Attack");
    console.log(cpu.move, player.move);
    document.body.style.backgroundColor = "darkred";
    //background = www.images.com/attack.png;
    //slide in attack buttons, slide out defend buttons
    attackModal.style.transform = "scaleX(1)";
    defendModal.style.transform = "scaleX(0)";
    document.body.style.backgroundImage = "url('../images/AttackScreen.png')";
}
 
function attackResolve(){

    if (cpu.move === player.move){
        console.log(cpu.move, player.move);
        console.log("Attack blocked");
        document.body.style.backgroundImage = "url('../images/AttackFailScreen.png')";
    } else {
        console.log(cpu.move, player.move);
        console.log("Attack successful")
        document.body.style.backgroundImage = "url('../images/AttackSucceedScreen.png')";
        cpu.hp = cpu.hp - 1;
        healthBars();
    }
    console.log(`${player.hp}, ${cpu.hp}`);
    //background = www.images.com/attack.png;
    
    if (cpu.hp === 0) {
        attackModal.style.transform = "scaleX(0)";
        setTimeout(win, 1500); 
    } else if (roundNumber === 2){
        attackModal.style.transform = "scaleX(0)";
        setTimeout(attack, 1500);  
    } else {
        attackModal.style.transform = "scaleX(0)";
        round = 'defend';
        setTimeout(defend, 1500);
    }
}

function defend() {
    moveReset();
    cpuMove();
    console.log("Defend");
    console.log(cpu.move, player.move);
    document.body.style.backgroundColor = "darkblue";
    //background = www.images.com/defend.png;
    //slide in defend buttons, slide out attack buttons
    attackModal.style.transform = "scaleX(0)";
    defendModal.style.transform = "scaleX(1)";
    document.body.style.backgroundImage = "url('../images/DefendScreen.png')";
}

function defendResolve() {

    //check for match
    //if match, go to defend fail bg, minus 1hp from player
    //check doubleDamage; if 'true', minus 2hp instead of 1 and flip to 'false'
    if (cpu.move === player.move) {
        console.log(cpu.move, player.move);
        console.log("Block successful");
        document.body.style.backgroundImage = "url('../images/DefendSucceedScreen.png')";
    } else {
        console.log(cpu.move, player.move);
        console.log("Block failed");
        document.body.style.backgroundImage = "url('../images/DefendFailScreen.png')";
        player.hp = player.hp - 1;
        healthBars();
    }
    console.log(`${player.hp}, ${cpu.hp}`);
    //background = www.images.com/defend.png;

    if (player.hp === 0) {      
        defendModal.style.transform = "scaleX(0)";
        setTimeout(lose, 1500);
    } else if (roundNumber === 2){
        defendModal.style.transform = "scaleX(0)";
        setTimeout(defend, 1500);
    } else {
        defendModal.style.transform = "scaleX(0)";
        round = 'attack';
        setTimeout(attack, 1500);
    }
}


function win() {
    console.log("Win");
    document.body.style.backgroundColor = "pink";
    attackModal.style.transform = "scaleX(0)";
    defendModal.style.transform = "scaleX(0)";
    document.body.style.backgroundImage = "url('../images/WinScreen.png')";
    playAgainModal.style.display = "block";
}

function lose() {
    console.log("Loss");
    document.body.style.backgroundColor = "grey";
    attackModal.style.transform = "scaleX(0)";
    defendModal.style.transform = "scaleX(0)";
    document.body.style.backgroundImage = "url('../images/LoseScreen.png')";
    playAgainModal.style.display = "block";
}

mainScreen();
