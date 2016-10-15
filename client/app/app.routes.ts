import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPageComponent } from './views/map/map-page.component';
import { SearchPageComponent } from './views/search/search-page.component';
import { OffersPageComponent } from './views/offers/offers-page.component';

const appRoutes: Routes = [
  { path: '', component: MapPageComponent },
  { path: 'map', component: MapPageComponent},
  { path: 'search', component: SearchPageComponent },
  { path: 'offers', component: OffersPageComponent }
];


export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
