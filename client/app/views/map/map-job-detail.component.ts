import {Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import {JobOffer} from '../../model/jobs/job-offer';
import {MapDetailComponent} from './map-detail.component';



@Component({
  selector: 'pj-map-job-selected',
  templateUrl : 'app/views/map/map-job-detail.component.html'
})
export class MapJobDetailComponent  implements OnInit {
  offer: JobOffer;
  navigated = false; // true if navigated here

  constructor(
    private detailParent: MapDetailComponent,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    this.offer = this.detailParent.offer;

    if (this.routeParams.get('jobid') !== null) {
      let id = +this.routeParams.get('jobid');
      this.navigated = true;
    } else {
      this.navigated = false;
    }
  }

}
