import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import {Toast} from 'angular2-toaster/angular2-toaster';

import {AdvancedSearch} from '../../model/search/advanced-search';

import {SearchLoaderService} from '../../services/search-loader.service';
import {NotificationService} from '../../services/notification.service';

import {SearchAdvancedWidget} from './search-adv-widget.component';

@Component({
  selector: 'pj-search-favorites',
  templateUrl : 'app/views/search/search-favorites.component.html',
  directives: [SearchAdvancedWidget],
  providers: [NotificationService, SearchLoaderService]
})

export class SearchFavoritesComponent implements OnInit {
  private favorites : AdvancedSearch[];
  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor(
    private searchService : SearchLoaderService,
    private notifier : NotificationService) {
  }

  private getFavorites() {
    this.searchService.getFavorites()
      .then(searches => {
        this.favorites = searches;
      });
  }

  ngOnInit() {
    this.getFavorites();
  }
  /**
   * Appelé lors de l'ajout d'un favoris depuis la recherche avancée
   * @param  {AdvancedSearch} newFavorite la nouvelle favorite
   */
  addFavorite(newFavorite : AdvancedSearch, insertBefore : number = 0) {
    this.favorites.splice(insertBefore,0,newFavorite);
  }
  /**
   * Appelé lors de l'annulation d'un favoris depuis la recherche avancée
   * @param  {AdvancedSearch} oldFavorite l'ex favorite
   */
  removeFromFavorites(oldFavorite : AdvancedSearch) {
    let found = false;
    let i = 0;
    while( (i < this.favorites.length) && !found ) {
      if(this.favorites[i] == oldFavorite) {
        this.favorites.splice(i, 1);
        found = true;
      }else{
        i++;
      }
    }

    if(found){
      this.informDeleteSucceed(oldFavorite, i);
    }
  }
  /**
   * Lors de la sélection d'une recherche locale
   * @param  {AdvancedSearch} search la recherche sélectionnée
   */
  protected onSelectWidget(search : AdvancedSearch) {
    this.onSelect.emit(search);
  }
  /**
   * Lors de la suppression d'un favoris depuis un widget
   * @param  {AdvancedSearch} oldFavorite l'ancien favori
   */
  protected onDeleteFavorite(oldFavorite : AdvancedSearch) {
    this.searchService.removeFavorite(oldFavorite)
      .then(search => {
        this.removeFromFavorites(oldFavorite);
        this.onDelete.emit(oldFavorite);
      });
  }

  /**
   * Informe l'utilisateur de la suppression du favori
   * @param  {AdvancedSearch} searchDeleted la recherche supprimée
   * @return {[type]}
   */
  private informDeleteSucceed(searchDeleted : AdvancedSearch, index: number = 0) {
    this.notifier.askConfirmDownload('Favorie supprimée "'+searchDeleted.job+'"', (isCanceled) => {
      if(isCanceled){
        this.searchService.addFavorite(searchDeleted, index)
        .then(search => {
          this.addFavorite(searchDeleted, index);
        });
      }
    });
  }
}
