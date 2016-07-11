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
}
