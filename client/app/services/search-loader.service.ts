import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AdvancedSearch} from '../model/search/advanced-search';
import  {ContractKind} from '../model/search/contract-kind';
import {ErrorManagerService} from './error-manager.service';


@Injectable()
export class SearchLoaderService {

  // URL to web api
  // key = AIzaSyC_u2NmSUvEwkfzMTWhqrAEqMwXC8rlPIA
  private mapApi = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

  constructor(
    private http: Http,
    private errorHandler : ErrorManagerService) {
  }


  getFavorites() : Promise<AdvancedSearch[]>  {
    return new Promise<AdvancedSearch[]>( (resolve, reject) => {
      let result : AdvancedSearch[] =[];

      let s1 = new AdvancedSearch();
      s1.job = "Interprète, PDG";
      s1.city = "Rouen";
      s1.perimeter = "25km";
      s1.company = "bnp";
      s1.salary = 44;
      result.push(s1);

      let s2 = new AdvancedSearch();
      s2.job = "Développeur";
      s2.city = "Paris";
      s2.perimeter = "";
      s2.company = "";
      s2.salary = 0;
      result.push(s2);


      for(let i = 0; i < 0; i++){
        let s3 = new AdvancedSearch();
        s3.job = "Développeur";
        s3.city = "Paris";
        s3.kind = ContractKind.Permanent;
        s3.perimeter = "2min";
        s3.company = "INVOKE";
        s3.salary = 30;
        result.push(s3);
      }


      resolve(result);

      // reject(Error("Failed to find position"));
    });
  }

  private getRecents() {
    return this.getFavorites();
  }

  private handleError(error: any) {
    this.errorHandler.handle(error);
    return Promise.reject(error.message || error);
  }
}
