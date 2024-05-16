# Les Bonnes Pièces project

- Les Bonnes Pièces, un site de vente de pièces détachées automobiles.

- **Objectif** : Créer une interface web pour visualiser, trier et ordonner les produits, et les commentaires publiés par les internautes.

# CHAPITRE 1

## Exercice 1

Depuis la branche GitHub [P1C3-Exercice](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/blob/P1C3-Exercice/pieces-autos.json), éditez le fichier pieces-autos.json et ajoutez deux informations pour chaque pièce automobile :

1. Une propriété ‘description’ :

- Ampoule LED : “Distance d’éclairage : 100 mètres !”.
- Plaquettes de frein (x4) : “Une qualité de freinage optimale, par tous les temps.”.
- Ampoule boîte à gants : “Pour y voir clair dans l’habitacle.”.
- Liquide de frein : Aucune description, ne pas rajouter de propriété.
- Balai d’essuie-glace : “Performances d’essuyage au top ! Longueur : 550 mm.”.

2. Une propritété ‘disponibilite’ pour la disponibilité :

- Ampoule LED : oui.
- Plaquettes de frein (x4) : oui.
- Ampoule boîte à gants : non.
- Liquide de frein : oui.
- Balai d’essuie-glace : oui.

Pour y parvenir, posez-vous d’abord la question du type de donnée approprié. Identifiez ensuite l’endroit précis à modifier. Enfin, utilisez la syntaxe des types choisis pour compléter les informations.

Vous pouvez vérifier votre travail en consultant la branche [P1C3-Solution](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/blob/P1C3-Solution/pieces-autos.json)

## Exercice 2

À partir de la branche GitHub [P1C4-Exercice](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/blob/P1C4-Exercice/pieces.js) :
Éditez le fichier pieces.js, ajoutez-y le code développé dans ce chapitre de manière à générer une fiche produit, et ajoutez :

- un élément de paragraphe pour la description avec le texte “Pas de description pour le moment.” en cas d’absence de description ;
- un élément de paragraphe avec le texte “En stock” si l’article est disponible, ou “Rupture de stock” s’il n’est plus disponible.

Vous pouvez vérifier votre travail en consultant la branche GitHub [P1C4-Solution](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/blob/P1C4-Solution/pieces.js)

# CHAPITRE 2

## Exercice 3

Depuis la branche [P2C1-Exercice](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P2C1-Exercice), éditez les fichiers pieces.js et index.html pour y ajouter les fonctionnalités suivantes :

- filtrer la liste des pièces pour n’afficher que celles qui ont une description, à l’aide d’un bouton que vous ajouterez dans le HTML ;
- ordonner les listes selon le prix en ordre décroissant, à l’aide d’un bouton que vous ajouterez dans le HTML.

Vous pouvez vérifier votre travail en consultant la branche [P2C1-Solution](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P2C1-Solution)

## Exercice 4

Depuis la branche [P2C2-Exercice](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P2C2-Exercice), affichez une description des pièces disponibles à côté de la description des pièces abordables. L’intitulé de la pièce devra aussi contenir son prix. Par exemple :

1. Pièces disponibles :

- Ampoule LED – 60 €.
- Plaquette de frein (x4) – 40 €.
- Liquide de frein – 9,6 €.

Vous pouvez vérifier votre travail en consultant [la branche P2C2-Solution](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P2C2-Solution)

## Exercice 5

Depuis les fichiers index.html et pieces.js de la branche [P2C3-Exercice](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P2C3-Exercice) :

1. ajoutez une balise input de type range dans la page web, représentant le prix maximum pour filtrer les pièces :

- valeur min : 0
- valeur max : 60
- step: 5

La balise input de type range en HTML permet de fournir un nombre à l’aide d’une barre horizontale avec une poignée que l’on peut glisser de droite à gauche. En définissant les valeurs minimale et maximale sur la balise, la position de la poignée nous donne la valeur correspondante sous forme de nombre.

Vous pouvez vérifier votre travail en consultant la branche [P2C3-Solution](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P2C3-Solution)

# CHAPITRE 3

## Exercice 6

Depuis la branche [P3C2-Exercice](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P3C2-Exercice) dans le fichier pieces.js, remplacez la ligne qui récupère les pièces depuis le fichier JSON, de manière à les récupérer depuis l’API à l’adresse http://localhost:8081/pieces.
Vous pouvez vérifier votre travail en consultant la branche [P3C2-Solution](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P3C2-Solution)

## Exercice 7

Dans le fichier index.html de la branche [P3C3-Exercice](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P3C3-Exercice) :

- Ajoutez une balise input type=”number” qui servira à spécifier le nombre d’étoiles que l’utilisateur attribue à la pièce avec son commentaire.
- Modifiez en conséquence le fichier avis.js pour prendre en compte cette nouvelle information dans la charge utile. Vous utiliserez la propriété “nbEtoiles” dans l’objet de la charge utile.

Vous pouvez vérifier votre travail en consultant la branche [P3C3-Solution](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P3C3-Solution)

## Exercice 8

Dans le fichier avis.js de la branche [P3C4-Exercice](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P3C4-Exercice) :

- sauvegardez les avis quand vous recevez la réponse de l’API HTTP à votre requête pour récupérer les avis d’une pièce auto ;
- affichez automatiquement les avis enregistrés lors du chargement de la page web.

Vous pouvez vérifier votre travail en consultant la branche [P3C4-Solution](https://github.com/OpenClassrooms-Student-Center/7697016-Front-End.1/tree/P3C4-Solution)
