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

  constructor(private jobService : JobLoaderService,
    private notifier : NotificationService) {
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
  /**
   * Lors de la suppression d'une offre sauvegardée
   * @param  {SavedJobOffer} deletedOffer l'offre supprimée
   */
  onDeleteSavedOffer(deletedOffer : SavedJobOffer) {
    this.jobService.deleteSavedOffer(this.offers, deletedOffer)
      .then( deletedoffer => {
        this.onSelect(undefined);
        this.informDeleteSucceed(deletedoffer);
      });
  }
  /**
   * Informe l'utilisateur de la suppression de la recherche sauvegardée
   * @param  {AdvancedSearch} searchDeleted la recherche supprimée
   */
  private informDeleteSucceed(deletedoffer : SavedJobOffer) {
    this.notifier.askConfirmDownload('Offre supprimée "'+deletedoffer.job.jobtitle+'"', (isCanceled) => {
      if(isCanceled) {
        this.jobService.restoreSavedOffer(this.offers, deletedoffer);
      }
    });
  }


}
