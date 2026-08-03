// let prenom = "Islem";
// let age = 31;
// let ville = "Tunis";

// let msg = "Je m'apelle " + prenom + ", j'ai " + age + " ans et j'habite à " + ville + ".";

// console.log(msg);


// let a = 5;
// let b = 7;

// console.log(a+b);


// let ilPleut = false;

// if (ilPleut) {
//     console.log("je prend mon parapluie");
// } else {
//     console.log("Je ne prend pas de parapluie"); 
// }

// let meteo = "chaud";

// if (meteo === "pluie") {
//     console.log("parapluie");
// } else if (meteo === "chaud"){
//     console.log("Lunettes");
// } else {
//     console.log("Sortir normalment");
// }



//EX1
// let prix = Number(prompt("Saisis le prix de l'article : "));

// let prixTTC = 0;
// if (prix < 100) {
//     prixTTC = prix + (prix * 20 / 100); //20% TVA
// } else {
//     prixTTC = prix + (prix * 5 / 100); //5% TVA
// }

// console.log("Le prix TTc est : ", prixTTC);


// EX2
// let prenom = prompt("Quel est est ton prénom?");
// let note = prompt("Saisis ta note :");

// if (note <0 || note>20) {
//     alert("La note doit etre entre 0 et 20");
// } else {
//     let msgNote = prenom + ", ta note est " + note + " : ";
//     let msgPerso = "";

//     if (note >= 16) {
//         msgNote += "Trés Bien";
//         msgPerso = "Excellent traval!";
//     } else if (note >= 14) {
//         msgNote += "Bien";
//         msgPerso = "Excellent traval!";
//     } else if (note >= 12) {
//         msgNote += "Assez Bien";
//         msgPerso = "Peut mieux faire";
//     } else if ( note >= 10) {
//         msgNote += "Passable";
//         msgPerso = "Peut mieux faire";
//     } else {
//         msgNote += "Insuffisant";
//         msgPerso = "Doit travailler davanatage";
//     }

//     console.log(msgNote);
//     console.log(msgPerso); 
    
// }


// let choix = "thon";

// if (choix === "fromage") {
//     console.log("Pizza fromage");
    
// } else if (choix === "thon") {
//     console.log("Pizza thon");
    
// }

// switch (choix) {
//     case "fromage":
//         console.log("Pizza fromage");
//         break;
//     case "thon":
//         console.log("Pizza thon");
//         break;
//     case "viande":
//         console.log("Pizza viande");
//         break;
//     default:
//         console.log("Choix non disponible!");
//         break;
// }


// EX4
// let mois = Number(prompt("Saisis un numéro de mois (1 à 12) :"));

// switch (mois) {
//     case 1:
//         alert("Janvier = 31 jours");
//         break;
//     case 2:
//         alert("Février = 28 jours");
//         break;
//     case 3:
//         alert("Mars = 31 jours");
//         break;
//     case 4:
//         alert("Avril = 30 jours");
//         break;
//     case 5:
//         alert("Mai = 31 jours");
//         break;
//     case 6:
//         alert("Juin = 30 jours");
//         break;
//     case 7:
//         alert("Juillet = 31 jours");
//         break;
//     case 8:
//         alert("Aout = 31 jours");
//         break;
//     case 9:
//         alert("Septembre = 30 jours");
//         break;
//     case 10:
//         alert("Octobre = 31 jours");
//         break;
//     case 11:
//         alert("Novembre = 30 jours");
//         break;
//     case 12:
//         alert("Décembre = 31 jours");
//         break;

//     default:
//         alert("Numéro de mois incorrect");
        
//         break;
// }

// console.log("Bonjour");
// console.log("Bonjour");
// console.log("Bonjour");
// console.log("Bonjour");
// console.log("Bonjour");



//TP3 - EX1
// let somme = 0;
// for (let i = 1; i <= 10; i++) {
//    somme = somme + i;
// somme += i;
// }
// console.log("La somme des nombres de 1 à 10 est : ", somme);

// EX2
// let n = Number(prompt("Saisis un nombre pour calculer sa factorielle :"));
// let factorielle = 1;

// for (let i = 1; i <= n; i++) {
//     factorielle *=i; //factorielle = factorielle *i
// }

// console.log("La factorielle de " + n + " est : " + factorielle);

// let nombre = 1;

// while (nombre <= 5) {
//     console.log(nombre);
//     nombre ++;
// }


// let i =10;

// do {
//     console.log(i);
    
// } while (i<5);

// while (i<5) {
//     console.log(i);
// }

// EX5
// let total = 0;
// let nbr;

// do {
//     nbr = Number(prompt("Saisis un nombre : "));
//     if (nbr >= 0) {
//       total += nbr;  
//     }

// } while (nbr >= 0);

// console.log("La somme des nbrs est : ", total);

// function greetings() {
//     console.log("Welcome!");
// }

// greetings();

// function direBonjour(nom) {
//     console.log("Bonjour " + nom);
// }

// direBonjour("Islem");
// direBonjour("Sara");

// function addition(a, b) {
//    return a+b;
// }

// console.log(addition(3, 5));


// TP4 EX1

// function direBonjour(prenom) {
//     console.log("Bonjour " + prenom + "!");
// }

