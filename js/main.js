//recuperiamo le informazioni agli utenti//
let userName = document.getElementById('input-km')
let userDistance = document.getElementById ('input-age')
let UserAge = document.querySelector('#input-age')
//prezzo per km//
const pricePerKm = 0.21;

//recupero il bottone che genera il biglietto//
const ticketButton = document.getElementById('button-generate')

//aggiungo event listner su evento click al bottone che genera i biglietti"
ticketButton.addEventListener('click', function(){
let ticketPrice = pricePerKm * userDistance.value;

console.log(ticketPrice.value);
console.log(userName.value);
console.log(UserAge.value);

if(UserAge.value == "minorenne"){
    ticketPrice = ticketPrice * 0.2;
    console.log("sconto del 20%");

} else if(UserAge.value == "over65"){
    ticketPrice = ticketPrice * 0.4;
    console.log("Sconto del 40%");

}else {
console.log("Nessuno sconto applicato");   
}

//PREZZO DEFINITIVO//
console.log ("ticketPrice.value");


})