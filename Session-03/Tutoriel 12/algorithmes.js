// 2.1.

let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];
let search = "Nadia";
let position = -1;

for(i = 0; i < prenoms.length; i++){
    if(prenoms[i] === search ){
        position = i;
    }
}

if(position !== -1){
    console.log("Nadia se trouve à l'index", position);
}

else{
    console.log("Prénom introuvable");
}

//  2.2.

let notes = [12, 17, 9, 14, 18, 11];
let max = notes[0];
let min = notes[0];

for(i = 0; i < notes.length; i++){
    if( notes[i] > max ){
        max = notes[i];
    }

    if(notes[i] < min){
        min = notes[i];
    }


}
console.log("la meilleure note est :", max);
console.log("la pire note est :", min);

// 2.3. Livrable

let nombres = [23, 15, 42, 9, 31, 18, 42, 5];
let Maximum = nombres[0];
let Minimum = nombres[0];
let positionMAx = -1;
let positionMin = -1;
let recherche = 31;
// let position = -1;

for(i = 0; i < nombres.length; i++){
    if(nombres[i] > Maximum){
        Maximum = nombres[i];
        positionMAx = i;
    }

    if(nombres[i] < Minimum){
        Minimum = nombres[i];
        positionMin = i;
    }

    if(recherche === nombres[i]){
        position = i;
    }
}

console.log("Maximum :", Maximum ,"( Index :", positionMAx,")");
console.log("Minimum :", Minimum ,"( Index :", positionMin,")");
console.log("La valeur", nombres[position],"est présente dans le tableau.");



