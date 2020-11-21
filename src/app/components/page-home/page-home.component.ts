import { Component, OnInit } from '@angular/core';
import {LivresService} from '../../services/livres.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  constructor(public livresService: LivresService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const livre = this.livresService.formNouveauLivre.value;
    this.livresService.createLivre(livre)
      .then(res => {
        debugger;
      });
  }

}
