import {Component, OnInit, AfterContentInit} from '@angular/core';

import { RouteParams } from '@angular/router-deprecated';

import {MapJobDetailComponent} from './map-job-detail.component';

@Component({
  selector: 'pj-map',
  templateUrl : 'app/views/map/map.component.html',

})

export class MapComponent implements OnInit, AfterContentInit {
  constructor(
    private routeParams : RouteParams
  ){ }

  ngOnInit() {

  }


  ngAfterContentInit () {
    let mapCtn = document.getElementById('map');

    let map = new google.maps.Map( mapCtn, {
      center: { lat: 49.4431, lng: 1.0993 },
      zoom: 12
    });
  }


}
