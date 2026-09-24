// Blackjack is a card game where the player competes against the dealer.
// The goal is to build a hand as close to 21 than the dealer without going over.
// Both players are dealt two cards.
// The player gets two face-up cards. The dealer gets one face-up and one face-down (hole) card.
// If one player starts with 21 points or over, the game ends.

// How the cards are built.
class Card {
    constructor(suit, number, symbol) {
        this.suit = suit;
        this.number = number;
        this.symbol = symbol;
    }
}

// Points
var playerPoints = 0;
var dealerPoints = 0;

// Current player
var currentPlayer = "Player";

// Determines state the game is in.
var gameStatus = "playing";

// Cards

// Spades
var aceSpades = new Card("Spades", 11, "🂡");
var twoSpades = new Card("Spades", 2, "🂢");
var threeSpades = new Card("Spades", 3, "🂣");
var fourSpades = new Card("Spades", 4, "🂤");
var fiveSpades = new Card("Spades", 5, "🂥");
var sixSpades = new Card("Spades", 6, "🂦");
var sevenSpades = new Card("Spades", 7, "🂧");
var eightSpades = new Card("Spades", 8, "🂨");
var nineSpades = new Card("Spades", 9, "🂩");
var tenSpades = new Card("Spades", 10, "🂪");
var jackSpades = new Card("Spades", 10, "🂫");
var queenSpades = new Card("Spades", 10, "🂭");
var kingSpades = new Card("Spades", 10, "🂮");

// Hearts
var aceHearts = new Card("Hearts", 11, "🂱");
var twoHearts = new Card("Hearts", 2, "🂲");
var threeHearts = new Card("Hearts", 3, "🂳");
var fourHearts = new Card("Hearts", 4, "🂴");
var fiveHearts = new Card("Hearts", 5, "🂵");
var sixHearts = new Card("Hearts", 6, "🂶");
var sevenHearts = new Card("Hearts", 7, "🂷");
var eightHearts = new Card("Hearts", 8, "🂸");
var nineHearts = new Card("Hearts", 9, "🂹");
var tenHearts = new Card("Hearts", 10, "🂺");
var jackHearts = new Card("Hearts", 10, "🂻");
var queenHearts = new Card("Hearts", 10, "🂽");
var kingHearts = new Card("Hearts", 10, "🂾");

// Diamonds
var aceDiamonds = new Card("Diamonds", 11, "🃁");
var twoDiamonds = new Card("Diamonds", 2, "🃂");
var threeDiamonds = new Card("Diamonds", 3, "🃃");
var fourDiamonds = new Card("Diamonds", 4, "🃄");
var fiveDiamonds = new Card("Diamonds", 5, "🃅");
var sixDiamonds = new Card("Diamonds", 6, "🃆");
var sevenDiamonds = new Card("Diamonds", 7, "🃇");
var eightDiamonds = new Card("Diamonds", 8, "🃈");
var nineDiamonds = new Card("Diamonds", 9, "🃉");
var tenDiamonds = new Card("Diamonds", 10, "🃊");
var jackDiamonds = new Card("Diamonds", 10, "🃋");
var queenDiamonds = new Card("Diamonds", 10, "🃍");
var kingDiamonds = new Card("Diamonds", 10, "🃎");

// Clubs
var aceClubs = new Card("Clubs", 11, "🃑");
var twoClubs = new Card("Clubs", 2, "🃒");
var threeClubs = new Card("Clubs", 3, "🃓");
var fourClubs = new Card("Clubs", 4, "🃔");
var fiveClubs = new Card("Clubs", 5, "🃕");
var sixClubs = new Card("Clubs", 6, "🃖");
var sevenClubs = new Card("Clubs", 7, "🃗");
var eightClubs = new Card("Clubs", 8, "🃘");
var nineClubs = new Card("Clubs", 9, "🃙");
var tenClubs = new Card("Clubs", 10, "🃚");
var jackClubs = new Card("Clubs", 10, "🃛");
var queenClubs = new Card("Clubs", 10, "🃝");
var kingClubs = new Card("Clubs", 10, "🃞");

