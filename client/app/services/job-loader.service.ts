import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AdvancedSearch} from '../model/search/advanced-search';
import {QuickSearch} from '../model/search/quick-search';
import {ContractKind} from '../model/search/contract-kind';
import {JobOffer} from '../model/jobs/job-offer';



@Injectable()
export class JobLoaderService {

  constructor(
    private http: Http) {
  }


  getJobs(search : QuickSearch) : Promise<JobOffer[]>  {
    return new Promise<JobOffer[]>( (resolve, reject) => {
      let result : JobOffer[] =[];

      // TODO recherche
      // + ajouter champ si search is AdvancedSearch

      resolve(result);

      // reject(Error("Failed to find position"));
    });
  }

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
