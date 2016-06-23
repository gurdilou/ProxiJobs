import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import {QuickSearch} from '../model/search/quick-search';
import {AdvancedSearch} from '../model/search/advanced-search';
import {JobOffer} from '../model/jobs/job-offer';
import {SavedJobOffer} from '../model/jobs/saved-job-offer';
import {AppProperties} from '../model/general/app-properties';
import {IJobLoader} from './jobs/job-loader.interface';

import {JobLoaderLocal} from './jobs/job-loader-local.service';
import {JobLoaderRemote} from './jobs/job-loader-remote.service';
import {NotificationService} from './notification.service';



@Injectable()
export class JobLoaderService implements IJobLoader{
  private loaderLocal: JobLoaderLocal;
  private loaderRemote: JobLoaderRemote;


  constructor(
    private http: Http,
    private app: AppProperties) {
      this.loaderLocal = new JobLoaderLocal();
      this.loaderRemote = new JobLoaderRemote(http);
  }


  getJobsQuick(search : QuickSearch) : Promise<JobOffer[]>  {
    if(this.app.userIsConnected()){
      return this.loaderRemote.getJobsQuick(search);
    }else{
      return this.loaderLocal.getJobsQuick(search);
    }
  }

  getJobsAdvanced(search : AdvancedSearch) : Promise<JobOffer[]> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.getJobsAdvanced(search);
    }else{
      return this.loaderLocal.getJobsAdvanced(search);
    }
  }

  getSavedOffers() : Promise<SavedJobOffer[]> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.getSavedOffers();
    }else{
      return this.loaderLocal.getSavedOffers();
    }
  }

  getSavedOfferLogBook(offer : SavedJobOffer) : Promise<SavedJobOffer> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.getSavedOfferLogBook(offer);
    }else{
      return this.loaderLocal.getSavedOfferLogBook(offer);
    }
  }
}
