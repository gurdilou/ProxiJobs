import { Injectable }    from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {ContractKind} from '../../model/search/contract-kind';
import {ISearchLoader} from './search-loader.interface';

import {NotificationService} from '../notification.service';


@Injectable()
export class SearchLoaderRemote implements ISearchLoader{

  constructor(private http: Http,
    private notifier: NotificationService) {
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

  removeFavorite(index : number, oldFavorite : AdvancedSearch) : Promise<AdvancedSearch> {
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

  refreshFavorite(index : number, search : AdvancedSearch): Promise<AdvancedSearch> {
    return new Promise<AdvancedSearch>( (resolve, reject) => {
      resolve(search);
      // reject(Error("Failed to find position"));
    });
  }

}
