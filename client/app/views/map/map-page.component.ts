import {Component, OnInit, ViewChild} from '@angular/core';
import * as Collections from 'typescript-collections';

import {JobOffer} from '../../model/jobs/job-offer';

import {MapComponent} from './map.component';
import {MapDetailComponent} from './map-detail.component';

@Component({
  selector: 'pj-map-page',
  templateUrl: 'app/views/map/map-page.component.html',
})

export class MapPageComponent implements OnInit {
  @ViewChild(MapComponent) map:MapComponent;
  @ViewChild(MapDetailComponent) details:MapDetailComponent;

  constructor() {
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
   * @param  {Collections.LinkedList<JobOffer>} offers les offres trouvées
   */
  searchJobs(offers : Collections.LinkedList<JobOffer>){
    this.map.displayOffers(offers);
  }

  /**
   * Lors de la sélection d'une ou plusieurs offres sur la carte
   * @param  {Collections.LinkedList<JobOffer>} offers les offres à afficher
   */
  displayOffers(offers : Collections.LinkedList<JobOffer>){
    this.details.displayOffers(offers);
  }
}
