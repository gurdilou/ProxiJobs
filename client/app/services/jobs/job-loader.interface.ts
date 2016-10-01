import {QuickSearch} from '../../model/search/quick-search';
import {AdvancedSearch} from '../../model/search/advanced-search';
import {JobOffer} from '../../model/jobs/job-offer';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import * as Collections from 'typescript-collections';

/**
 * Interface commune pour gérer la persistance des offres
 */
export interface IJobLoader {
  /**
   * Retourne le résultat d'une recherche rapide
   * @param  {QuickSearch} search la recherche rapide
   * @return {Promise<Collections.LinkedList<JobOffer>>}             la liste des offres qui répondent aux critères
   */
  getJobsQuick(search : QuickSearch) : Promise<Collections.LinkedList<JobOffer>>;

  /**
   * Retourne le résultat d'une recherche avancée
   * @param  {AdvancedSearch} search la recherche avancée
   * @return {Promise<Collections.LinkedList<JobOffer>>}             la liste des offres qui répondent aux critères
   */
  getJobsAdvanced(search : AdvancedSearch) : Promise<Collections.LinkedList<JobOffer>>;
}
