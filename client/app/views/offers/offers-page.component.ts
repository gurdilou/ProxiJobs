import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';

import {OffersSavedComponent} from './offers-saved.component';
import {OffersLogbookComponent} from './offers-logbook.component';


@Component({
  selector: 'pj-offers-page',
  templateUrl: 'app/views/offers/offers-page.component.html',
  directives: [OffersSavedComponent, OffersLogbookComponent]
})

export class OffersPageComponent implements OnInit {
  @ViewChild(OffersLogbookComponent) logbookPanel: OffersLogbookComponent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Lors de la sélection d'une offre dans le composant des offres sauvegardées
   * @param  {SavedJobOffer} offerSelected l'offre sélectionnée
   */
  onOfferSelect(offerSelected : SavedJobOffer) {
    this.logbookPanel.display(offerSelected);
  }
}
