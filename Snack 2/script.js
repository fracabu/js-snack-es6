/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
solo nomi e falli subiti e stampiamo tutto in console.

*/


//array di oggetti squadre di calcio con tre chiavi (nome punti falli)
let listaSquadreCalcio = [
    {
        nome: 'Roma',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Sassuolo',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Brescia',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0,
    }
]

// creo variabili per generare i numeri random
let randomPunti;
let randomFalli;

// Genero numeri random nelle variabili 
let random = (num1) => Math.floor(Math.random() * num1 + 1);

// ciclo per inserire falli e punti
for (let i = 0; i < listaSquadreCalcio.length; i++) {
    listaSquadreCalcio[i].punti = random(12);
    listaSquadreCalcio[i].falli = random(57);
}

//ciclo per destrutturazione

// stampare in console
for (let key in listaSquadreCalcio) {
    console.log(listaSquadreCalcio[key]);
}