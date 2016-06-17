import {Component,Input} from '@angular/core';

import {AdvancedSearch} from '../../model/search/advanced-search';



@Component({
  selector: 'pj-search-adv-widget',
  templateUrl : 'app/views/search/search-adv-widget.component.html'
})

export class SearchAdvancedWidget {
  @Input() search: AdvancedSearch;
  @Input() deletable : boolean = false;

  constructor() {
  }
}
