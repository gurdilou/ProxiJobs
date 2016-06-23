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
}
