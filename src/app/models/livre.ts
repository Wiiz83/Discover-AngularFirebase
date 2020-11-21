export class Livre {

  private _titre: string;
  private _auteur: string;
  private _pays: string;

  constructor(titre: string, auteur: string, pays: string) {
    this._titre = titre;
    this._auteur = auteur;
    this._pays = pays;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get auteur(): string {
    return this._auteur;
  }

  set auteur(value: string) {
    this._auteur = value;
  }

  get pays(): string {
    return this._pays;
  }

  set pays(value: string) {
    this._pays = value;
  }
}
