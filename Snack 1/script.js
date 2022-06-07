/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

let elencoBiciDaCorsa = [
    { 
        nome: "bici 1",
        peso: 7,
    
    },

    { 
        nome: "bici 2",
        peso: 8,
    },

    { 
        nome: "bici 3",
        peso: 10,
    },

    { 
        nome: "bici 4",
        peso: 9,
    },

    { 
        nome: "bici 5",
        peso: 6,
    },
    
];






let biciLeggera = elencoBiciDaCorsa[0];
const bikeContainer = document.getElementById("bike-container");

for (let i = 0; i < elencoBiciDaCorsa.length; i++) {
    if (elencoBiciDaCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = elencoBiciDaCorsa[i];
    }
}
console.log (elencoBiciDaCorsa);
console.log(biciLeggera);

const container = document.getElementById("bike-container")
function printBiciPiuLeggera(biciPiuLeggera, bikeContainer){
    container.innerHTML += 

};

printBiciPiuLeggera(biciPiuLeggera, bike-container)