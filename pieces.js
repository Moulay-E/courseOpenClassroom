

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


const inputPrixMax = document.querySelector("#prix-filtre");
inputPrixMax.addEventListener("input", function(){
    const prixFiltrer = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML="";
    genererPieces(prixFiltrer);
})

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











//cimetire code-------------------------------------


    // const reponse = await fetch('pieces-autos.json');
    // const pieces = await reponse.json();
    
    // //----- without loop --------------------
    // // const article = pieces[0];
    // // const imageElement = document.createElement("img");
    // // imageElement.src =  "./images/" + article.img;
    // // const nomElement = document.createElement("h2");
    // // nomElement.innerText = article.nom;
    // // const prixElement = document.createElement("p");
    // // prixElement.innerHTML = `Prix: ${article.prix} € (${article.prix < 35 ? "€": "€€€"}) `;
    // // const categorieElement = document.createElement("p");
    // // categorieElement.innerHTML = article.categorie ?? ("aucune catégories");
    // // const descriptionElement = document.createElement("p");
    // // descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    // // const disponibiliteElement = document.createElement("p");
    // // disponibiliteElement.innerText = `${article.disponibilite  ?  "En stock" : "Rupture de stock"}`;
    // // const sectionFiches = document.querySelector(".fiches");
    // // // sectionFiches.appendChild(imageElement);
    // // sectionFiches.appendChild(nomElement);
    // // sectionFiches.appendChild(prixElement);
    // // sectionFiches.appendChild(categorieElement);
    // // sectionFiches.appendChild(descriptionElement);
    // // sectionFiches.appendChild(disponibiliteElement);
    // // console.log('test' + descriptionElement);
    // //-------------------------------------------------
    
    // //------with loop -------------------------------
    
    // for (let i = 0; i < pieces.length; i++) {
    //     const article = pieces[i];
    // // recup element from dom for fiche
    //     const sectionFiches = document.querySelector(".fiches");
    // // creation tag dedicated to an auto part
    //     const pieceElement = document.createElement("article");
    // // create element img
    //     const imageElement = document.createElement("img");
    // // same for nom
    //     const nomElement = document.createElement("h2");
    // //same for prix
    //     const prixElement = document.createElement("p");
    // //same
    //     const categorieElement = document.createElement("p");
    // //
    //     const descriptionElement = document.createElement("p");
    // //
    //     const disponibiliteElement = document.createElement("p");
    
    
    // //We access the index i of the parts list to configure the source of the image.
    //     imageElement.src =  article.image;
    // // same for nom
    //     nomElement.innerText = article.nom;
    // // same for prix
    //     prixElement.innerHTML = `Prix: ${article.prix} € (${article.prix < 35 ? "€": "€€€"}) `;
    // // same
    //     categorieElement.innerHTML = article.categorie ?? ("aucune catégories");
    // //
    //     descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    // //
    //     disponibiliteElement.innerText = `${article.disponibilite  ?  "En stock" : "Rupture de stock"}`;
    
    // //we attach the article tag to the Files section
    //     sectionFiches.appendChild(pieceElement);
    // //We attach the image to pieceElement (the article tag)
    //     pieceElement.appendChild(imageElement);
    // //same to nom
    //     pieceElement.appendChild(nomElement);
    // // same
    //     pieceElement.appendChild(prixElement);
    // //
    //     pieceElement.appendChild(categorieElement);
    // //
    //     pieceElement.appendChild(descriptionElement);
    // //
    //     pieceElement.appendChild(disponibiliteElement);
    // }
    
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
    
    // const prixDecroissant = document.querySelector(".btn-filtrer-decroissant");
    // prixDecroissant.addEventListener("click", function (){
    //     const decroissantPrix = Array.from(pieces);
    //     decroissantPrix.sort(function(a, b){
    //         return b.prix - a.prix;
    //     });
    //     console.log(decroissantPrix);
    // });
    

// --utilisation de splice ---
// const noms = pieces.map(piece => piece.nom);
// for(let i = pieces.length -1 ; i >= 0; i--){
//    if(pieces[i].prix > 35){
//        noms.splice(i,1)
//    }
// }
// console.log("test " + noms);
