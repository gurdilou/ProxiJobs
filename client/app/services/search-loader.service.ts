import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AdvancedSearch} from '../model/search/advanced-search';
import {ContractKind} from '../model/search/contract-kind';
import {AppProperties} from '../model/general/app-properties';
import {ISearchLoader} from './search/search-loader.interface';

import {SearchLoaderLocal} from './search/search-loader-local.service';
import {SearchLoaderRemote} from './search/search-loader-remote.service';


@Injectable()
export class SearchLoaderService implements ISearchLoader{
  private loaderLocal: SearchLoaderLocal;
  private loaderRemote: SearchLoaderRemote;


  constructor(
    private http: Http,
    private app: AppProperties) {
      this.loaderLocal = new SearchLoaderLocal();
      this.loaderRemote = new SearchLoaderRemote(http);
  }

  getFavorites() : Promise<AdvancedSearch[]>  { 
    if(this.app.userIsConnected()){
      return this.loaderRemote.getFavorites();
    }else{
      return this.loaderLocal.getFavorites();
    }
  }

  addFavorite(newFavorite : AdvancedSearch, insertBefore : number = 0) : Promise<AdvancedSearch> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.addFavorite(newFavorite, insertBefore);
    }else{
      return this.loaderLocal.addFavorite(newFavorite, insertBefore);
    }
  }

  removeFavorite(oldFavorite : AdvancedSearch) : Promise<AdvancedSearch> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.removeFavorite(oldFavorite);
    }else{
      return this.loaderLocal.removeFavorite(oldFavorite);
    }
  }


  getRecents() : Promise<AdvancedSearch[]> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.getRecents();
    }else{
      return this.loaderLocal.getRecents();
    }
  }

  addRecent(recentSearch: AdvancedSearch): Promise<AdvancedSearch> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.addRecent(recentSearch);
    }else{
      return this.loaderLocal.addRecent(recentSearch);
    }
  }
}
