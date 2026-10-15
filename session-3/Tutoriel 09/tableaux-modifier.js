// 2.1.

let nombres = [10, 20, 30, 40];

let somme = nombres[0] + nombres[nombres.length-1];

console.log("La Somme est :", somme); // Affichez la somme du premier élément et du dernier élément.

// 2.2.

let temperatures = [18, 20, 23, 19];

console.log("Avant :", temperatures);

temperatures[1] = 21;

temperatures[temperatures.length-1] = 25; 

console.log("Après :", temperatures);

//2.3. Livrable

let notes = [12, 8, 15, 9, 17];

notes[1] = 10;
notes[3] = 11;

console.log("Première note :", notes[0]); // Afficher la première note
console.log("Dernière note :", notes[notes.length-1]); // Afficher la dernière note

console.log("Tableau final :", notes); // Afficher le tableau final
console.log("Nombre de notes :", notes.length); // Afficher le nombre total de notes

// Lire notes[2] permet de récupérer sa valeur, tandis que notes[2] = 10 remplace cette valeur par 10.