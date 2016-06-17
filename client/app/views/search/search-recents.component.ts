import {Component, OnInit} from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {SearchLoaderService} from '../../services/search-loader.service';
import {SearchAdvancedWidget} from './search-adv-widget.component';


@Component({
  selector: 'pj-search-recents',
  templateUrl : 'app/views/search/search-recents.component.html',
  directives: [SearchAdvancedWidget],
  providers: [SearchLoaderService]
})

export class SearchRecentsComponent implements OnInit {
  recents : AdvancedSearch[];

  constructor(
    private searchService : SearchLoaderService) {
  }

  getRecents() {
    this.searchService.getRecents()
      .then(searches => {
        this.recents = searches;
      });
  }

  ngOnInit() {
    this.getRecents();
  }
}
