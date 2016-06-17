import {Component} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {SearchAdvancedComponent} from './search-advanced.component';
import {SearchFavoritesComponent} from './search-favorites.component';
import {SearchRecentsComponent} from './search-recents.component';

@Component({
  selector: 'pj-search-page',
  templateUrl : 'app/views/search/search-page.component.html',
  directives: [SearchAdvancedComponent, SearchFavoritesComponent, SearchRecentsComponent]
})

export class SearchPageComponent {
  constructor(private router: Router) {
  }
}
