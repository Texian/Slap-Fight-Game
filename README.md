# SlapDown-Game

SlapDown is a simple luck-based game inspired by professional slap competitions. I wanted to write something that had a very simple scope; the original plan had a rock-paper-scissors style mechanic to run it, but when I came up with the idea of what the game was, it was hard to work that mechanic into the game style. So instead it works like the absolute basics of a fighting game: an attack on a block of the same level fails, otherwise it succeeds.

![Game Flow](/assets/GameFlow.png)

The game is entirely in HTML, CSS, and JavaScript. The bulk of the HTML is hidden in modal blocks that come into view when needed by alterations made to their CSS by events in JS. The mechanics work on simple comparisons and simple loops. The computer randomly chooses between three moves, the player selects their own move, and if they pick moves on the same level - high, mid, or low - then the attack fails and defender succeeds. Otherwise, the attacker succeeds and defender loses 1hp. Who attacks first is determined by a coin flip, and the loser gets an extra first attack to try and offset the "first player advantage".
The game loops between attack and block modes until either the player or cpu's health value reaches 0, at which point the loop breaks and goes to a win or lose screen, and gives the option to play again.

The only unsolved problems I have are minor stylizations and effects that are definitely part of the polish phase. Mechanically, I think I've got everything where I want it to be for what it is, and I feel the groundwork is in place for a meatier game that would use skill and strategy over luck.

The biggest challenges I ran into were working with CSS. The HTML was minimal, and JS threw a few loops my way when I would try something fancy that we hadn't gone over in class but was otherwise not too terrible once I got a better grasp on DOM. But CSS was a bit of a beast to try and figure out, as one seemingly innocuous change to one element would somehow rearrange the layout of everything else on the page. I didn't do myself any favors by creating artwork that wasn't sized to my browser window, but I guess that means I was forced to learn how to deal with the weird problems that arose.

![Layout](/assets/Layout.png)