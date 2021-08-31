// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function reverse(parola){
    var nuovaParola = "";
    for(var i = parola.length-1; i>=0;i--){
       nuovaParola = nuovaParola+parola[i];
    }
    return nuovaParola;
}

var parolaUtente =prompt("Ciao, inserisci una parola");
var parolaInversa = reverse(parolaUtente);

if (parolaUtente == parolaInversa){
    alert("La parola è palindroma");
}else{
    alert("La parola non è palindroma!")
}


