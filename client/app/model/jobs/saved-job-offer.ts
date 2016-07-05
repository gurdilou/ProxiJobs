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

  /**
   * Parse un json et créé une SavedJobOffer
   * @param  {Object}        json le json parsé
   * @return {SavedJobOffer}      une nouvelle SavedJobOffer
   */
  static parseJSON(json : Object) : SavedJobOffer {
    let result = new SavedJobOffer();

    if(json.hasOwnProperty("id")) {
      result.id = json["id"];
    }
    if(json.hasOwnProperty("job")) {
      result.job = JobOffer.parseJSON(json["job"]);
    }
    if(json.hasOwnProperty("logbook")) {
      result.logbook = LogBook.parseJSON(json["logbook"]);
    }

    return result;
  }

  /**
   * Trie les offres par date de sauvegarde par ordre d'ajout
   * @param  {SavedJobOffer[]} savedOffers les offres
   */
  static refreshOffersOrder(savedOffers : SavedJobOffer[]) {
    function compare(a : SavedJobOffer, b : SavedJobOffer) {
      if (a.logbook.savedDate > b.logbook.savedDate) {
         return -1;
      }
      if (a.logbook.savedDate < b.logbook.savedDate) {
         return 1;
      }
      return 0;
    }

    savedOffers.sort(compare);
  }

}
