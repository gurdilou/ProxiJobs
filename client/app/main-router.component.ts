import { Component, provide } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';


import { MapPageComponent } from './views/map/map-page.component';

import { SearchPageComponent } from './views/search/search-page.component';
import { OffersPageComponent } from './views/offers/offers-page.component';



@Component({
  selector: 'proxi-jobs',
  templateUrl: 'app/main-router.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  { path: 'map', name: 'MapPage', component: MapPageComponent, useAsDefault : true},
  { path: 'search', name: 'SearchPage', component: SearchPageComponent },
  { path: 'offers', name: 'OffersPage', component: OffersPageComponent }
])
export class MainRouter {
  constructor(
    private router : Router
  ) { }
}
