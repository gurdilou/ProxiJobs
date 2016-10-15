import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';
import 'moment/locale/fr';

import {ToasterService} from 'angular2-toaster/angular2-toaster';
import {User} from './model/general/user';



@Component({
  moduleId: module.id,
  selector: 'proxi-jobs',
  templateUrl: '/app/app.component.html',
})

export class AppComponent implements OnInit {
  private user : User = new User();

  constructor(
    private router: Router,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    moment.locale('fr');
    $('#proxijobs-loader').remove();

  }
}
