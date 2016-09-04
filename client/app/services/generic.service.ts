import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import {NotificationService} from './notification.service';

@Injectable()
export class GenericService {

  constructor(
    private httpService: Http,
    private notifierService : NotificationService) {
  }

  /**
   * Gère les erreurs retournées par le serveur
   * @param  {any}     json la réponse du serveur
   * @return {boolean}      retourne vrai s'il y a une erreur dans la réponse
   */
  public handleServerError(response : any) : boolean{
    if( (response instanceof Object) && (response.json().hasOwnProperty("error")) ){
      let json = response.json();
      if(json.hasOwnProperty("message")) {
        this.notifierService.errror(json["message"]);
      }else{
        this.notifierService.errror(json["error"]);
      }

      return true;
    }

    return false;
  }

  public postJson(url : string, data : any) : Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let body = JSON.stringify(data);
      let head = new Headers({
          'Content-Type': 'application/json'
      });
      this.httpService.post(url, body, { headers : head})
        .toPromise()
        .then(response => {
          if(!this.handleServerError(response)){
            resolve(response);
          }
        })
        .catch(err => {
          this.notifierService.errror(err);
        });
    });
  }

}
