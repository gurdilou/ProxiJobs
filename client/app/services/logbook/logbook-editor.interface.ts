import {LogBook} from '../../model/jobs/log-book';
import {ApplyBack} from '../../model/jobs/apply-back';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {JobOffer} from '../../model/jobs/job-offer';

/**
 * Interface commune pour gérer la persistance des offres
 */
export interface ILogbookEditor {
  /**
   * Charge la lise des offres sauvegardées
   * @return {Promise<SavedJobOffer[]>} la liste des offres sauvegardées
   */
  getSavedOffers() : Promise<SavedJobOffer[]>;

  /**
   * Charge le journal d'une offre sauvegardée
   * @param  {SavedJobOffer}          offer l'offre sauvegardée
   * @return {Promise<SavedJobOffer>}       le journal de bord de l'offre sauvegardée
   */
  getSavedOfferLogBook(offer : SavedJobOffer) : Promise<SavedJobOffer>;

  /**
   * Supprime une offre sauvegardée
   * @param  {SavedJobOffer[]}        savedOffers la liste des offres
   * @param  {SavedJobOffer}          deletedOffer l'offre supprimée
   * @return {Promise<SavedJobOffer>}             l'offre qui vient d'être supprimée
   */
  deleteSavedOffer(savedOffers : SavedJobOffer[], deletedOffer : SavedJobOffer) : Promise<SavedJobOffer>;

  /**
   * Créé une offre sauvegardée
   * @param  {JobOffer}               linkedJob le job sélectionnée
   * @return {Promise<SavedJobOffer>}           l'offre qui vient d'être créée
   */
  createSavedOffer(linkedJob : JobOffer) : Promise<SavedJobOffer>;

  /**
   * Restaure une offre sauvegardée (lui donne un nouvel id)
   * @param  {SavedJobOffer[]}          savedOffers   les offres actuelles
   * @param  {SavedJobOffer}            restoredOffer l'offre restaurée
   * @return {Promise<SavedJobOffer[]>}               les offres mises à jours
   */
  restoreSavedOffer(savedOffers : SavedJobOffer[], restoredOffer : SavedJobOffer) : Promise<SavedJobOffer[]>;
  
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
