import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';

import {JobLoaderService} from '../../services/job-loader.service';
import {NotificationService} from '../../services/notification.service';

import {OfferSavedWidgetComponent} from './offer-saved-widget.component';

@Component({
  selector: 'pj-offers-saved',
  templateUrl : 'app/views/offers/offers-saved.component.html',
  directives: [OfferSavedWidgetComponent],
  providers: [NotificationService, JobLoaderService]
})

export class OffersSavedComponent implements OnInit {
  private offers : SavedJobOffer[] = [];
  private selectedOffer : SavedJobOffer;
  @Output() onOfferSelect = new EventEmitter();

  constructor(private jobService : JobLoaderService) {
  }

  private getSavedOffers() {
    this.jobService.getSavedOffers()
      .then(offers => {
        this.offers = offers;
      });
  }

  ngOnInit() {
    this.getSavedOffers();
  }

  /**
   * Lors de la sélection d'un item
   * @return {[type]} [description]
   */
  onSelect(selectedOffer : SavedJobOffer) {
    this.selectedOffer = selectedOffer;
    this.onOfferSelect.emit(selectedOffer);
  }

}
