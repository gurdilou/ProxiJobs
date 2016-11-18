import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import * as Collections from 'typescript-collections';

import {JobOffer} from '../../model/jobs/job-offer';
import {MapDetailComponent} from './map-detail.component';



@Component({
  selector: 'pj-map-job-selected',
  templateUrl : 'app/views/map/map-job-detail.component.html'
})
export class MapJobDetailComponent  implements OnInit {
  @Output() onJobPopupClose = new EventEmitter();

  _offers: JobOffer[];

  private selectedOffer : JobOffer = null;
  private selectedIndex : number = 0;



  constructor() {
  }

  ngOnInit() {

  }

  @Input()
  set offers(offers : JobOffer[]) {
    this._offers = offers;
    this.selectedOffer = null;
    this.selectedIndex = 0;
    if(offers.length > 0) {
      this.selectedOffer = offers[0];
    }
  }
  get offers() : JobOffer[] {
    return this._offers;
  }

  /**
   * Lorsque l'on réduit la fenêtre de recherche
   */
  onReduce() {
    this.onJobPopupClose.emit(undefined);
  }

  /**
   * Lorsque l'utilisateur veut voir tout le descriptif d'une offre
   */
  protected onExpandDesc(event : any) {
    event.preventDefault();
    event.stopPropagation();
    $('.ui.long.modal.offer-desc-long')
      .modal({
        blurring: true
      })
      .modal('setting', 'transition', 'vertical flip')
      .modal('show');
  }

  onPreviousOffer() {
    if(this.selectedIndex > 0) {
      let self = this;
      let offerContent = $('.offer-body');
      offerContent.transition({
        animation: 'fade right',
        duration: 100,
      }).transition({
        animation: 'fade left',
        duration: 25,
        onComplete : function() {
          self.selectedIndex--;
          self.selectedOffer = self.offers[self.selectedIndex];
          offerContent.removeClass("visible");
        }
      });
    }

  }
  onNextOffer() {
    if(this.selectedIndex < this.offers.length) {
      let self = this;
      let offerContent = $('.offer-body');
      offerContent.transition({
        animation: 'fade left',
        duration: 100,
      }).transition({
        animation: 'fade right',
        duration: 25,
        onComplete : function() {
          self.selectedIndex++;
          self.selectedOffer = self.offers[self.selectedIndex];
          offerContent.removeClass("visible");
        }
      });

    }
  }

}
