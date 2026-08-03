class Produit {
    constructor(nom, description, prix, imgSrc) {
        this.nom =nom;
        this.description =description;
        this.prix = prix;
        this.imgSrc =imgSrc;
    }
}

//Fonction pour ajouter un produit
function ajouterProduit() {
    const form = document.getElementById("productForm");
    console.log(form);

    form.addEventListener("submit", function(event){
        event.preventDefault(); //Annuler le rechargement automatique de la page

        let nom = document.getElementById("productName").value;
        let description = document.getElementById("description").value;
        let prix = document.getElementById("productPrice").value;
        let imgSrc = document.getElementById("img").value;

        //Création de l'objet
        let produit = new Produit(nom, description, prix, imgSrc);
        console.log(produit);

        // Sauvegarder dans localstorage
        const produits = JSON.parse(localStorage.getItem("produits")) || [];
        produits.push(produit);
        localStorage.setItem("produits", JSON.stringify(produits));

        form.reset();
        alert("Produit ajouté avec succés !");
    })
    

}

//Sauvgarder dans localstorage
const categoriesListe = [
    {
        id:1,
        nom: "Homme"
    },
    {
        id:2,
        nom: "Femme"
    },
    {
        id:3,
        nom: "Enfant"
    }
];
localStorage.setItem("categories", JSON.stringify(categoriesListe));

marques = [
    {
        id:1,
        nom:"Nike"
    },
    {
        id:2,
        nom:"Adidas"
    },
    {
        id:3,
        nom:"Puma"
    }
];
localStorage.setItem("marques", JSON.stringify(marques));


//Affichage dynamique
// const categories = JSON.parse(localStorage.getItem("categories")) || [];
// const select = document.getElementById("categorie");

// categories.forEach(categorie => {
//     select.innerHTML += `
//     <option value="${categorie.id}" >${categorie.nom}</option>
//     `;
// });


//Utiliser fichier réutilisable
const categories = JSON.parse(localStorage.getItem("categories")) || [];
new DropdownList("categorie", categories);

//2eme liste
const marquesListe = JSON.parse(localStorage.getItem("marques")) || [];
new DropdownList("marque", marquesListe);

ajouterProduit();