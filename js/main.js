//recuperiamo le informazioni agli utenti//
let userName = document.getElementById('input-id')
let userDistance = document.getElementById ('input-km')
let userAge = document.querySelector('#input-age')
//prezzo per km//
const pricePerKm = 0.21;

//recupero il bottone che genera il biglietto//
const ticketButton = document.getElementById('button-generate')

//aggiungo event listner su evento click al bottone che genera i biglietti//
ticketButton.addEventListener('click', function(){
let ticketPrice = pricePerKm * userDistance.value;
console.log(ticketPrice);

console.log(userName.value);
console.log(userAge.value);

if(userAge.value == "minorenne"){
    ticketPrice = ticketPrice * 0.2;
    console.log("sconto del 20%");

} else if(userAge.value == "over65"){
    ticketPrice = ticketPrice * 0.4;
    console.log("Sconto del 40%");

}else {
console.log('Nessuno sconto applicato');   
}

//PREZZO DEFINITIVO//
console.log(ticketPrice);

let outputElement = document.querySelector('#ticket-desk');

outputElement.innerHTML = `Il biglietto di ${userName.value} ha un costo di ${ticketPrice.toFixed(2)}`;

})  

//aggiungo event listner su evento click al bottone che genera i biglietti//
const ticketReset = document.getElementById('button-reset');
ticketReset.addEventListener('click',function(){

userName.value="";
userAge.value="maggiorenne";
userDistance.value="";    
}
);
