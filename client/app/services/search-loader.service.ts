import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AdvancedSearch} from '../model/search/advanced-search';
import  {ContractKind} from '../model/search/contract-kind';


@Injectable()
export class SearchLoaderService {



  constructor(
    private http: Http) {
  }

  /**
   * Demande au serveur la liste des recherches favorites
   * @return {Promise<AdvancedSearch[]>} La liste des recherches favories
   */
  getFavorites() : Promise<AdvancedSearch[]>  {
    return new Promise<AdvancedSearch[]>( (resolve, reject) => {
      let result : AdvancedSearch[] =[];

      let s1 = new AdvancedSearch();
      s1.job = "Interprète, PDG";
      s1.city = "Rouen";
      s1.perimeter = "25km";
      s1.company = "bnp";
      s1.salary = 44;
      s1.starred = true;
      result.push(s1);

      let s2 = new AdvancedSearch();
      s2.job = "Développeur";
      s2.city = "Paris";
      s2.perimeter = "";
      s2.company = "";
      s2.salary = 0;
      s2.starred = true;
      result.push(s2);


      for(let i = 0; i < 0; i++){
        let s3 = new AdvancedSearch();
        s3.job = "Développeur";
        s3.city = "Paris";
        s3.kind = ContractKind.Permanent;
        s3.perimeter = "2min";
        s3.company = "INVOKE";
        s3.salary = 30;
        s3.starred = true;
        result.push(s3);
      }


      resolve(result);

      // reject(Error("Failed to find position"));
    });
  }

  /**
   * Sauvegarde une nouvelle recherche favorie
   * @param  {AdvancedSearch}          newFavorite la nouvelle recherche favorie
   * @return {Promise<boolean>}
   */
  addFavorite(newFavorite : AdvancedSearch) : Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      newFavorite.starred = true;
      resolve(newFavorite);
      // reject(Error("Failed to find position"));
    });
  }

  /**
   * Supprime une recherche favorie
   * @param  {AdvancedSearch}          oldFavorite l'ancienne recherche favorie
   * @return {Promise<AdvancedSearch>}
   */
  removeFavorite(oldFavorite : AdvancedSearch) : Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      oldFavorite.starred = false;
      resolve(oldFavorite);
      // reject(Error("Failed to find position"));
    });
  }

  /**
   * Charge la liste des recherches récentes
   * @return {Promise<AdvancedSearch[]>}  la liste des recherches récentes
   */
  getRecents() : Promise<AdvancedSearch[]> {
    // TODO
    return this.getFavorites();
  }

  /**
   * Ajoute une recherche aux récentes
   * @param  {AdvancedSearch} recentSearch la recherche récente
   * @return {Promise<AdvancedSearch>}
   */
  public addRecent(recentSearch: AdvancedSearch): Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {

      resolve(recentSearch);
      // reject(Error("Failed to find position"));
    });
  }


  /**
   * Gestion des erreurs
   * @param  {any}    error une erreur émise
   */
  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
