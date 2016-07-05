import {IJobLoader} from './job-loader.interface';
import { Http } from '@angular/http';

import {QuickSearch} from '../../model/search/quick-search';
import {JobOffer} from '../../model/jobs/job-offer';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {AdvancedSearch} from '../../model/search/advanced-search';

import {NotificationService} from '../notification.service';

export class JobLoaderRemote implements IJobLoader{

  constructor(private http: Http) {
  }

  getJobsQuick(search : QuickSearch) : Promise<JobOffer[]> {
    return new Promise<JobOffer[]>( (resolve, reject) => {
      let result : JobOffer[] =[];
      resolve(result);
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

  deleteSavedOffer(savedOffers : SavedJobOffer[], deletedOffer : SavedJobOffer) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      let found = false;
      let i = 0;
      while( (i < savedOffers.length) && !found ){
        let  offer : SavedJobOffer = savedOffers[i];

        if(offer == deletedOffer) {
          found = true;
          savedOffers.splice(i, 1);
        }
        i++;
      }
      resolve(deletedOffer);
    });
  }
  createSavedOffer(linkedJob : JobOffer) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      let result = new SavedJobOffer();
      result.job = linkedJob;

      resolve(result);
    });
  }
}
