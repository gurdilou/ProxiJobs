import { Http } from '@angular/http';

import {ILogbookEditor} from './logbook-editor.interface';
import {LogBook} from '../../model/jobs/log-book';
import {ApplyBack} from '../../model/jobs/apply-back';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {JobOffer} from '../../model/jobs/job-offer';

/**
 * Le service pour le remote
 */
export class LogbookEditorRemote implements ILogbookEditor {

  constructor(private http: Http) {
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

  restoreSavedOffer(savedOffers : SavedJobOffer[], restoredOffer : SavedJobOffer) : Promise<SavedJobOffer[]> {
    return new Promise<SavedJobOffer[]>( (resolve, reject) => {
      savedOffers.push(restoredOffer);
      SavedJobOffer.refreshOffersOrder(savedOffers);

      resolve(savedOffers);
    });
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
