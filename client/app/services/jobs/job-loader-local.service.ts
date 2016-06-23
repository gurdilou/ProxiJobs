import {IJobLoader} from './job-loader.interface';

import {QuickSearch} from '../../model/search/quick-search';
import {JobOffer} from '../../model/jobs/job-offer';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {AdvancedSearch} from '../../model/search/advanced-search';

import {NotificationService} from '../notification.service';

export class JobLoaderLocal implements IJobLoader{

  getJobsQuick(search : QuickSearch) : Promise<JobOffer[]> {
    return new Promise<JobOffer[]>( (resolve, reject) => {
      let result : JobOffer[] =[];

      // TODO recherche
      // + ajouter champ si search is AdvancedSearch

      resolve(result);
      // reject(Error("Failed to find position"));
    });
  }

  getJobsAdvanced(search : AdvancedSearch) : Promise<JobOffer[]> {
    return new Promise<JobOffer[]>( (resolve, reject) => {
      let result : JobOffer[] =[];
      resolve(result);
    });
  }

  getSavedOffers() : Promise<SavedJobOffer[]> {
    return new Promise<SavedJobOffer[]>( (resolve, reject) => {
      let result : SavedJobOffer[] =[];
      resolve(result);
    });
  }

  getSavedOfferLogBook(offer : SavedJobOffer) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      let result = new SavedJobOffer();
      resolve(result);
    });
  }

}
