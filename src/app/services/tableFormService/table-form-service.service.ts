import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TableFormServiceService {

  constructor() { }

  currentTableNumberStorage: any;

  // RÉCUPERATION du numéro de table
  getTableNumberStorage() {
    // getItem(): renvoie la valeur associée à la clé passée en paramètre. 
    const tableNumberStorage = localStorage.getItem('table-number-storage');
    
    // if valeur associée existe
    if (tableNumberStorage) {
      // .parse(): retourne la valeur convertie en objet 
      return JSON.parse(tableNumberStorage);
    } else {
      // this.createTableNumberStorage();
      this.getTableNumberStorage();
    }
  }

  // RÉCUPÉRATION de la value du FormGroup
  storeTableNumberInfo (tableNumber: FormGroup) {
    // ajoute à l'emplacement de stockage 
    localStorage.setItem('table-number-storage', JSON.stringify(tableNumber));

  }


  // RENVOIE du numéro de table saisie
  getTableNumberInfo() {
    // You can read data from localStorage using the getItem() method. 
    // This method accepts the key as a parameter and returns the value as a string.
    return localStorage.getItem('table-number-storage');

  }


}
