// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
function numeroRandom (min,max){
     var random = Math.floor(Math.random()*(max-min+1)+min);
     return random;
}

function pariDispari(num1){
    if (num1%2==0){
        return pari;
    }
    return dispari;
    
}

var sceltaUtente = prompt("Ciao,scegli pari o dispari");
var numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5"));

var somma =numeroUtente + numeroRandom(1,5);

 if (somma == pariDispari(pari) && sceltaUtente == "pari"){
     alert("hai vinto!");

 }else{
     alert("hai perso");
 }