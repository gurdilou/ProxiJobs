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
  @Output() onRefresh = new EventEmitter();
  _offers: Collections.LinkedList<JobOffer>;



  constructor() {
  }

  ngOnInit() {

  }

  @Input()
  set offers(offers: Collections.LinkedList<JobOffer>) {
    console.log("onChange");
    this._offers = offers;
    console.log("offers : "+this._offers.size());
  }

  /**
   * Lorsque l'on réduit la fenêtre de recherche
   */
  onReduce() {
    this.onJobPopupClose.emit(undefined);
  }

}
