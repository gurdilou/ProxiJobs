import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import {QuickSearch} from '../model/search/quick-search';
import {AdvancedSearch} from '../model/search/advanced-search';
import {JobOffer} from '../model/jobs/job-offer';
import {SavedJobOffer} from '../model/jobs/saved-job-offer';
import {AppProperties} from '../model/general/app-properties';
import {ApiRequestBuilder} from '../model/general/api-request-builder';
import {IJobLoader} from './jobs/job-loader.interface';

import {NotificationService} from './notification.service';



@Injectable()
export class JobLoaderService implements IJobLoader{


  private quickJobsUrl = AppProperties.BASE_URL+'quickJobs';  // URL to web api
  private advJobsUrl = AppProperties.BASE_URL+'advJobs';  // URL to web api

  constructor(
    private http: Http,
    private app: AppProperties,
    private notifier : NotificationService) {
  }


  getJobsQuick(search : QuickSearch) : Promise<JobOffer[]>  {
    return new Promise<JobOffer[]>((resolve, reject) => {
      let result: JobOffer[] = [];

      let request = new ApiRequestBuilder(this.app, this.quickJobsUrl)

      // TODO finir la requete

      // let url = this.quickJobsUrl + "?";
      // url += "ip="
      // url += "&job=" + encodeURI(search.job);
      // url += "&city=" + encodeURI(search.city);
      // url += "&perimeter=" + encodeURI(search.perimeter);

      this.http.get(request.toString())
        .toPromise()
        .then(response => {
          console.log("data : " + response.json().data);
          resolve(result);
        })
        .catch(err => {
          this.notifier.errror(err);
        });
    });
  }

  getJobsAdvanced(search : AdvancedSearch) : Promise<JobOffer[]> {
    return new Promise<JobOffer[]>((resolve, reject) => {
      let result: JobOffer[] = [];

      let url = this.advJobsUrl + "?";
      url += "job=" + search.job;
      url += "&city=" + search.city;
      url += "&perimeter=" + search.perimeter;
      //TODO autres champs

      this.http.get(this.quickJobsUrl)
        .toPromise()
        .then(response => {
          console.log("data : " + response.json().data);
          resolve(result);
        })
        .catch(err => {
          this.notifier.errror(err);
        });
    });
  }
}
