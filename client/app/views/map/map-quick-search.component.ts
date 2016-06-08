import {Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';



@Component({
  selector: 'pj-map-quick-search',
  templateUrl : 'app/views/map/map-quick-search.component.html'
})
export class MapQuickSearchComponent  implements OnInit {

  constructor(
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    // TODO extract filtre
  }

}
