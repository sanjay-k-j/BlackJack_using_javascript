
let finalMessage = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let Alive = false
let sum  = 0 
let BlackJack = false
let message = ""
let card = []

let player = {
    name : "Sanjay",
    chips : 150
}


let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name+ " : " + "Rs " + player.chips

function startGame(){
    Alive = true
    let fc = randomCard()
    let sc = randomCard()
    card = [fc, sc]
    sum = fc + sc 
    renderGame()
}

function randomCard(){
    random = Math.floor(Math.random()*13) + 1
    if (random === 1){
        return 11
    }else if(random > 10){
        return 10
    }
    return random
}

function renderGame(){
    sumEl.textContent = "Sum : " + sum
    cardsEl.textContent = "Cards : " 
    for (let i= 0 ; i < card.length ; i+=1){
        cardsEl.textContent += card[i] + " "
    }
    if (sum < 21 ) {
        message = "Do You want to draw another card ? "
    }else if (sum === 21 ){
        message= "Congrats! you've got BlackJack! "
        BlackJack = true
    }else{
        message= "You're out of the game! "
        Alive = false
    }
    finalMessage.textContent = message;

}

function newCard(){
    if (Alive === true && BlackJack === false){
        console.log("New cards bro ")
        let newCardValue = randomCard()
        sum += newCardValue
        card.push(newCardValue)
        renderGame()
    }
}
