import {Component, OnInit} from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {SearchLoaderService} from '../../services/search-loader.service';
import {SearchAdvancedWidget} from './search-adv-widget.component';

@Component({
  selector: 'pj-search-favorites',
  templateUrl : 'app/views/search/search-favorites.component.html',
  directives: [SearchAdvancedWidget],
  providers: [SearchLoaderService]
})

export class SearchFavoritesComponent implements OnInit {
  favorites : AdvancedSearch[];

  constructor(
    private searchService : SearchLoaderService) {
  }

  getFavorites() {
    this.searchService.getFavorites()
      .then(searches => {
        this.favorites = searches;
      });
  }

  ngOnInit() {
    this.getFavorites();
  }
}
