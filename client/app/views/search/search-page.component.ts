import {Component} from '@angular/core';
import { Router } from '@angular/router-deprecated';



@Component({
  selector: 'pj-search-page',
  templateUrl : 'app/views/search/search-page.component.html'
})

export class SearchPageComponent {
  constructor(private router: Router) {
  }
}
