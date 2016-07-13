import { Injectable }    from '@angular/core';

import {NotificationService} from './notification.service';

@Injectable()
export class GenericService {

  constructor(
    private notifierService : NotificationService) {
  }

  /**
   * Gère les erreurs retournées par le serveur
   * @param  {any}     json la réponse du serveur
   * @return {boolean}      retourne vrai s'il y a une erreur dans la réponse
   */
  public handleServerError(json : any) : boolean{
    if( (json instanceof Object) && (json.hasOwnProperty("error")) ){
      if(json.hasOwnProperty("message")) {
        this.notifierService.errror(json["message"]);
      }else{
        this.notifierService.errror(json["error"]);
      }

      return true;
    }

    return false;
  }

}
