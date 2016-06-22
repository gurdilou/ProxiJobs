import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {OffersSavedComponent} from './offers-saved.component';
import {OffersLogbookComponent} from './offers-logbook.component';


@Component({
  selector: 'pj-offers-page',
  templateUrl: 'app/views/offers/offers-page.component.html',
  directives: [OffersSavedComponent, OffersLogbookComponent]
})

export class OffersPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
