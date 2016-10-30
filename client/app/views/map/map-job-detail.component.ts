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

}
