const figures = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
const deck = [];
const SPADES = "Spades";
const CLUBS = "Clubs";
const DIAMONDS = "Diamonds";
const HEARTS = "Hearts";


generateDeck();
// console.log(deck);
let hand = randomHand(); 
// let hand = [{color:"Spades", figure:"9"},{color:"Hearts", figure:"9"},{color:"Diamonds", figure:"9"},{color:"Clubs", figure:"9"},{color:"Diamonds", figure:"2"}];
console.log(hand);
console.log(JSON.stringify(hand));
straightFlush();
fourOfAKind();
threeOfAKind();
pair();


function generateDeck(){
    figures.forEach(element => {
        const card = {
            color: SPADES,
            figure: element
        }
        deck.push(card);
    });
    figures.forEach(element => {
        const card = {
            color: CLUBS,
            figure: element
        }
        deck.push(card);
    });
    figures.forEach(element => {
        const card = {
            color: DIAMONDS,
            figure: element
        }
        deck.push(card);
    });
    figures.forEach(element => {
        const card = {
            color: HEARTS,
            figure: element
        }
        deck.push(card);
    });
}

function randomHand() {
    let hand = [];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * deck.length);
        hand.push(deck[randomIndex]);
        deck.splice(randomIndex, 1);
    }
    return hand;
}

function colorCheck(numberOfColors) {
    const colors = [];
    hand.forEach(element => {
        if(!colors.includes(element.color)) {
            colors.push(element.color);
        }       
    });
    return colors.length == numberOfColors;
}

function straightFlush() {
    if (colorCheck(1)){
        for (let i = 0; i < figures.length - 5; i++) {
            if (hand.some(element => element.figure == figures[i])
                && hand.some(element => element.figure == figures[i+1])
                && hand.some(element => element.figure == figures[i+2])
                && hand.some(element => element.figure == figures[i+3])
                && hand.some(element => element.figure == figures[i+4])) {
                    console.log("The Best Combo Is Straight Flush!");
                    return true;
            }
        }
    }
    return false;
}

function fourOfAKind() {
    for (let i = 0; i < figures.length; i++) {
        const count = hand.reduce((n, element) => n + (element.figure === figures[i]), 0);
        if (count == 4) {
            console.log("The Best Combo Is Three Of A Kind!");
            return true;
        }
    return false;
    }
}

function threeOfAKind() {
    for (let i = 0; i < figures.length; i++) {
        const count = hand.reduce((n, element) => n + (element.figure === figures[i]), 0);
        if (count == 3) {
            console.log("The Best Combo Is Three Of A Kind!");
            return true;
        }
    return false;
    }
}

function pair() {
    for (let i = 0; i < figures.length; i++) {
        const count = hand.reduce((n, element) => n + (element.figure === figures[i]), 0);
        if (count == 2) {
            console.log("The Best Combo Is Pair!");
            return true;
        }
    return false;
    }
}


// "AC", "KC", "QC", "JC", "10C", "9C", "8C", "7C", "6C", "5C", "4C", "3C", "2C",
// "AS", "KS", "QS", "JS", "10S", "9S", "8S", "7S", "6S", "5S", "4S", "3S", "2S",
// "AD", "KD", "QD", "JD", "10D", "9D", "8D", "7D", "6D", "5D", "4D", "3D", "2D",
// "AH", "KH", "QH", "JH", "10H", "9H", "8H", "7H", "6H", "5H", "4H", "3H", "2H"