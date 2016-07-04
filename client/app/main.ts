// The usual bootstrapping imports
import { provide }      from '@angular/core';
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppProperties} from './model/general/app-properties';

import { MainRouter }   from './main-router.component';
import {ToasterService} from 'angular2-toaster/angular2-toaster';

$('#proxijobs-loader').remove();

bootstrap(MainRouter, [ HTTP_PROVIDERS, ToasterService, provide(AppProperties, {useClass: AppProperties}) ]);
