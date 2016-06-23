import {Component, OnInit} from '@angular/core';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {JobLoaderService} from '../../services/job-loader.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'pj-offer-saved',
  templateUrl : 'app/views/offers/offer-saved-widget.component.html',
  providers: [NotificationService, JobLoaderService]
})

export class OffersSavedComponent implements OnInit {
  private savedOffer : SavedJobOffer;

  constructor(private jobService : JobLoaderService) {
  }

  private getSavedOfferLogBook() {
    this.jobService.getSavedOfferLogBook(savedOffer)
      .then(savedOffer => {
      });
  }

  ngOnInit() {
    this.getSavedOfferLogBook();
  }

}
