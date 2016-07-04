import {JobOffer} from './job-offer';
import {LogBook} from './log-book';

/**
 * L'offre sauvegardée
 */
export class SavedJobOffer {
  /**
   * L'id de l'offre sauvegardée
   * @type {number}
   */
  id: string;
  /**
   * L'offre liée
   * @type {JobOffer}
   */
  job : JobOffer;
  /**
   * le journal de bord lié
   * @type {LogBook}
   */
  logbook : LogBook = new LogBook();
}