// Cards
var deck = 
[aceSpades, twoSpades, threeSpades, fourSpades, fiveSpades, sixSpades, sevenSpades, eightSpades, nineSpades, tenSpades, jackSpades, queenSpades, kingSpades,
aceHearts, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts, jackHearts, queenHearts, kingHearts,
aceDiamonds, twoDiamonds, threeDiamonds, fourDiamonds, fiveDiamonds, sixDiamonds, sevenDiamonds, eightDiamonds, nineDiamonds, tenDiamonds, jackDiamonds, queenDiamonds, kingDiamonds,
aceClubs, twoClubs, threeClubs, fourClubs, fiveClubs, sixClubs, sevenClubs, eightClubs, nineClubs, tenClubs, jackClubs, queenClubs, kingClubs];

// Hands
var playerHand = [];
var dealerHand = [];

// Starts the game.
// Both players are dealt two cards.
// The player gets two face-up cards. The dealer gets one face-up and one face-down (hole) card.
// If one player starts with 21 points or over, the game ends.
function start() {
    var startCard = deck[Math.floor(Math.random() * deck.length)];

    if (gameStatus == "start") {
        playerHand.push(startCard);
        document.getElementById("displayPlayer").textContent += startCard.symbol;
        document.getElementById("displayPlayerPoints").textContent = "Player's Point Count: " + playerPoints;
        dealerHand.push(startCard);

        dealerHand.push(startCard);
        document.getElementById("displayDealer").textContent += startCard.symbol;
        document.getElementById("displayDealerPoints").textContent = "Dealer's Point Count: " + dealerPoints;
    }
}


// Win conditions.
function endGame() {
    // If either player has 21 points
    if (playerPoints == 21) {
        document.getElementById("switchPlayers").textContent = "Player wins.";
    }
    if (dealerPoints == 21) {
        document.getElementById("switchPlayers").textContent = "Dealer wins.";
    }

    aceCard();
    console.log(aceCard);
    
    // If either player has over 21 points
    if (playerPoints > 21) {
        document.getElementById("switchPlayers").textContent = "Dealer wins.";
    }
    if (dealerPoints > 21) {
        document.getElementById("switchPlayers").textContent = "Player wins.";
    }
    gameStatus == "won";
}

// Changes current player.
function changeTurn() {
    if (playerPoints >= 21 || dealerPoints >= 21) {
        endGame();
    }
    else {

        if (currentPlayer == "Dealer") {
            currentPlayer = "Player";
            nextPlayer = "Dealer";
            document.getElementById("switchPlayers").textContent = "Player's turn.";
        }
        else {
            currentPlayer = "Dealer";
            nextPlayer = "Player";
            document.getElementById("switchPlayers").textContent = "Dealer's turn.";
        }
    }
}


// Draws a card.
function drawCard() {
    gameStatus = "playing";

    var card = deck[Math.floor(Math.random() * deck.length)];
    
    if (playerPoints >= 21 || dealerPoints >= 21) {
        endGame();
    }
    else {

        if (currentPlayer == "Player") {
            document.getElementById("displayPlayer").textContent += card.symbol;
            playerHand.push(card);
            deck.pop(card);
            playerPoints += card.number;
            document.getElementById("displayPlayerPoints").textContent = "Player's Point Count: " + playerPoints;
        }
        if (currentPlayer == "Dealer") {
            document.getElementById("displayDealer").textContent += card.symbol;
            dealerHand.push(card);
            deck.pop(card);
            dealerPoints += card.number;
            document.getElementById("displayDealerPoints").textContent = "Dealer's Point Count: " + dealerPoints;
        }
        
    }

    changeTurn();
    
}

