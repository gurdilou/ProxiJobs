import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {routing, appRoutingProviders }  from './app.routes';
import {AppProperties} from './model/general/app-properties';
import {NotificationComponent} from './views/notification.component';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import {AppComponent}   from './app.component';

import {MapPageComponent} from './views/map/map-page.component';
import {MapComponent} from './views/map/map.component';
import {MapDetailComponent} from './views/map/map-detail.component';
import {MapQuickSearchComponent} from './views/map/map-quick-search.component';
import {MapJobDetailComponent} from './views/map/map-job-detail.component';


import {SearchPageComponent} from './views/search/search-page.component';
import {SearchAdvancedWidget} from './views/search/search-adv-widget.component';
import {SearchFavoritesComponent} from './views/search/search-favorites.component';
import {SearchRecentsComponent} from './views/search/search-recents.component';
import {SearchAdvancedComponent} from './views/search/search-advanced.component';


import {OffersPageComponent} from './views/offers/offers-page.component';
import {OfferApplyBackWidgetComponent} from './views/offers/offer-back-widget.component';
import {OffersSavedComponent} from './views/offers/offers-saved.component';
import {OffersLogbookComponent} from './views/offers/offers-logbook.component';
import {OfferSavedWidgetComponent} from './views/offers/offer-saved-widget.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ToasterModule
  ],
  declarations: [
    AppComponent,
    //various
    NotificationComponent,
    //amp
    MapPageComponent,
    MapComponent,
    MapDetailComponent,
    MapQuickSearchComponent,
    MapJobDetailComponent,
    //search
    SearchPageComponent,
    SearchAdvancedWidget,
    SearchFavoritesComponent,
    SearchRecentsComponent,
    SearchAdvancedComponent,
    //offers
    OffersPageComponent,
    OfferApplyBackWidgetComponent,
    OffersSavedComponent,
    OffersLogbookComponent,
    OfferSavedWidgetComponent
  ],
  providers: [
    appRoutingProviders,
    {provide : AppProperties, useClass : AppProperties},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
