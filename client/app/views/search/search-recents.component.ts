import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {SearchLoaderService} from '../../services/search-loader.service';
import {SearchAdvancedWidget} from './search-adv-widget.component';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'pj-search-recents',
  templateUrl : 'app/views/search/search-recents.component.html',
  directives: [SearchAdvancedWidget],
  providers: [NotificationService, SearchLoaderService]
})

export class SearchRecentsComponent implements OnInit {
  private recents : AdvancedSearch[];
  @Output() onSelect = new EventEmitter();

  constructor(
    private searchService : SearchLoaderService) {
  }

  /**
   * Charge la liste des recherches récentes
   * @return {[type]} [description]
   */
  private getRecents() {
    this.searchService.getRecents()
      .then(searches => {
        this.recents = searches;
      });
  }

  ngOnInit() {
    this.getRecents();
  }

  /**
   * Lors de la sélection d'une recherche récente
   * @param  {AdvancedSearch} search la recherche sélectionnée
   */
  protected onSelectWidget(search : AdvancedSearch) {
    this.onSelect.emit(search);
  }

}
