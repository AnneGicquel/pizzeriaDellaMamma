import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-number-form',
  templateUrl: './table-number-form.component.html',
  styleUrls: ['./table-number-form.component.css']
})
export class TableNumberFormComponent {

  // déclarer la propriété FormGroup
  tableForm!:FormGroup

  // tableau pour recueillir les erreurs de saisie 
  validationError: string[]=[];

  // injecter dans le constructeur formBuilder
  constructor(private formBuilder : FormBuilder, private router: Router ){

  }

  ngOnInit(){
    // on assigne à 'tableForm' le formulaire qu'on va créer
    // .group ({})-> prend un objet (avec une liste clé/valeur) en argument
    this.tableForm = this.formBuilder.group({
      // clé avec la valeur null par défaut
      // Validators pour vérifier qu’une information est bien renseignée 
      // .pattern pour le regex 
      // regex ^ -> début, $ -> fin, 1 à 9 -> [1-9], 10 à 14 ^1[0-4]$.
      table_number:[null, [Validators.required, Validators.pattern(/^[1-9]$|^1[0-4]$/)]]
    })

  }
  
//   accessToMenu(){
//     // // test
//     // console.log(this.tableForm.value)}

//     // réinitialiser le tableau d'erreur
//     this.validationError = [];

//     if (this.tableForm.invalid) { 
//       // Si le formulaire est invalide
//       Object.keys(this.tableForm.controls).forEach((inputValue) => {
//         const currentInput = this.tableForm.get(inputValue);
//         console.log(inputValue)

//         if (currentInput && currentInput.status === "INVALID") {
//            this.validationError.push(inputValue);
//         }
//         // renseigner une erreur de saisie---> doit afficher: "Numéro de table incorrecte."
//       })
//     } else {
//       console.log("please !!!!")
//       // ----> redirige vers la pages/category
//       this.router.navigate(['/category']);
//       // navbar apparaît
//       // table (numéro input) sur bouton
//       // ----> transforme le h1 en: 'Table (numéro input)
//       // ----> transforme le label: 'Modifier mon numéro de table'
//       // ----> transforme le bouton: 'Modifier'
//     }
//   }   
// }


//  COMMENTER ET REFAIRE LA FIN DE LA METHODE
accessToMenu() {
  // réinitialiser le tableau d'erreur
  this.validationError = [];

  if (this.tableForm.invalid) {
    // Si le formulaire est invalide
    const invalidControls = Object.keys(this.tableForm.controls).filter(inputValue => {
      const currentInput = this.tableForm.get(inputValue);
      return currentInput && currentInput.status === "INVALID";
    });
    this.validationError = invalidControls;
  } else {
    console.log("please !!!!")
  }
}
}

    
 

    
  
 
  
