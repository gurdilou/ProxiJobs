import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';



@Component({
  selector: 'pj-offers-page',
  templateUrl: 'app/views/offers/offers-page.component.html'
})

export class OffersPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
