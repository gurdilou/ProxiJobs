import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {UserPosition} from '../model/search/user-position';

import {NotificationService} from './notification.service';

@Injectable()
export class LocationResolverService {

  // URL to web api
  // key = AIzaSyC_u2NmSUvEwkfzMTWhqrAEqMwXC8rlPIA
  private mapApi = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

  constructor(
    private http: Http,
    private notifier: NotificationService) {

  }

  /**
   * Retourne la position actuelle
   * @return {Promise<UserPosition>} la position actuelle
   */
  getCurrentPosition(): Promise<UserPosition> {
    return new Promise<UserPosition>( (resolve, reject) => {
      //Position
      this.getLongLatitude().then( position => {
        let url = this.mapApi + position.latitude + ',' + position.longitude;


        // Addresse
        this.http.get(url).toPromise().then(response => {
          let responseJSON = response.json();
          // console.log(JSON.stringify(responseJSON));

          position.address = responseJSON.results[0].formatted_address;
          position.city = responseJSON.results[0].address_components[1].long_name;
          position.country = responseJSON.results[0].address_components[4].long_name;
          position.cityLong = responseJSON.results[2].formatted_address;
          position.countryCode = responseJSON.results[0].address_components[4].short_name;

          console.debug('position : '+url);

          resolve(position);
        }).catch(err => {
          this.notifier.errror(err);
        });

      }).catch(err => {
        this.notifier.errror(err);
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
}
