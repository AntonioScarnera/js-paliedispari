
/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

function randomNumber (){
    let randomnumber = Math.floor((Math.random() * 5) + 1);;
    return randomnumber;
}
function somma (user, pc){
    let add = user + pc;
    return add;
}




let parola = prompt("Pari o Dispari?");
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));





let pcNumber = randomNumber();
console.log(pcNumber);
console.log(userNumber);


let numberAdd = somma(userNumber, pcNumber);
console.log(numberAdd);





if((parola === "pari") || (parola === "Pari")){

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

}else{
    alert("Devi rispondere pari o dispari");
}