import { Component, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';

import {User} from './model/general/user';

import {NotificationComponent} from './views/notification.component';
import { MapPageComponent } from './views/map/map-page.component';
import { SearchPageComponent } from './views/search/search-page.component';
import { OffersPageComponent } from './views/offers/offers-page.component';


@Component({
  selector: 'proxi-jobs',
  templateUrl: 'app/main-router.component.html',
  directives: [ROUTER_DIRECTIVES, NotificationComponent],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/map/', name: 'MapPage', component: MapPageComponent, useAsDefault: true },
  { path: '/search', name: 'SearchPage', component: SearchPageComponent },
  { path: '/offers', name: 'OffersPage', component: OffersPageComponent }
])
export class MainRouter {
  private user : User = new User();

  constructor(
    private router: Router
  ) { }
}