// Skips a turn.
// The dealer must hit (add card) until reaching 17 points.
function pass() {
    if (gameStatus == "won") {
        return;
    }
    else {

        if (currentPlayer == "Dealer" && dealerPoints < 17) {
            return;
        }
        else if (currentPlayer == "Player" || dealerPoints >= 17) {
            changeTurn();
        }
    }
}

// Ace card behavior.
// By default, Ace cards are set to "11."
// If either player is at a disadvantage, set ace to "1."
function aceCard() {
    for (var i = 0; i < playerHand.length; i++) {

        var card = playerHand[i];

        if (card.number == 11) {
            if (currentPlayer == "Player" && playerPoints > 21) {
                playerPoints -= 10;
            }
        }
        
    }
    
    for (var i = 0; i < dealerHand.length; i++) {

        card = dealerHand[i];

        if (card.number == 11) {
            if (currentPlayer == "Dealer" && dealerPoints > 21) {
                dealerPoints -= 10;
            }
        }
        
    }
}

// Reset the game.
function reset() {
    deck = 
    [aceSpades, twoSpades, threeSpades, fourSpades, fiveSpades, sixSpades, sevenSpades, eightSpades, nineSpades, tenSpades, jackSpades, queenSpades, kingSpades,
    aceHearts, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts, jackHearts, queenHearts, kingHearts,
    aceDiamonds, twoDiamonds, threeDiamonds, fourDiamonds, fiveDiamonds, sixDiamonds, sevenDiamonds, eightDiamonds, nineDiamonds, tenDiamonds, jackDiamonds, queenDiamonds, kingDiamonds,
    aceClubs, twoClubs, threeClubs, fourClubs, fiveClubs, sixClubs, sevenClubs, eightClubs, nineClubs, tenClubs, jackClubs, queenClubs, kingClubs];

    gameStatus = "start";
    currentPlayer = "Player";
    nextPlayer = "Dealer";
    playerPoints = 0;
    dealerPoints = 0;
    dealerHand = 0;
    playerHand = [];
    dealerHand = [];

    document.getElementById("displayPlayerPoints").textContent = "Player's Point Count: " + 0;
    document.getElementById("displayDealerPoints").textContent = "Dealer's Point Count: " + 0;
    document.getElementById("switchPlayers").textContent = "Player's turn.";

    document.getElementById("displayPlayer").textContent = "";
    document.getElementById("displayDealer").textContent = "";
}


// Pauses the game.
function pause() {
    gameStatus = "pause";

    document.getElementById("displayPlayerPoints").textContent = "";
    document.getElementById("displayDealerPoints").textContent = "";
    document.getElementById("switchPlayers").textContent = "";

    document.getElementById("displayPlayer").textContent = "";
    document.getElementById("displayDealer").textContent = "";
    document.getElementById("pauseGame").textContent = "Unpause";
    document.getElementById("pauseGame").title = "Unpauses the game."
    document.getElementById("pauseGame").onlick = "unpause()";
}

// Unpauses the game.
function unpause() {
    gameStatus = "playing";

    document.getElementById("displayPlayerPoints").textContent = "Player's Point Count: " + playerPoints;
    document.getElementById("displayDealerPoints").textContent = "Dealer's Point Count: " + dealerPoints;
    document.getElementById("switchPlayers").textContent = currentPlayer + "'s turn.";

    document.getElementById("displayPlayer").textContent = playerHand;
    document.getElementById("displayDealer").textContent = dealerHand;
    document.getElementById("pauseGame").textContent = "Pause";
    document.getElementById("pauseGame").onlick = "pause()";
}

// Customizes the game's UI.
function customization() {
    return;
}

// Adds keyboard inputs.
function keyInputs() {
    let keysPressed = {};
    
    document.addEventListener("keydown", (e) => {
    document.activeElement.blur();
    if (e.key == " ") {
        drawCard();
    }
    else if (e.key == "p") {
        pass();
    }
    else if (e.key == "Shift" + "r") {
        reset();
    }
  });
}

keyInputs();

