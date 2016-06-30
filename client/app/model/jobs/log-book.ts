import {ApplyResponseStatus} from './apply-response-status';
import {ApplyBack} from './apply-back';


/**
 * Le journal de bord d'une offre
 */
export class LogBook {
  /**
   * Vrai si le journal a été chargé depuis le serveur
   * @type {boolean}
   */
  isLoaded : boolean = false;

  /**
   * La date de la sauvegarde de l'offre
   * @type {Date}
   */
  savedDate : Date = new Date();
  /**
   * Vrai si l'utilisateur a postulé
   * @type {boolean}
   */
  postulated : boolean = false;
  /**
   * Date de la postulation
   * @type {Date}
   */
  postulationDate : Date;
  /**
   * Vrai si l'utilisateur a envoyé un cv ou une lettre
   * @type {boolean}
   */
  documentsSent : boolean = false;
  /**
   * L'url de téléchargement du cv
   * @type {string}
   */
  resumeUrl : string = "";
  /**
   * l'url de téléchargement de la lettre de motivation
   * @type {string}
   */
  coverLetterUrl : string = "";
  /**
   * Vrai si l'utilisateur a eu une réponse
   * @type {boolean}
   */
  gotAResponse : boolean = false;
  /**
   * La réponse recue
   * @type {ApplyResponseStatus}
   */
  responseStatus : ApplyResponseStatus = ApplyResponseStatus.None;
  /**
   * La date de la réponse
   * @type {Date}
   */
  responseDate : Date;
  /**
   * La liste des relances
   */
  applyBacks : ApplyBack[] = [];
  /**
   * Note associée
   */
  note : string = "";

  /**
   * Retourne le statut de l'offre
   * @return {string} [description]
   */
  getStatus() : string {
    let state = "Nouvelle";
    let timing = ", "+this.getDiffDate(this.savedDate);
    if(this.postulated) {
      state = "Postulé";
      timing = ", "+this.getDiffDate(this.postulationDate);
    }
    if(this.responseStatus !== ApplyResponseStatus.None) {
      switch(this.responseStatus) {
        case ApplyResponseStatus.Waiting :
          state = "Postulé";
          timing = ", "+this.getDiffDate(this.postulationDate);
          break;
        case ApplyResponseStatus.Interview :
          state ="Entretien placé";
          timing = ", "+this.getDiffDate(this.responseDate);
          break;
        case ApplyResponseStatus.Rejected :
          state = "Refus";
          timing = ", "+this.getDiffDate(this.responseDate);
          break;
      }
    }

    if(this.applyBacks.length > 0) {
      let back = this.applyBacks[this.applyBacks.length - 1];
      state = "Relancé";
      timing = ", "+this.getDiffDate(back.date);
    }


    return state + timing;
  }
  /**
   * Retourne la différence entre aujourd'hui et une autre date
   * @param  {Date}   oldDate l'autre date
   * @return {string}         la différence en jour
   */
  getDiffDate(oldDate : Date) : string{
    let today = new Date();
    let timeDiff = Math.abs(today.getTime() - oldDate.getTime());
    let diff = timeDiff / (1000 * 3600 * 24);
    let diffDays = Math.floor(diff);
    if(diffDays === 0){
      return "ajourd'hui"
    }
    return "il y  a "+diffDays+" jours"
  }
}
