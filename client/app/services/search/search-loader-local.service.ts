import { Injectable }    from '@angular/core';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {ContractKind} from '../../model/search/contract-kind';
import {ISearchLoader} from './search-loader.interface';

import {NotificationService} from '../notification.service';

const KEY_FAVORITES  = 'search-favorites';
const KEY_RECENTS  = 'search-recentes';
const RECENTS_LENGTH  = 20;

@Injectable()
export class SearchLoaderLocal implements ISearchLoader{


  constructor(private notifier: NotificationService) {
  }

  getFavorites() : Promise<AdvancedSearch[]>  {
    return new Promise<AdvancedSearch[]>( (resolve, reject) => {
      try {
        //Résolution
        let result = this.loadSearches(KEY_FAVORITES);
        resolve(result);

      }catch(err){
        this.notifier.errror(err);
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
        this.notifier.errror(err);
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
        let newSearch = AdvancedSearch.parseJSON(resultObj[i]);
        result.push(newSearch);
      }
      // console.debug("count searchesStr["+key+"] : "+searchesStr);
    }

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
          this.notifier.errror(err);
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

  removeFavorite(index : number, oldFavorite : AdvancedSearch) : Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      //Résolution
      this.getFavorites()
        .then(searches => {
          searches.splice(index, 1);
          oldFavorite.starred = false;

          return this.saveSearches(KEY_FAVORITES, searches);
        }).then( (success) => {
          resolve(oldFavorite);
        }).catch(err => {
          this.notifier.errror(err);
        });
    });
  }


  addRecent(recentSearch: AdvancedSearch): Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      //Résolution
      this.getRecents()
        .then(searches => {
          searches.splice(0, 0, recentSearch);

          if(searches.length > RECENTS_LENGTH) {
            searches.splice(RECENTS_LENGTH - 1, searches.length - RECENTS_LENGTH);
          }

          return this.saveSearches(KEY_RECENTS, searches);
        }).then( (success) => {
          resolve(recentSearch);
        }).catch(err => {
          this.notifier.errror(err);
        });
    });
  }

  refreshFavorite(index : number, search : AdvancedSearch): Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      //Résolution
      this.getFavorites()
        .then(searches => {
          searches[index] = search;
          return this.saveSearches(KEY_FAVORITES, searches);
        }).then( (success) => {
          resolve(search);
        }).catch(err => {
          this.notifier.errror(err);
        });
    });
  }
}
