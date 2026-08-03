const btnScroll = document.querySelector(".scroll-top");

if (btnScroll) {
    btnScroll.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

document.addEventListener("click", function (event) {
    let btn = event.target.name;
    console.log(btn);

})

function afficherProduits() {
    const container = document.querySelector(".product-container");
    if (!container) return;

    console.log(container);
    // let produit1 = { nom: "Chemise Homme", description: "Description produit1", prix: 20, imgSrc: "assets/images/p1.png" };
    let produits = JSON.parse(localStorage.getItem("produits")) || [];

    //Injecter Contenu avec innerHTML
    // container.innerHTML = "";
    // produits.forEach(produit => {

    // container.innerHTML += `
    // <article tabindex="0" class="article-produit">
    //     <h3 class="titre-produit">${produit.nom}</h3>
    //     <img src=${produit.imgSrc} alt=${produit.nom}>
    //     <p>${produit.description}</p>
    //     <p>Prix: ${produit.prix} £</p>
    //     <button id="btn2">Acheter</button>
    // </article>
    // `
    // })

    //Création de l'élément article
    produits.forEach((produit, index) => {
        const article = document.createElement("article");
        article.classList.add("article-produit");
        article.setAttribute("tabindex", "0");

        article.innerHTML = `
         <span class="badge-New">New</span>
         <span class="favori"><i class="fa-regular fa-heart"></i></span>
         <h3 class="titre-produit">${produit.nom}</h3>
         <img src="../${produit.imgSrc}" alt=${produit.nom}>
         <p>${produit.description}</p>
         <p>Prix: ${produit.prix} £</p>
         <button >Voir Détails</button>
        `;

        const btn = article.querySelector("button");
        btn.addEventListener("click", function () {
            window.location.href = `/pages/product-details.html?index=${index}`;
        })


        container.appendChild(article);

    })

}

function afficherDetailsProduits() {
    // Récupérer l'index à partir du URL
    let params = new URLSearchParams(window.location.search);
    let index = params.get("index");

    //Récupérer la liste des produits
    const produits = JSON.parse(localStorage.getItem("produits")) || [];
    const produit = produits[index];
    console.log(produit);

    const produitDetailContainer = document.querySelector(".produit-detail-container");
    if (!produitDetailContainer) return;

    produitDetailContainer.innerHTML = `
    <div class="row">
        <div class="col-12 col-md-6">
            <img src="/${produit.imgSrc}" alt="Photo de ${produit.nom}">
        </div>
        <div class="col-12 col-md-6">
            <h2>${produit.nom}</h2>
            <p>${produit.description}</p>
            <p>Prix : ${produit.prix}£</p>
            <button id ="ajout-panier">Ajouter au panier</button>
        </div>

    </div>
    `;

    document.getElementById("ajout-panier").addEventListener("click", () => {
        let panier = JSON.parse(localStorage.getItem("panier")) || [];
        panier.push(produit);
        localStorage.setItem("panier", JSON.stringify(panier));
        alert("Produit ajouté au panier!");
    })

};

function afficherPanier() {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    const panierBody = document.getElementById("panier-body");
    if (!panierBody) return;

    if (panier.length === 0) {
        panierBody.innerHTML = `
        <tr>
            <td colspan="6">Votre panier est vide</td>
        </tr>
        `;
        return;
    }

    let sommeTotale = 0;

    panier.forEach((produit, index) => {
        sommeTotale += Number(produit.prix)
        const tr = document.createElement("tr");
        tr.innerHTML = `
         <th scope="row">${index}</th>
         <td>${produit.nom}</td>
         <td>${produit.prix}</td>
         <td>1</td>
         <td>${produit.prix}</td>
         <td>
             <button type="button" class="btn btn-danger btnSupp">Supprimer</button>
         </td>
        `;

        // Récupérer le btn
        const btnSupprimer = tr.querySelector(".btnSupp");
        //ajouter Event
        btnSupprimer.addEventListener("click", () => {
            supprimerProduit(index);
        })

        panierBody.appendChild(tr);
    });

    //ligne de somme totale
    const trSomme = document.createElement("tr");
    trSomme.innerHTML = `
    <td colspan="4">Total</td>
    <td>${sommeTotale}</td>
    <td>
        <button type="button" class="btn btn-success" onClick="commander()">Commander</button>
    </td>
    `;
    panierBody.appendChild(trSomme);


};

function supprimerProduit(index) {
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier.splice(index, 1);
    localStorage.setItem("panier", JSON.stringify(panier));

    window.location.reload();  //Recgarger la page actuelle
}

function commander() {
    console.log("here from commander!");

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    let commandes = JSON.parse(localStorage.getItem("commandes")) || [];

    //Ajouter la commande
    commandes.push({
        date: new Date().toLocaleDateString(),
        produit: panier
    });

    localStorage.setItem("commandes", JSON.stringify(commandes));


    //Vider le panier
    localStorage.removeItem("panier");
    alert("commande effectuée!");
    window.location.reload();  //Recharge de la page actuelle
}

afficherDetailsProduits();
afficherProduits();
afficherPanier();