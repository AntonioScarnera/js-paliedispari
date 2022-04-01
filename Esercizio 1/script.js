/*
Palidroma

Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.

*/



let parola = prompt("Inserisci una parola");

function giraparola(parola){
    let letters = parola.split("");
    console.log(letters);
    let parolaGirata = "";
    for(let i = letters.length -1; i >= 0; i--){
        parolaGirata += letters[i];
    }
    return parolaGirata;
}
let girata = giraparola(parola);
console.log(girata);

if(parola === girata){
    console.log(
        `
        La parola ${parola} è palindroma. 
        `
    )
}else{
    console.log(
        `
        La parola ${parola} non è palindroma. 
        `
    )   
}
