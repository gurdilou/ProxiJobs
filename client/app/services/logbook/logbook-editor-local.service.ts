import {ILogbookEditor} from './logbook-editor.interface';
import {LogBook} from '../../model/jobs/log-book';
import {ApplyBack} from '../../model/jobs/apply-back';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {JobOffer} from '../../model/jobs/job-offer';

import {NotificationService} from '../notification.service';

/**
 * Clé du local storage contenant les offres sauvegardées
 * @type {String}
 */
const KEY_SAVED_OFFER  = 'saved-offer-';

/**
 * le service pour le local
 */
export class LogbookEditorLocal implements ILogbookEditor {

  constructor(private notifier: NotificationService) {
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
      //On récupère toutes les offres sauvegardées
      let offers  : Object[] = [];
      for (let key in localStorage){
        if(key.startsWith(KEY_SAVED_OFFER)){
          let offerStr = localStorage.getItem(key);
          let offerJSON = JSON.parse(offerStr);

          let newOffer = SavedJobOffer.parseJSON(offerJSON);
          result.push(newOffer);
        }
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
      try{
        let found = false;
        let i = 0;
        while( (i < savedOffers.length) && !found ){
          let offer : SavedJobOffer = savedOffers[i];

          if(offer == deletedOffer) {
            found = true;
            savedOffers.splice(i, 1);
          }
          i++;
        }
        localStorage.removeItem(KEY_SAVED_OFFER+deletedOffer.id);
        resolve(deletedOffer);
      }catch(err){
        this.notifier.errror(err);
      }
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
        for(let i = 0; i < savedOffers.length; i++) {
          let offer : SavedJobOffer = savedOffers[i];
          this.saveSavedOffer(offer);
        }
        resolve(true);
      }catch(err){
        reject(err);
      }
    });
  }

  /**
   * Sauvegarde l'offre donnée
   * @param  {SavedJobOffer} savedOffer l'offre sauvegardée à enregsitrer
   */
  private saveSavedOffer(savedOffer : SavedJobOffer) {
    localStorage.setItem(KEY_SAVED_OFFER+savedOffer.id, JSON.stringify(savedOffer));
  }

  createSavedOffer(linkedJob : JobOffer) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      let result = new SavedJobOffer();
      result.job = linkedJob;
      this.saveSavedOffer(result);

      resolve(result);
    });
  }


  restoreSavedOffer(savedOffers : SavedJobOffer[], restoredOffer : SavedJobOffer) : Promise<SavedJobOffer[]> {
    return new Promise<SavedJobOffer[]>( (resolve, reject) => {
      savedOffers.push(restoredOffer);
      SavedJobOffer.refreshOffersOrder(savedOffers);

      this.saveSavedOffer(restoredOffer);
    });
  }

  addApplyBack(savedOffer : SavedJobOffer, newApplyBack : ApplyBack ) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      savedOffer.logbook.addApplyBack(newApplyBack);
      this.saveSavedOffer(savedOffer);
      resolve(savedOffer);
    });
  }

  deleteApplyBack(savedOffer : SavedJobOffer, indexApplyBack : number) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      savedOffer.logbook.removeApplyBackAt(indexApplyBack);
      this.saveSavedOffer(savedOffer);
      resolve(savedOffer);
    });
  }

  saveLogbook(savedOffer : SavedJobOffer): Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {
      this.saveSavedOffer(savedOffer);
      resolve(savedOffer);
    });
  }

}
