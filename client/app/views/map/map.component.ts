import {Component, OnInit, AfterContentInit, Input, Output, EventEmitter} from '@angular/core';
import * as Collections from 'typescript-collections';

import {JobOffer} from '../../model/jobs/job-offer';
import {CoupleMarkerOffers} from './couple-marker-offers';

import {MapJobDetailComponent} from './map-job-detail.component';

const MARKER_PATH   = 'images/markers/';
const ICON_HOME     = MARKER_PATH+'marker_home.png'
const ICON_JOB      = MARKER_PATH+'marker_job.png'

@Component({
  selector: 'pj-map',
  templateUrl : 'app/views/map/map.component.html',

})

export class MapComponent implements OnInit, AfterContentInit {
  @Output() onSelectOffers = new EventEmitter();

  private map : google.maps.Map;
  private home : google.maps.Marker;
  private markers = new Collections.Dictionary<google.maps.LatLng, CoupleMarkerOffers>();

  // TODO gérer les offres sauvegardées
  constructor(){ }

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
   * @param  {Collections.LinkedList<JobOffer>} offers la liste des offres à afficher
   */
  displayOffers(offers : Collections.LinkedList<JobOffer>) {
    this.cleanOffers();
    let bounds = this.map.getBounds();


    for(let i = 0; i < offers.size(); i++) {
      let offer = offers.elementAtIndex(i);

      let position = new google.maps.LatLng(offer.latitude, offer.longitude);

      //Si le container a déjà une offre sur le marker, va ajouter cette offre à la liste
      if(!this.markers.containsKey(position)){
        this.addMarkerToMap(offer, position);
        bounds.extend(position);
      }else{
        this.editMarker(offer, position);
      }
    }

    this.map.fitBounds(bounds);
  }

  private cleanOffers() {
    let markers : CoupleMarkerOffers[] = this.markers.values();
    for (let i = 0; i < markers.length; i++) {
      let marker : google.maps.Marker = markers[i].marker;
      marker.setMap(null);
    }
    this.markers.clear();
  }

  private addMarkerToMap(offer : JobOffer, position : google.maps.LatLng) {
    let jobMarker = new google.maps.Marker({
      position: position,
      map: this.map,
      icon: ICON_JOB,
      title: offer.jobtitle
    });
    let newCouple = new CoupleMarkerOffers();
    newCouple.marker = jobMarker;
    newCouple.offers.add(offer);
    var self = this;
    jobMarker.addListener('click', function() {
        let couple = self.markers.getValue(jobMarker.getPosition());
        if(couple) {
          self.onSelectOffers.emit(couple.offers);
        }
      });

    this.markers.setValue(position, newCouple);
  }
  private editMarker(offer : JobOffer, position : google.maps.LatLng) {
    let couple = this.markers.getValue(position);
    couple.offers.add(offer);

    couple.marker.setTitle(couple.offers.size()+" offres");
  }
}
