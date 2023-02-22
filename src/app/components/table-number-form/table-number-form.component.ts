import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  


  // méthode qui vérifie si le formulaire est valide ou non
  accessToMenu() {
    // réinitialiser le tableau d'erreur
    this.validationError = [];

    // if true
    if (this.tableForm.invalid) {
      // Si le formulaire est invalide
      // Object.keys() récupére noms des contrôles du formulaire 
      // filter() pour ne garder que contrôles invalides (en se basant sur la propriété status de chaque contrôle)
      // stocke les noms des contrôles invalides dans invalidControls.
      const invalidControls = Object.keys(this.tableForm.controls).filter(inputValue => {
        // récupère la saisie
        const currentInput = this.tableForm.get(inputValue);
        // console.log(control,currentInput);
        // status: INVALID vient du détail du control (ds console js)
        // si il y a un objet et que son status est invalid
        // if (currentInput && currentInput.status === "INVALID");
        return currentInput && currentInput.status === "INVALID";
      });
      // affecter invalidControls à la propriété validationError.
      this.validationError = invalidControls;
    } else {
      // si valide, redirige vers la page category
      this.router.navigate(['/category']);
    }
  }

}
  
  
 
  
