//Javascript

//Introduction

alert("Bonjour cher visiteur, je suis le magnifique Simon Baker!");

alert("Ah c'est bon vous m'avez démasqué!, je suis de loin de ressembler à cet acteur, plus connu dans le rôle de Mentaliste!, mais du moins aujourd'hui je vais tenter de m'immiscer dans votre esprit" + " UuuuuuUUUuUU......");

alert("Attendez.. je sais ce que vous vous dites, il va me faire deux petits tours et ça sera vite fait. Mais vous verrez après tout..." + "Dans cette expérience j'aimerais surtout faire plus ample connaissance avec vous, mon cher visiteur.");

alert("D'abord, j'aimerai pouvoir vous tutoyer..." + "mais avant de devenir plus intimes ");

let prenom = prompt("Dites moi votre prénom, ça va m'aider à vous visualiser...");

console.log(" ça veut dire que "+ '"' +prenom+ '"' + " n'a pas hésité à donner son prénom");

//si l'utilisateur n'écrit rien, on repose la question
if (prenom === "") {
    prenom = prompt("Alleeez juste un petit nom, je vais pas le donner au FBI promis...");

}

//Cette fonction retourne le prenom, et remplace la première lettre de la chaîne des caractères par une majuscule.
function prenomMaj(prenom)
{
    return prenom && prenom[0].toUpperCase() + prenom.slice(1);

    
}

alert("Enchanté " + prenomMaj(prenom) +", c'est un plaisir de faire ta connaissance! " + "Pour commencer laisse moi deviner ton âge..." );

alert(prenomMaj(prenom)+ " des entrailles des mes lignes de codes je sens que tu es une personne intelligente, je le sens au fond de moi!. Je vais te poser des questions, n'est craînte, rien de bien difficile." + " Je vais te demander d'abord de visualiser le "+'"'+ "chiffre"+'"'+" de ton mois de naissance.." +" janvier correspond au chiffre 1, février à 2, ainsi de suite..." );

alert("C'est partis?");

alert("Tu vas me multiplier ce chiffre que tu as en tête par 2." + " Retiens-le s'il te plait");

alert("Puis ajoute lui 5. Retiens ce résultat");

alert("Tu vas maintenant multiplier le résultat par 50 et ajouter ton âge en chiffre.      Huumm aide toi d'une feuille pour rien oublier si tu as envie");

//On demande le résultat de son calcul à l'utilisateur qu'il a effectué jusqu'à ici.
let age = prompt("Maintenant c'est à mon tour, écris moi ton résultat");

age-= 250;

//J'ai transformé les chiffres en chaîne des caractères, pour pouvoir afficher les deux derniers chiffres. Car length ne traite pas les chiffres, seulement les chaînes de caractères.
age = ""+age+"";


//J'ai séléctionne les deux derniers chiffres du resultat.
let resultat = age;
console.log(resultat);

DernierChiffre = resultat.substring(resultat.length-2, resultat.length); 

//J'ai séléctionné le premier caractère du DernierChiffre, puisqu'il ne reste que deux chiffres, si le caractère séléctionné est égal à 0, alors il prend que le dernier caractère, au lieux des deux derniers caractèrs.
if (DernierChiffre[0] === "0"){
    DernierChiffre = resultat.substring(resultat.length-1, resultat.length);  
}

alert( "Fastoche! tu as ... "+ DernierChiffre +" ans.");
console.log(resultat +" mon résultat ne change pas, je vais le reutiliser plus tard, pour donner le mois de naissance!!");










