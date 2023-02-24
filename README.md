# Pizzeria Della Mamma 🍕

La chaîne de restaurants Pizzeria Della Mamma souhaite automatiser la prise de commande en restaurant. Pour cela, chaque tablée se verra attribuer une tablette au moment de s’installer. Les clients pourront alors customiser leurs pizzas, créer leur commande, et l’envoyer en cuisine directement.

Les dimensions des tablettes seront fixées à 960px par 1494px, le site n'est donc pas responsive.

**Répartition de la création des features dans l'équipe :**

🍕 - Anne : La sélection et modification du numéro de table  
🍕 - Cynthia : La création du panier et l'envoi de la commande  
🍕 - Jiyun : L’affichage des produits classés par type de produits  
🍕 - Clara : La customisation d’un produit  

## Sélection et modification du numéro de table

Description feature

## Affichage des produits classés par type de produits

Description feature

## Customisation d’un produit

- Affichage de l’image produit et ses attributs : au clic sur un produit de la page « category » afficher le produit demandé.

- Affichage des ingrédients inclus et extras grâce à des boucles *ngFor

- L’initialisation du composant créé une variable qui accueille le produit customisé, en appuyant sur le bouton « ajouter au panier », ce produit customisé est envoyé dans le localStorage (grâce à une fonction du service « basket »)

- Création d’un service « customisation » avec les fonctions d’ajouts/suppression des ingrédients inclus et des extras 

- Création d’un bouton « ajouter au panier » qui affiche un prix qui se met à jour en fonction des extras sélectionnés (une fonction dans le service « customisation » calcule le prix du produit customisé)

- Ingrédients inclus : Avec des checkbox modifier la présence de l’ingrédient dans le produit. Modification du style de la checkbox qui se modifie selon si elle est cochée ou non.

- Extras : Les extras sont mis en ordre alphabétique sans modifier le mock. Création de boutons +/- pour modifier la quantité d’ingrédients, affichage de la quantité. Modification de l’attribut « disabled » sur les boutons en fonction de la quantité.

## Création du panier et de l'envoi de la commande

Description feature


## Environnement
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
