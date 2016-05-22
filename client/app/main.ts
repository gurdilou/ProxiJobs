import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';


var map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8 
});
$("#proxijobs-loader").remove();

// bootstrap(AppComponent);       



