import {Component, OnInit, Input} from '@angular/core';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {JobLoaderService} from '../../services/job-loader.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'pj-offer-saved',
  templateUrl : 'app/views/offers/offer-saved-widget.component.html',
  providers: [NotificationService, JobLoaderService]
})

export class OfferSavedWidgetComponent implements OnInit {
  @Input() savedOffer : SavedJobOffer;
  private id : number;
  static global_counter : number = 0;

  constructor(private jobService : JobLoaderService) {
    this.id = OfferSavedWidgetComponent.global_counter;
    OfferSavedWidgetComponent.global_counter++;
  }

  private getSavedOfferLogBook() {
    this.jobService.getSavedOfferLogBook(this.savedOffer)
      .then(savedOffer => {
      });
  }

  ngOnInit() {
  }
  /**
   * Lors de la sélection de l'offre
   */
  protected onSelect(){
    this.getSavedOfferLogBook();
  }

  /**
   * Lorsque l'utilisateur veut voir tout le descriptif d'une offre
   */
  protected onExpandDesc(event : any) {
    event.preventDefault();
    event.stopPropagation();
    $('.ui.long.modal.'+this.id)
      .modal({
        blurring: true
      })
      .modal('setting', 'transition', 'vertical flip')
      .modal('show');
  }


}
