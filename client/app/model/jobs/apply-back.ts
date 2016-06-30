import {ApplyResponseStatus} from './apply-response-status';

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
}
