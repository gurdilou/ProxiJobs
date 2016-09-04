import { Injectable }    from '@angular/core';
import { Http, Headers} from '@angular/http';

import {QuickSearch} from '../model/search/quick-search';
import {AdvancedSearch} from '../model/search/advanced-search';
import {JobOffer} from '../model/jobs/job-offer';
import {SavedJobOffer} from '../model/jobs/saved-job-offer';
import {AppProperties} from '../model/general/app-properties';
import {IJobLoader} from './jobs/job-loader.interface';

import {NotificationService} from './notification.service';
import {GenericService} from './generic.service';


@Injectable()
export class JobLoaderService extends GenericService implements IJobLoader {


  private quickJobsUrl = AppProperties.BASE_URL + 'quickJobs';  // URL to web api
  private advJobsUrl = AppProperties.BASE_URL + 'advJobs';  // URL to web api

  constructor(
    private http: Http,
    private app: AppProperties,
    private notifier: NotificationService) {
    super(http, notifier);
  }


  getJobsQuick(search: QuickSearch): Promise<JobOffer[]> {
    return new Promise<JobOffer[]>((resolve, reject) => {
      let result: JobOffer[] = [];

      let data = {
        "search": search,
        "props": this.app,
      };
      super.postJson(this.quickJobsUrl, data).then(response => {
          this.parseOffers(result, response.json());
          resolve(result);
        });
    });
  }


  private parseOffers(result: JobOffer[], json: any) {
    for (let i = 0; i < json.length; i++) {
      let newOffer = JobOffer.parseJSON(json[i]);
      result.push(newOffer);
    }
  }

  getJobsAdvanced(search: AdvancedSearch): Promise<JobOffer[]> {
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
          // console.log("data : " + response.json().data);
          resolve(result);
        })
        .catch(err => {
          this.notifier.errror(err);
        });
    });
  }
}