// direBonjour("Islem");
// direBonjour("Dominique");



// Tableau

// let fruit1 = "Pomme";
// let fruit2 ="Banane";
// let fruit3 = "orange";

// let fruits = ["Pomme", "Banane", "orange"];
// console.log(fruits);
// console.log(fruits[1]);

// let nombres = [10, 20, 30, 40];

// ajouter un nouv élément
// nombres.push(50);
// nombres.unshift(0);

// console.log(nombres);
// console.log("Dernier élément : " + nombres[nombres.length-1]);


// let courses = ["pain", "lait", "oeufs"];
// Ajouter "fromage" à la fin
// courses.push("fromage");
// Ajouter "beurre" au début
// courses.unshift("beurre");

// console.log(courses);

//Supprimer dernier élément
// courses.pop();
//Supprimer premier élément
// courses.shift();
// console.log(courses);

// Supp lait
// courses.splice(1, 1);
// console.log(courses);
// let indexLait = courses.indexOf("lait"); //Récupérer index d'un élément
// if (indexLait !== -1) {
    // courses.splice(indexLait, 1);  //supprimer un élément à partir de l'index
// }

// console.log("Aprés supp lait : ", courses);
// Insérer un élément dans une position spécifique
// courses.splice(1, 0, "test");
// console.log("Insérer avec splice : ", courses);

//Remplacer un élément
// let indexOeufs = courses.indexOf("oeufs");
// if (indexOeufs !== -1) {
//     courses[indexOeufs] = "yaourt";
// }

// console.log("Tableau final : ",courses);

//TP5
// let utilisateurs = [];

// utilisateurs.push("Islem");
// utilisateurs.push("SAndrA");
// utilisateurs.push("Barbara");
// utilisateurs.push("Dominique");
// utilisateurs.push("Julien");

// console.log(utilisateurs);
//Fonction pour ajouter un utilisateur
// function ajouterUtilisateur(nom, tab) {
//     tab.push(nom);
//     console.log("Utilisateur " + nom + " ajouté!");
//     console.log(tab);
    
// }

//test
// ajouterUtilisateur("Riri", utilisateurs);

// Afficher tous les utilisateurs
// console.log("Liste de tous les utilisateurs");
// for (let i = 0; i < utilisateurs.length; i++) {
//     console.log(utilisateurs[i]); 
// }

// for (let x of utilisateurs) {
//     console.log(x);
// }

//Vérifier si un utilisateur existe
// function verifierUtilisateur(nom, tab) {
//     if (tab.indexOf(nom) !== -1) {
//         console.log("Utilisateur trouvé !");
//     } else {
//         console.log("Utilisateur non trouvé!");
        
//     }
// }

//Test
// verifierUtilisateur("Aurore", utilisateurs);
// verifierUtilisateur("Riri", utilisateurs);

//Afficher les utilisateurs contenant la lettre "a"
// console.log("Lise des utilisateurs contenant la lettre a :");
// for(let u of utilisateurs) {
//     if (u.toLowerCase().includes("a")) {
//         console.log(u);
        
//     }
// }

//Affichage msg si tableau est vide ou non
// if (!utilisateurs || (utilisateurs.length ===0)) {
//     console.log("Aucun utilisateur");
    
// } else {
//     console.log("Nombre d'utilisateurs : " + utilisateurs.length);
// }



// let btn  = document.getElementById("btnDetails");
// let btn = document.querySelector("#btnDetails");
// console.log(btn);

// let articleProduit = document.getElementsByClassName("article-produit");
// let articleNoeud = document.querySelector(".article-produit");


// console.log("methode byClassName : ",articleProduit);
// console.log("methode querySelectorAll : ", articleNoeud);


//TP6 EX2
// 1. Récupérer tous les titres des produits
// let titres = document.getElementsByClassName("titre-produit");
// console.log(titres[0]);

// for (let i = 0; i < titres.length; i++) {
    // titres[i].style.color = "red";
    // titres[i].textContent =titres[i].textContent.toUpperCase();
    // titres[i].style.textTransform = "uppercase";
// }

let titres = document.querySelectorAll(".titre-produit");
console.log(titres);

titres.forEach(titre => {
    titre.style.color = "yellow";
    titre.style.textTransform = "uppercase";
    titre.innerHTML = "produit";
});


function afficherAlert(btn) {
    btn.textContent = "Ajouter prod1"
}

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {
   btn2.style.cssText = "background-color : red !important";
   btn2.textContent = "Ajouter!";
});

// btn2.addEventListener("mouseenter", () => {
//     btn2.classList.add("btn-hover");
//     console.log("here form btn2");
    
// })

// btn2.addEventListener("mouseleave", () => {
//     btn2.classList.add("btn-leave");
// })

//EX5
let prixElts = document.querySelectorAll("article p:nth-of-type(2)") //2eme <p> dans article
console.log(prixElts);

prixElts.forEach(prix => {
    let text = prix.textContent;
    let montant = Number(text.replace(/[^\d]/g, ""));
    console.log(text);
    console.log(montant);
    
    if (montant < 25) {
        prix.style.color = "green";
    } else if (montant > 50) {
        prix.style.color = "red"
    } else {
        prix.style.color = "orange"
    }
    
})