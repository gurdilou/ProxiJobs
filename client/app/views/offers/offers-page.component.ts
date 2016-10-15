import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';

import {OffersLogbookComponent} from './offers-logbook.component';


@Component({
  selector: 'pj-offers-page',
  templateUrl: 'app/views/offers/offers-page.component.html',
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
  /**
   * Lors de la suppression de l'offre sélectionnée
   * @return {[type]} [description]
   */
  onOfferDelete() {
    this.logbookPanel.offerDeleted();
  }
}
