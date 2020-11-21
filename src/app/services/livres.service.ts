import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Livre} from '../models/livre';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  formNouveauLivre = new FormGroup({
    titre: new FormControl(''),
    auteur: new FormControl(''),
    pays: new FormControl(''),
    completed: new FormControl(false)
  });

  constructor(private firestore: AngularFirestore) {}

  public createLivre(livre: FormGroup): Promise<any> {
    debugger;
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("livres")
        .add(livre)
        .then(res => {}, err => reject(err));
    });
  }
}
