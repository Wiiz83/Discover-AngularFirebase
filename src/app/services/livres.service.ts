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

  createLivre(livre: FormGroup): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("livres")
        .add(livre)
        .then(res => {}, err => reject(err));
    });
  }

  updateLivre(data) {
    return this.firestore
      .collection("livres")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getLivres() {
    return this.firestore.collection("livres").snapshotChanges();
  }

  deleteLivre(data) {
    return this.firestore
      .collection("livres")
      .doc(data.payload.doc.id)
      .delete();
  }
}
