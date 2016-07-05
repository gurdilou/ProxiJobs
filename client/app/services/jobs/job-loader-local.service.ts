import {IJobLoader} from './job-loader.interface';

import {QuickSearch} from '../../model/search/quick-search';
import {JobOffer} from '../../model/jobs/job-offer';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {AdvancedSearch} from '../../model/search/advanced-search';

import {NotificationService} from '../notification.service';


const KEY_SAVED_OFFERS  = 'saved-offers';

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

  getSavedOffers() : Promise<SavedJobOffer[]> {
    return new Promise<SavedJobOffer[]>( (resolve, reject) => {

      let result = this.loadSavedOffers();


      resolve(result);
    });
  }

  /**
   * Charge les offres sauvegardées depuis le localstorage
   * @return {SavedJobOffer[]} les offres sauvegardées
   */
  private loadSavedOffers() : SavedJobOffer[] {
    let result : SavedJobOffer[] = [];

    try{
      let savedOffersStr = localStorage.getItem(KEY_SAVED_OFFERS);
      if(savedOffersStr !== null) {
        //parsing des objets
        let resultObj : Object[] = JSON.parse(savedOffersStr);
        for(let i = 0; i < resultObj.length; i++) {
          let newJob = SavedJobOffer.parseJSON(resultObj[i]);
          result.push(newJob);
        }
        // console.debug("count searchesStr["+key+"] : "+searchesStr);
      }

      return result;
    }catch(err){
      this.notifier.errror(err);
    }
  }

  getSavedOfferLogBook(offer : SavedJobOffer) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      offer.logbook.isLoaded = true;

      resolve(offer);
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

      this.saveSavedOffers(savedOffers)
        .then(success => {
          resolve(deletedOffer);
        }).catch(err => {
          this.notifier.errror(err);
        });
    });
  }

  /**
   * Sauvegarde les offres dans le local storage
   * @param  {SavedJobOffer[]}  savedOffers la liste des offres
   * @return {Promise<boolean>}             vrai si la sauvegarde a réussie
   */
  private saveSavedOffers(savedOffers : SavedJobOffer[]) : Promise<boolean>{
    return new Promise<boolean> ( (resolve, reject) => {
      try{
        localStorage.setItem(KEY_SAVED_OFFERS, JSON.stringify(savedOffers));
        resolve(true);
      }catch(err){
        reject(err);
      }
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

      this.saveSavedOffers(savedOffers)
        .then(success => {
          resolve(savedOffers);
        });
    });
  }
}
