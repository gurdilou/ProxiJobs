import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';

import {LogbookEditorService} from '../../services/logbook-editor.service';
import {NotificationService} from '../../services/notification.service';

import {OfferSavedWidgetComponent} from './offer-saved-widget.component';

@Component({
  selector: 'pj-offers-saved',
  templateUrl : 'app/views/offers/offers-saved.component.html',
  directives: [OfferSavedWidgetComponent],
  providers: [NotificationService, LogbookEditorService]
})

export class OffersSavedComponent implements OnInit {
  private offers : SavedJobOffer[] = [];
  private selectedOffer : SavedJobOffer;
  @Output() onOfferSelect = new EventEmitter();
  @Output() onOfferDelete = new EventEmitter();

  constructor(private logbookService : LogbookEditorService,
    private notifier : NotificationService) {
  }

  private getSavedOffers() {
    this.logbookService.getSavedOffers()
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
    console.log("onSelect");
    this.selectedOffer = selectedOffer;
    this.onOfferSelect.emit(selectedOffer);
  }
  /**
   * Lors de la suppression d'une offre sauvegardée
   * @param  {SavedJobOffer} deletedOffer l'offre supprimée
   */
  onDeleteSavedOffer(deletedOffer : SavedJobOffer) {
    this.logbookService.deleteSavedOffer(this.offers, deletedOffer)
      .then( deletedoffer => {
        this.onOfferDelete.emit(undefined);
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
        this.logbookService.restoreSavedOffer(this.offers, deletedoffer);
      }
    });
  }


}
