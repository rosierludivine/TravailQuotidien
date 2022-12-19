//1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
// let number =2 ;// le nombre est de 2 
// function sum (number){
// 	return number + number; // addiction du nombre par lui même 
// }
// // execution de la fonction 
// console.log(sum(number));

// Avec une fonction 


//2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

// function ArrayNombers( Nombers){
//     let nombers =[0];
//     for (let i = [0]; i <nombers.length ; i++){
//         if (Nombers [i] > max){//Si nombre dans le tableau est superieur a max 
//             max = Nombers [i];// alors max = le nombre de tableau 
//         }
//     }
// }
// const result = ArrayNombers(Nombers);
// console.log(result);

//3- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

// let array ="welcome";//creation d'une chaine de caractère 
// function NewString (LastString){
//     return LastString.replace( /[eaouiy]/gi, '');// on remplace les voyelles par rien, quels soit en majuscule ou en miniscules et pas que le premier 
// }
// const result= NewString(array);// on mets la nouvelle valeur danzs une constante 
// console.log(result);// on affiche le resultat 

// // on execute le  fichier 

// 4-Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

// let arrayString = [ "salut","bienvenue", "Yoyo", "Abricot"];// Création du tableau de chaine de caractère

// function Order (arrayString){
//     arrayString.sort(); // trier le tableau 
//    return arrayString;// returner le tableau 
// }
// const result= Order(arrayString) // mettre le resultat dans une nouvelle variable 
// console.log(result);// afficher le resultat 

// 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
let Numbers = [3,1,6,4,7];// creation d'un tableau de nombre entier 
function OrderNumbers (Numbers){//Creation de la fonction qui s'appelle OrderNumbers 
   Numbers.sort();
   Nulbers.reverse();
   return Numbers;
}
const result= OrderNumbers(Numbers); 
console.log(result);
