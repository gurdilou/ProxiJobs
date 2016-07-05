import {QuickSearch} from '../../model/search/quick-search';
import {AdvancedSearch} from '../../model/search/advanced-search';
import {JobOffer} from '../../model/jobs/job-offer';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';

/**
 * Interface commune pour gérer la persistance des offres
 */
export interface IJobLoader {
  /**
   * Retourne le résultat d'une recherche rapide
   * @param  {QuickSearch} search la recherche rapide
   * @return {Promise<JobOffer[]>}             la liste des offres qui répondent aux critères
   */
  getJobsQuick(search : QuickSearch) : Promise<JobOffer[]>;

  /**
   * Retourne le résultat d'une recherche avancée
   * @param  {AdvancedSearch} search la recherche avancée
   * @return {Promise<JobOffer[]>}             la liste des offres qui répondent aux critères
   */
  getJobsAdvanced(search : AdvancedSearch) : Promise<JobOffer[]>;

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
}
