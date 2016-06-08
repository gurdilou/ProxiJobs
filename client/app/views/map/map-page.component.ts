import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {MapComponent} from './map.component';
import {MapDetailComponent} from './map-detail.component';

@Component({
  selector: 'pj-map-page',
  templateUrl: 'app/views/map/map-page.component.html',
  directives: [MapComponent, MapDetailComponent]
})

export class MapPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
