// 1. Récupération des pièces depuis le fichier JSON

const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// 2. ON CREE LES ELEMENTS

const article = pieces[0];
// balise img
const imageElement = document.createElement("img");
imageElement.src = article.image;
// balise pour le nom
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
// balise pour le prix
const prixElement = document.createElement("p");
// equivalent de : prixElement.innerText = "Prix: " + article.prix + " €";
// prixElement.innerText = `Prix: ${article.prix} €`;
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
// balise pour la catégorie
const categorieElement = document.createElement("p");
// categorieElement.innerText = article.categorie;
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

// 3. ON "RATTACHE" LES ELEMENTS A UN PARENT ==> <section class="fiches"> </section>

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
