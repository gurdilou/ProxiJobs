import {Component} from '@angular/core';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {LogBook} from '../../model/jobs/log-book';

@Component({
  selector: 'pj-offers-logbook',
  templateUrl : 'app/views/offers/offers-logbook.component.html'
})

export class OffersLogbookComponent {
  private logbook : LogBook;

  constructor() {
  }

  /**
   * Affiche une offre
   * @param  {SavedJobOffer} offer [description]
   * @return {[type]}              [description]
   */
  display(offer : SavedJobOffer) {
    this.logbook = offer.logbook;
  }

}
