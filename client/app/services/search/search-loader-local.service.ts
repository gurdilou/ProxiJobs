import { Injectable }    from '@angular/core';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {ContractKind} from '../../model/search/contract-kind';
import {ISearchLoader} from './search-loader.interface';

const KEY_FAVORITES  = 'search-favorites';
const KEY_RECENTS  = 'search-recentes';

@Injectable()
export class SearchLoaderLocal implements ISearchLoader{


  constructor() {
  }

  getFavorites() : Promise<AdvancedSearch[]>  {
    return new Promise<AdvancedSearch[]>( (resolve, reject) => {
      try {
        //Résolution
        let result = this.loadSearches(KEY_FAVORITES);
        resolve(result);

      }catch(err){
        reject(err);
      }
    });
  }

  getRecents() : Promise<AdvancedSearch[]> {
    return new Promise<AdvancedSearch[]>( (resolve, reject) => {
      try {
        //Résolution
        let result = this.loadSearches(KEY_RECENTS);
        resolve(result);

      }catch(err){
        reject(err);
      }
    });
  }

  /**
   * Charge une liste de recherches depuis le localStorage
   * @param  {string}           key la clé de stockage
   * @return {AdvancedSearch[]}    la liste des recherches
   */
  private loadSearches(key : string) : AdvancedSearch[] {
    let result : AdvancedSearch[] = [];
    let searchesStr = localStorage.getItem(key);
    if(searchesStr !== null) {
      //parsing des objets
      let resultObj : Object[] = JSON.parse(searchesStr);
      for(let i = 0; i < resultObj.length; i++) {
        let newSearch = AdvancedSearch.parseJSON(resultObj);
        result.push(newSearch);
      }
    }

    console.debug("searchesStr["+key+"] : "+searchesStr);

    return result;
  }

  addFavorite(newFavorite : AdvancedSearch, insertBefore : number = 0) : Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      //Résolution
      this.getFavorites()
        .then(searches => {
          newFavorite.starred = true;
          searches.splice(insertBefore, 0, newFavorite);
          return this.saveSearches(KEY_FAVORITES, searches);
        }).then( (success) => {
          resolve(newFavorite);
        }).catch(err => {
          reject(err);
        })
    });
  }

  /**
   * Sauvegarde les recherches dans le localstorage
   * @param  {string}           key      clé de stockage
   * @param  {AdvancedSearch[]} searches les recherches
   */
  private saveSearches(key: string, searches : AdvancedSearch[]) : Promise<boolean> {
    return new Promise<boolean> ( (resolve, reject) => {
      try{
        localStorage.setItem(key, JSON.stringify(searches));
        resolve(true);
      }catch(err){
        reject(err);
      }
    });
  }

  removeFavorite(oldFavorite : AdvancedSearch) : Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      oldFavorite.starred = false;
      resolve(oldFavorite);
      // reject(Error("Failed to find position"));
    });
  }


  addRecent(recentSearch: AdvancedSearch): Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      resolve(recentSearch);
      // reject(Error("Failed to find position"));
    });
  }
}
