import {Component, OnInit, AfterContentInit, Input, EventEmitter} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import {JobOffer} from '../../model/jobs/job-offer';

import {MapJobDetailComponent} from './map-job-detail.component';

const MARKER_PATH   = 'images/markers/';
const ICON_HOME     = MARKER_PATH+'marker_home.png'
const ICON_JOB      = MARKER_PATH+'marker_job.png'

@Component({
  selector: 'pj-map',
  templateUrl : 'app/views/map/map.component.html',

})

export class MapComponent implements OnInit, AfterContentInit {
  private map : google.maps.Map;
  private home : google.maps.Marker;


  constructor(
    private routeParams : RouteParams
  ){ }

  ngOnInit() {

  }

  ngAfterContentInit () {
    let mapCtn = document.getElementById('map');

    this.map = new google.maps.Map( mapCtn, {
      center: { lat: 49.4431, lng: 1.0993 },
      zoom: 12
    });
  }

  /**
   * Change le lieu de résidence
   * @param  {google.maps.LatLng} la position donnée
   */
  setHomeOn(center : google.maps.LatLng) {
    this.map.panTo(center);

    if(this.home){
      this.home.setMap(null);
    }
    this.home = new google.maps.Marker({
      position: center,
      map: this.map,
      icon: ICON_HOME
    });
  }
  /**
   * Affiche et gère une liste d'offre
   * @param  {JobOffer[]} offers la liste des offres à afficher
   */
  displayOffers(offers : JobOffer[]) {
    for(let i = 0; i < offers.length; i++) {
      let offer = offers[i];

      let position = new google.maps.LatLng(offer.latitude, offer.longitude);


      let jobMarker = new google.maps.Marker({
        position: position,
        map: this.map,
        icon: ICON_JOB
      });
    }
  }


}
