import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {UserPosition} from '../model/search/user-position';


@Injectable()
export class LocationResolverService {

  // URL to web api
  // key = AIzaSyC_u2NmSUvEwkfzMTWhqrAEqMwXC8rlPIA
  private mapApi = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

  constructor(private http: Http) { }

  getCurrentPosition(): Promise<UserPosition> {

    // navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
    // function locationSuccess(position) {
    //   let latitude = position.coords.latitude;
    //   let longitude = position.coords.longitude;
    //   console.log('latitude : '+latitude+'; longitude'+longitude);
    // }
    //
    // function locationFail() {
    //   console.log("Failed to find current position.");
    // }
    //
    //
    // let url = this.mapApi
    // return this.http.get(this.heroesUrl)
    //            .toPromise()
    //            .then(response => response.json().data)
    //            .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
