import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-number-form',
  templateUrl: './table-number-form.component.html',
  styleUrls: ['./table-number-form.component.css']
})
export class TableNumberFormComponent {

  // déclarer la propriété FormGroup
  tableForm!:FormGroup

  // tableau pour recueillir les erreurs de saisie 
  validationError:[]=[];

  // injecter dans le constructeur formBuilder
  constructor(private formBuilder : FormBuilder){

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
   accessToMenu(){
    // test
    console.log(this.tableForm.value)

    
    // // réinitialiser le tableau d'erreur
    //  if (this.tableForm.invalid){
    // // boucler sur l'objet <---------------------------------------------------------
    //     Object.keys(this.tableForm.controls).forEach((control)=>(input => {
    //       const inputObject = this.tableForm.get(input);
    //       if (inputObject && inputObject.errors){
    //         this.validationError.push(input);
    //       }
        
    //   })
    // }else{
    //         // this.router.navigate([/])
    //         console.log('test')

    //   }
  }
}
  

    
  
 
  
