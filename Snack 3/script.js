/*
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.

*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let min = Math.floor(Math.random() * 10);
let max = Math.floor(Math.random() * 10);
if (min < max){
    console.log(min, max);
    

}
    
myArray.forEach((elementoCorrente, i, arrayOriginale) => {
	
    console.log(elementoCorrente,i,arrayOriginale);
    

});
