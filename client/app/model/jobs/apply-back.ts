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
}
