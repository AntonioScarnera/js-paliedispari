
/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let parola = prompt("Pari o Dispari?");
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

function randomNumber (){
    let randomnumber = Math.floor((Math.random() * 5) + 1);;
    return randomnumber;
}

let pcNumber = randomNumber();
console.log(pcNumber);
console.log(userNumber);

function somma (user, pc){
    let add = user + pc;
    return add;
}

let numberAdd = somma(userNumber, pcNumber);
console.log(numberAdd);

if(parola !== "pari" || parola !== "Pari" || parola !== "dispari" || parola !== "Dispari"){

    alert("Devi rispondere Pari o dispari");

}else if((parola === "pari") || (parola === "Pari")){

    if(userNumber < 5 && userNumber > 0){
        if(numberAdd % 2 == 0){
            alert("Hai Vinto!! Il risultato è Pari");
        }else{
            alert("Hai Perso!! Il risultato è Dispari");
        }
    }

}else if((parola === "dispari") || (parola === "Dispari")){

    if(userNumber < 5 && userNumber > 0){
        if(numberAdd % 2 == 0){
            alert("Hai Perso!! Il risultato è Pari");
        }else{
            alert("Hai Vinto!! Il risultato è Dispari");
        }
    }

}