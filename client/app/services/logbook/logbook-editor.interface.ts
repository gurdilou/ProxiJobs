import {LogBook} from '../../model/jobs/log-book';
import {ApplyBack} from '../../model/jobs/apply-back';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';

/**
 * Interface commune pour gérer la persistance des offres
 */
export interface ILogbookEditor {

  /**
   * Ajoute une relance au journal de bord donné à l'index donné
   * @param  {SavedJobOffer}         savedOffer   l'offre sauvegardée
   * @param  {ApplyBack}          newApplyBack la nouvelle relance
   * @return {Promise<SavedJobOffer>}              l'offre sauvegardée contenant la nouvelle relance
   */
  addApplyBack(savedOffer : SavedJobOffer, newApplyBack : ApplyBack ) : Promise<SavedJobOffer>;

  /**
   * Supprime une relance
   * @param  {SavedJobOffer}          savedOffer     l'offre visée
   * @param  {number}                 indexApplyBack l'index de la relance
   * @return {Promise<SavedJobOffer>}                l'offre avec la relance en moins
   */
  deleteApplyBack(savedOffer : SavedJobOffer, indexApplyBack : number) : Promise<SavedJobOffer>;

  /**
   * Met à jour l'offre sauvegardée dans le stockage
   * @param  {SavedJobOffer}          savedOffer l'offre sauvegardée modifiée
   * @return {Promise<SavedJobOffer>}            L'offre modfiée
   */
  saveLogbook(savedOffer : SavedJobOffer): Promise<SavedJobOffer>;

}
