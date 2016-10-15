import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {AdvancedSearch} from '../../model/search/advanced-search';

import {SearchAdvancedComponent} from './search-advanced.component';
import {SearchFavoritesComponent} from './search-favorites.component';
import {SearchRecentsComponent} from './search-recents.component';

@Component({
  selector: 'pj-search-page',
  templateUrl : 'app/views/search/search-page.component.html',
})

export class SearchPageComponent {
  @ViewChild(SearchFavoritesComponent) favoritesPanel:SearchFavoritesComponent;
  @ViewChild(SearchAdvancedComponent) advancedPanel:SearchAdvancedComponent;
  @ViewChild(SearchRecentsComponent) recentsPanel:SearchRecentsComponent;


  constructor(private router: Router) {
  }

  /**
   * Evenement levé lors de l'ajout d'un favoris depuis la recherche avancée
   * @param  {AdvancedSearch} newFavorite la nouvelle favorite
   */
  protected onAddingToFavorites(search : AdvancedSearch) {
    this.favoritesPanel.addFavorite(search);
  }
  /**
   * Evenement levé lors de l'annulation d'un favoris depuis la recherche avancée
   * @param  {AdvancedSearch} oldFavorite l'ex favorite
   */
  protected onRemoveFromFavorites(oldFavorite : AdvancedSearch) {
    this.favoritesPanel.removeFromFavorites(oldFavorite);
  }

  /**
   * Evenement levé lors de la sélection d'une recherche depuis les favoris
   * @param  {AdvancedSearch} search la recherche favorite sélectionnée
   */
  protected onSelectFavoriteSearch(ctn : Object) {
    this.advancedPanel.applySearch(ctn["search"], ctn["index"]);
  }
  /**
   * Evènement levé lors de la suppression d'un favoris depuis le panneau des favoris
   * @param  {AdvancedSearch} oldFavorite la recherche supprimée
   */
  protected onDeleteFavoriteSearch(oldFavorite : AdvancedSearch) {
    this.advancedPanel.refreshSearchStarred(oldFavorite);
  }

  /**
   * Evenement levé lors de la sélection d'une recherche depuis les favoris
   * @param  {AdvancedSearch} search la recherche favorite sélectionnée
   */
  protected onSelectRecentSearch(search : AdvancedSearch) {
    this.advancedPanel.applySearch(search, -1);
  }



}
