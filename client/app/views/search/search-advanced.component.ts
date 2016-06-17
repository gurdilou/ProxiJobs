import {Component} from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import {SearchAdvancedWidget} from './search-adv-widget.component';

import {LocationResolverService} from '../../services/location-resolver.service';

import {AdvancedSearch} from '../../model/search/advanced-search';

@Component({
  selector: 'pj-search-advanced',
  templateUrl : 'app/views/search/search-advanced.component.html',
  providers: [LocationResolverService]
})

export class SearchAdvancedComponent {
  private advSearch : AdvancedSearch;


  constructor(
    private router: Router,
    private routeParams : RouteParams,
    private locationService : LocationResolverService) {
      this.advSearch = new AdvancedSearch();
  }

  /**
   * Affecte la ville à la plus proche au champ ville
   */
  getCurrentLocation(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.locationService.getCurrentPosition().then(position => {
      this.advSearch.city = position.address;
    });
  }

}
