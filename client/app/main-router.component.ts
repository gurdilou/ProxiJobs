import { Component, provide } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';
import {ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster/angular2-toaster';

import { MapPageComponent } from './views/map/map-page.component';
import { SearchPageComponent } from './views/search/search-page.component';
import { OffersPageComponent } from './views/offers/offers-page.component';

import {ErrorManagerService} from './services/error-manager.service';



@Component({
  selector: 'proxi-jobs',
  templateUrl: 'app/main-router.component.html',
  directives: [ROUTER_DIRECTIVES, ToasterContainerComponent],
  providers: [ROUTER_PROVIDERS, ErrorManagerService, ToasterService]
})
@RouteConfig([
  { path: '/map/', name: 'MapPage', component: MapPageComponent, useAsDefault: true },
  { path: '/search', name: 'SearchPage', component: SearchPageComponent },
  { path: '/offers', name: 'OffersPage', component: OffersPageComponent }
])
export class MainRouter {
  constructor(
    private router: Router
  ) { }

  /**
   * [toasterconfig description]
   * @type {ToasterConfig}
   */
  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    showCloseButton: true,
    newestOnTop: true,
    positionClass: "toast-bottom-right",
    preventDuplicates: true,
    timeout: 3000
  });

}
