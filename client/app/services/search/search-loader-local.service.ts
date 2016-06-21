import { Injectable }    from '@angular/core';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {ContractKind} from '../../model/search/contract-kind';
import {ISearchLoader} from './search-loader.interface';


@Injectable()
export class SearchLoaderLocal implements ISearchLoader{

  constructor() {
  }

  getFavorites() : Promise<AdvancedSearch[]>  {
    return new Promise<AdvancedSearch[]>( (resolve, reject) => {
      let result : AdvancedSearch[] =[];


      resolve(result);
      // reject(Error("Failed to find position"));
    });
  }

  addFavorite(newFavorite : AdvancedSearch, insertBefore : number = 0) : Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      newFavorite.starred = true;
      resolve(newFavorite);
      // reject(Error("Failed to find position"));
    });
  }

  removeFavorite(oldFavorite : AdvancedSearch) : Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      oldFavorite.starred = false;
      resolve(oldFavorite);
      // reject(Error("Failed to find position"));
    });
  }

  getRecents() : Promise<AdvancedSearch[]> {
    return new Promise<AdvancedSearch[]>( (resolve, reject) => {
      let result : AdvancedSearch[] =[];


      resolve(result);
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
