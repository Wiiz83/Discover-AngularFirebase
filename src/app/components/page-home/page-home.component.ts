import { Component, OnInit } from '@angular/core';
import {LivresService} from '../../services/livres.service';
import {Livre} from '../../models/livre';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  public livres: any[];

  constructor(public livresService: LivresService) { }

  ngOnInit() {
    this.loadLivres();
  }

  loadLivres() {
    this.livresService.getLivres().subscribe(res => {
      this.livres = res;
    });
  }

  onSubmit() {
    const livre = this.livresService.formNouveauLivre.value;
    this.livresService.createLivre(livre)
      .then(res => {
        console.log(res);
      });
  }

}
