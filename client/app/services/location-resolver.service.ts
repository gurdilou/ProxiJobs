import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {UserPosition} from '../model/search/user-position';
import {ErrorManagerService} from './error-manager.service';

@Injectable()
export class LocationResolverService {

  // URL to web api
  // key = AIzaSyC_u2NmSUvEwkfzMTWhqrAEqMwXC8rlPIA
  private mapApi = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

  constructor(
    private http: Http,
    private errorHandler : ErrorManagerService ) {

    }

  getCurrentPosition(): Promise<UserPosition> {
    return new Promise<UserPosition>( (resolve, reject) => {
      //Position
      this.getLongLatitude().then( position => {
        let url = this.mapApi + position.latitude + ',' + position.longitude;
        console.debug('position : '+url);

        // Addresse
        this.http.get(url).toPromise().then(response => {
            let responseJSON = response.json();
            position.address = responseJSON.results[0].formatted_address;
            resolve(position);
          }).catch(reject);

      }).catch(err => {
        this.handleError(err);
      });
    });
  }

  /**
   * Retourne une position contenant la longitude et la latitude de l'utilisateur
   * @return {Promise<UserPosition>} Objet représentant la position
   */
  private getLongLatitude() : Promise<UserPosition> {

    return new Promise<UserPosition>( (resolve, reject) => {

      navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);

      function locationSuccess(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let userPosition = new UserPosition();
        userPosition.latitude = latitude;
        userPosition.longitude = longitude;
        resolve(userPosition);
      }

      function locationFail() {
        reject(Error("Failed to find position"));
      }
    });
  }

  private handleError(error: any) {
    this.errorHandler.handle(error);
    return Promise.reject(error.message || error);
  }
}
