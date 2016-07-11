import {IJobLoader} from './job-loader.interface';

import {QuickSearch} from '../../model/search/quick-search';
import {JobOffer} from '../../model/jobs/job-offer';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {AdvancedSearch} from '../../model/search/advanced-search';

import {NotificationService} from '../notification.service';



/**
 * Le service pour charger les offres depuis le localStorage
 */
export class JobLoaderLocal implements IJobLoader{

  constructor(private notifier: NotificationService) {
  }

  getJobsQuick(search : QuickSearch) : Promise<JobOffer[]> {
    return new Promise<JobOffer[]>( (resolve, reject) => {
      let result : JobOffer[] =[];

      // TODO recherche

      resolve(result);
    });
  }

  getJobsAdvanced(search : AdvancedSearch) : Promise<JobOffer[]> {
    return new Promise<JobOffer[]>( (resolve, reject) => {
      let result : JobOffer[] =[];

      //TODO

      resolve(result);
    });
  }

}
