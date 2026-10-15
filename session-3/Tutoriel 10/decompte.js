// 2.1. 

let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

for(let i = 0; i < jours.length; i++){
    console.log("Jour de la semaine : ", jours[i]);
}

// 2.2.

let couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];

for(let i = couleurs.length-2; i >= 0 ; i = i - 2){
     console.log("liste des couleurs à l’envers", couleurs[i]);
}

// 2.3. Livrable

let sequence = ["Ignition", 1, 2, 3, 4, 5, "Préparation"];

for(let i = sequence.length-1; i >=0; i--){
    console.log(sequence[i]);
}
console.log("Décollage !");

// L'index de départ doit être sequence.length - 1, car les index commencent à 0 et le dernier élément se trouve à cet index.cd ..\..