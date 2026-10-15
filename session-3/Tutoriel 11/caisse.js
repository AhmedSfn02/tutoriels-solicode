// 2.1.

let mots = ["chat", "ordinateur", "table", "programmation", "js"];
let motsLongs = 0;

for(let i = 0; i < mots.length; i++){
    if(mots[i].length > 5){
        motsLongs++;
    }
}
console.log(motsLongs);

// 2.2. 

let nombres = [4, 7, 2, 9, 5, 8];

sommePairs = 0;

for(i = 0; i < nombres.length; i++){
    if(nombres[i] % 2 === 0){
        sommePairs += nombres[i];
    }
}

console.log(sommePairs);

// 2.3. Livrable

let panier = [15, 42, 5, 89, 12, 50, 8];
let total = 0;
let counter = 0;
let montant = 0;

for(i = 0; i < panier.length; i++){
    total = total + panier[i];
    
    if(panier[i] >= 20){
        counter++;
        montant += panier[i];
    }
}

console.log("Total du panier :", total);
console.log("Nombre d'articles chers :", counter);
console.log("Montant des articles chers :", montant);


/*
La variable somme doit être déclarée à l’extérieur
de la boucle pour conserver son total à chaque itération.
*/
