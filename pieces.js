

const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {
        const article = pieces[i];
        const pieceElement = document.createElement("article");

        const imageElement = document.createElement("img");
        imageElement.src = article.image;

        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;

        const prixElement = document.createElement("p");
        prixElement.innerHTML = `Prix: ${article.prix} €  (${article.prix < 35 ? "€" : "€ € € "})`;

        const categorieElement = document.createElement("p");
        categorieElement.innerText= article.categorie ?? "(aucune categorie)";

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment";

        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";
         //add tag to article in the dom
         const sectionFiches = document.querySelector(".fiches");
         sectionFiches.appendChild(pieceElement);
         pieceElement.appendChild(imageElement);
         pieceElement.appendChild(nomElement);
         pieceElement.appendChild(prixElement);
         pieceElement.appendChild(categorieElement);
         pieceElement.appendChild(descriptionElement);
         pieceElement.appendChild(stockElement);
         sectionFiches.appendChild(pieceElement);
         pieceElement.appendChild(avisBouton);
        // document.body.appendChild(pieceElement);
    }
}
genererPieces(pieces);

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a,b){
        return a.prix - b.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function(){
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix < 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

  const prixDecroissant = document.querySelector(".btn-filtrer-decroissant");
    prixDecroissant.addEventListener("click", function (){
        const decroissantPrix = Array.from(pieces);
        decroissantPrix.sort(function(a, b){
            return b.prix - a.prix;
        });
        document.querySelector(".fiches").innerHTML="";
        genererPieces(decroissantPrix);
    });

const inputPrixMax = document.querySelector("#prix-filtre");
inputPrixMax.addEventListener("input", function(){
    const prixFiltrer = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML="";
    genererPieces(prixFiltrer);
});

 const filtrerDescription = document.querySelector(".btn-filtrer-description");
    filtrerDescription.addEventListener("click", function() {
        const descriptionFiltrer = pieces.filter(function (piece) {
            return piece.description;
    
        })
        document.querySelector(".fiches").innerText = "";
        genererPieces(descriptionFiltrer);
    });

    // cimetirere et exercice -----------------
// piece liste ---------------------------------
// const noms = pieces.map(piece => piece.nom);
// const abordablesPrix = pieces.map(piece => piece.prix);

// for(let i = pieces.length -1; i >= 0; i--){
//     if(pieces[i].prix > 35){
//         noms.splice(i,1)
//         abordablesPrix.splice(i,1);
//     }
// }
// console.log(noms);

// const abordablesElements = document.createElement("ul");
// for(let i = 0 ; i < noms.length; i++){
//     const nomsElement = document.createElement("li");
//     nomsElement.innerText = noms[i] + " " + abordablesPrix[i] +"€";
//     abordablesElements.appendChild(nomsElement);
// } 
// document.querySelector(".abordables")
//     .appendChild(abordablesElements);

    
    // // tri element ////////////////////////////
    
    // // event listener
    // const boutonTrier = document.querySelector(".btn-trier");
    // boutonTrier.addEventListener("click", function () {
    //     const piecesOrdonnees = Array.from(pieces);
    //     piecesOrdonnees.sort(function (a, b) {
    //         return a.prix - b.prix;
    //     });
    //     console.log(piecesOrdonnees);
    // });
    
    // const boutonFiltrer = document.querySelector(".btn-filtrer");
    // boutonFiltrer.addEventListener("click", function () {
    //     const piecesFiltrees = pieces.filter(function (piece) {
    //         return piece.prix <= 35;
    //     })
    //      console.log(piecesFiltrees)
    // });
    
    // const filtrerDescription = document.querySelector(".btn-filtrer-description");
    // filtrerDescription.addEventListener("click", function() {
    //     const descriptionFiltrer = pieces.filter(function (piece) {
    //         return piece.description;
    
    //     })
    //     console.log(descriptionFiltrer);
    // });
    
  
    

// --utilisation de splice ---
// const noms = pieces.map(piece => piece.nom);
// for(let i = pieces.length -1 ; i >= 0; i--){
//    if(pieces[i].prix > 35){
//        noms.splice(i,1)
//    }
// }
// console.log("test " + noms);
