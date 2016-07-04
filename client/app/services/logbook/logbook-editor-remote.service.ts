import { Http } from '@angular/http';

import {ILogbookEditor} from './logbook-editor.interface';
import {LogBook} from '../../model/jobs/log-book';
import {ApplyBack} from '../../model/jobs/apply-back';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';

/**
 * Le service pour le remote
 */
export class LogbookEditorRemote implements ILogbookEditor {

  constructor(private http: Http) {
  }

  addApplyBack(savedOffer : SavedJobOffer, newApplyBack : ApplyBack ) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {  
      resolve(savedOffer);
      // reject(Error("Failed to find position"));
    });
  }

  deleteApplyBack(savedOffer : SavedJobOffer, indexApplyBack : number) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      resolve(savedOffer);
      // reject(Error("Failed to find position"));
    });
  }

  saveLogbook(savedOffer : SavedJobOffer): Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      resolve(savedOffer);
      // reject(Error("Failed to find position"));
    });
  }

}
