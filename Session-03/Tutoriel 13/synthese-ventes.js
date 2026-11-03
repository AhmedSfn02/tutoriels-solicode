let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

// 1. Préparation
let somme = 0;
let totalventes = 0;
let max = ventes[0];
let min = ventes[0];
let nbExceptionnelles = 0;
let sommeExceptionnelles = 0;

// 2. Traitement (Une seule boucle !)
for(let i = 0; i < ventes.length; i++){

    // Compter le nombre total de ventes
    totalventes++;

    // Somme globale
    somme += ventes[i];

    // Extrêmes
    if(ventes[i] > max){
        max = ventes[i];
    }

    if(ventes[i] < min){
        min = ventes[i];
    }

    // Vérifier si la vente est exceptionnelle (>= 130)
    if(ventes[i] >= 130){
        nbExceptionnelles++;
        sommeExceptionnelles += ventes[i];
    }
}

// Afficher les résultats
console.log("Nombre total de ventes :", totalventes);
console.log("Somme totale des ventes :", somme);
console.log("Vente maximale :", max);
console.log("Vente minimale :", min);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("Somme des ventes exceptionnelles :", sommeExceptionnelles);