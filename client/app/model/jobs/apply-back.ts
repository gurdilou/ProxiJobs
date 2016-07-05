import * as moment from 'moment';

import {ApplyResponseStatus, ApplyResponseStatusUtils} from './apply-response-status';

/**
 * Une relance à une postulation
 */
export class ApplyBack {
  /**
   * Date de la relance
   * @type {Date}
   */
  date : Date;
  /**
   * Statut à la date de la réponse
   * @type {ApplyResponseStatus}
   */
  status: ApplyResponseStatus;

  /**
   * Retourne le statut formatté
   * @return {string} le statut formatté
   */
  getFormattedStatus() : string {
    return ApplyResponseStatusUtils.getResponseStatusStr(this.status);
  }
  /**
   * Retourne la date formattée
   * @return {string} la date formattée
   */
  getFormattedDate() : string {
    if(this.date != undefined){
      return moment(this.date).format('LL');
    }
    return "";
  }

  /**
   * Créé une relance à partir d'un json
   * @param  {Object}    json le json parsé
   * @return {ApplyBack}      une nouvelle relance
   */
  static parseJSON(json : Object) : ApplyBack {
    let result = new ApplyBack();

    for (let property in json) {
      if( result.hasOwnProperty(property) ) {
        //Affectation des champs spéciaux
        switch(property) {
          default: result[property] = json[property];
        }
      }
    }
    return result;
  }
}
