import {Component, OnInit} from '@angular/core';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {JobLoaderService} from '../../services/job-loader.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'pj-offers-saved',
  templateUrl : 'app/views/offers/offers-saved.component.html',
  providers: [NotificationService, JobLoaderService]
})

export class OffersSavedComponent implements OnInit {
  private offers : SavedJobOffer[] = [];

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

}
