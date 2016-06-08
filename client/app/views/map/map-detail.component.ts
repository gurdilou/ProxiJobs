import {Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import {JobOffer} from '../../model/jobs/job-offer';


import {MapQuickSearchComponent} from './map-quick-search.component';
import {MapJobDetailComponent} from './map-job-detail.component';


@Component({
  selector: 'pj-map-detail',
  templateUrl : 'app/views/map/map-detail.component.html',
  directives: [MapQuickSearchComponent]
})
export class MapDetailComponent  implements OnInit {
  offer: JobOffer;
  navigated = false; // true if navigated here

  constructor(
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('jobid') !== null) {
      let id = +this.routeParams.get('jobid');
      this.navigated = true;
      // this.jobService.getJob(id.then(offer => this.offer = offer);
    } else {
      this.navigated = false;
      this.offer = undefined;
      //TODO quick search
    }
  }
}
