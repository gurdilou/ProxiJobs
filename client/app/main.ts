// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { MainRouter }   from './main-router.component';

$('#proxijobs-loader').remove();

bootstrap(MainRouter, [ HTTP_PROVIDERS ]);
