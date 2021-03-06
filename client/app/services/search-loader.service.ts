import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import {AdvancedSearch} from '../model/search/advanced-search';
import {AppProperties} from '../model/general/app-properties';
import {ISearchLoader} from './search/search-loader.interface';

import {SearchLoaderLocal} from './search/search-loader-local.service';
import {SearchLoaderRemote} from './search/search-loader-remote.service';
import {NotificationService} from './notification.service';


@Injectable()
export class SearchLoaderService implements ISearchLoader{
  private loaderLocal: SearchLoaderLocal;
  private loaderRemote: SearchLoaderRemote;


  constructor(
    private http: Http,
    private app: AppProperties,
    private notifier: NotificationService) {
      this.loaderLocal = new SearchLoaderLocal(notifier);
      this.loaderRemote = new SearchLoaderRemote(http, notifier);
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

  removeFavorite(index : number, oldFavorite : AdvancedSearch) : Promise<AdvancedSearch> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.removeFavorite(index, oldFavorite);
    }else{
      return this.loaderLocal.removeFavorite(index, oldFavorite);
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

  refreshFavorite(index : number, search : AdvancedSearch): Promise<AdvancedSearch> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.refreshFavorite(index, search);
    }else{
      return this.loaderLocal.refreshFavorite(index, search);
    }
  }
}
