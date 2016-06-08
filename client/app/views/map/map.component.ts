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
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }


}
