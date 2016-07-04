import { Component, ViewChild, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';
import * as moment from 'moment';
import 'moment/locale/fr';

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
export class MainRouter implements OnInit {
  private user : User = new User();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    moment.locale('fr');
  }
}
