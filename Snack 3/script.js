/*
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.

*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

    const numMin = 1;
    const numMax = 4;

    const nuovoArray =[];
    myArray.forEach((guest, i) => {
    if (i >= numMin && i <= numMax){
        nuovoArray.push(guest)
    }
});

console.log(nuovoArray);
    







