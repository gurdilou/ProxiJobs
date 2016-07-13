import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {JobOffer} from '../../model/jobs/job-offer';

import {MapComponent} from './map.component';
import {MapDetailComponent} from './map-detail.component';

@Component({
  selector: 'pj-map-page',
  templateUrl: 'app/views/map/map-page.component.html',
  directives: [MapComponent, MapDetailComponent]
})

export class MapPageComponent implements OnInit {
  @ViewChild(MapComponent) map:MapComponent;


  constructor(private router: Router) {
  }

  ngOnInit() {

  }
  /**
   * Lorsque l'utilisateur veut centrer la map
   */
  centerMap(center : google.maps.LatLng) {
    this.map.setHomeOn(center);
  }
  /**
   * Lors du résultat d'une recherche d'offre
   * @param  {JobOffer[]} offers [description]
   * @return {[type]}            [description]
   */
  searchJobs(offers : JobOffer[]){
    this.map.displayOffers(offers);
  }
}
