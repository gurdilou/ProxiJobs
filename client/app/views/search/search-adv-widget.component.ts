import {Component,Input, Output, EventEmitter} from '@angular/core';

import {AdvancedSearch} from '../../model/search/advanced-search';



@Component({
  selector: 'pj-search-adv-widget',
  templateUrl : 'app/views/search/search-adv-widget.component.html'
})

export class SearchAdvancedWidget {
  @Input() search: AdvancedSearch;
  @Input() deletable : boolean = false;
  @Output() onDeleteClick = new EventEmitter();

  constructor() {
  }

  /**
   * Lorsque l'utilisateur clique sur le bouton supprimer
   */
  protected onButtDeleteClick() {
    this.onDeleteClick.emit(this.search);
  }
}
