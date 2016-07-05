import * as moment from 'moment';

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
  savedDate : Date = undefined;
  /**
   * Vrai si l'utilisateur a postulé
   * @type {boolean}
   */
  private postulated : boolean = false;
  /**
   * Date de la postulation
   * @type {Date}
   */
  postulationDate : Date = undefined;
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
  private gotAResponse : boolean = false;
  /**
   * La réponse recue
   * @type {ApplyResponseStatus}
   */
  private responseStatus : ApplyResponseStatus = ApplyResponseStatus.None;
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
    if ( (this.responseStatus !== ApplyResponseStatus.None) && (this.gotAResponse) ) {
      switch(this.responseStatus) {
        case ApplyResponseStatus.Waiting :
          state = "Postulé";
          if(this.postulated) {
            timing = ", "+this.getDiffDate(this.postulationDate);
          }
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
    if(oldDate != undefined) {
      let today = new Date();
      let timeDiff = Math.abs(today.getTime() - oldDate.getTime());
      let diff = timeDiff / (1000 * 3600 * 24);
      let diffDays = Math.floor(diff);
      if(diffDays === 0){
        return "ajourd'hui"
      }
      return "il y  a "+diffDays+" jours";
    }else{
      return "";
    }

  }

  /**
   * Retourne vrai si l'utilisateur a postulé
   * @return {boolean} vrai si l'utilisateur a postulé
   */
  getPostulated() : boolean {
    return this.postulated;
  }
  /**
   * Change l'état de la postulation, ajoute la date
   * @param  {boolean} postulated vrai, si l'utilisateur a postulé
   */
  setPostulated(postulated : boolean) {
    this.postulated = postulated;
    this.postulationDate = null;
    if(this.postulated){
      this.postulationDate = new Date();
    }
  }
  /**
   * Retourne vrai si l'utilisateur à une réponse
   * @return {boolean} vrai si l'utilisateur à une réponse
   */
  getGotAResponse() : boolean {
    return this.gotAResponse;
  }
  /**
   * Change l'état de la réponse
   * @param  {boolean} gotAResponse si l'utilisateur a eu une réponse
   */
  setGotAResponse(gotAResponse : boolean) {
    this.gotAResponse = gotAResponse;
    this.responseDate = null;
    if(this.gotAResponse){
      this.responseDate = new Date();
    }
  }
  /**
   * Retourne le statut de la réponse
   * @return {ApplyResponseStatus} [description]
   */
  getResponseStatus() : ApplyResponseStatus {
    return this.responseStatus;
  }
  /**
   * Change le statut de la réponse, si le statut est différent de "En attente",
   * Affecte le <code>gotAResponse</code>
   * @param  {ApplyResponseStatus} status le nouveau statut
   */
  setResponseStatus(status : ApplyResponseStatus) {
    this.responseStatus = status;
    if( (this.responseStatus === ApplyResponseStatus.None) || (this.responseStatus === ApplyResponseStatus.Waiting) ){
      this.responseDate = null;
    }else{
      this.responseDate = new Date();
      this.setGotAResponse(true);
    }
  }
  /**
   * Retourne la date de postulation formattée
   * @return {string} la date formattée
   */
  getPostulatedDateStr() : string {
    if(this.postulationDate != undefined){
      return moment(this.postulationDate).format('LL');
    }
    return "";
  }

  /**
   * Retourne la date de la réponse formattée
   * @return {string} la date formattée
   */
  getResponseDateStr() : string {
    if(this.responseDate != undefined){
      return moment(this.responseDate).format('LL');
    }
    return "";
  }

  /**
   * Ajout d'une relance dans le journal
   * @param  {ApplyBack} newApplyBack la nouvelle relance
   */
  addApplyBack(newApplyBack : ApplyBack) {
    this.applyBacks.splice(0, 0, newApplyBack);
  }

  /**
   * Supprime la relance à l'index donné
   * @param  {number} index
   */
  removeApplyBackAt(index : number) {
    this.applyBacks.splice(index, 1);
  }

  /**
   * Retourne l'index d'une relance
   * @param  {ApplyBack} applyback la relance
   * @return {number}              l'indice de la relance
   */
  getApplyIndex(applyback : ApplyBack) : number {
    let index = -1;
    let i = 0;
    while( (i < this.applyBacks.length) && (index === -1) ){
      let currentBack : ApplyBack = this.applyBacks[i];
      if(currentBack == applyback) {
        index = i;
      }

      i++;
    }
    return index;
  }
  /**
   * Trie les relances par la date
   */
  sortApplyBacks() {
    function compare(a : ApplyBack, b : ApplyBack) {
      if (a.date > b.date) {
         return -1;
      }
      if (a.date < b.date) {
         return 1;
      }
      return 0;
    }

    this.applyBacks.sort(compare);
  }

  static parseJSON(json : Object) : LogBook {
    let result = new LogBook();

    for (let property in json) {
      if( result.hasOwnProperty(property) ) {
        //Affectation des champs spéciaux
        switch(property) {
          case 'savedDate' : result.savedDate = new Date(json[property]); break;
          case 'postulationDate' : result.postulationDate = new Date(json[property]); break;
          case 'responseDate' : result.responseDate = new Date(json[property]); break;
          case 'applyBacks' :
            let backs : Object[] = json[property];
            for(let i = 0; i < backs.length; i++){
              let newBack = ApplyBack.parseJSON(backs[i]);
              result.applyBacks.push(newBack);
            }
            break;
          default: result[property] = json[property];
        }
      }
    }

    return result;
  }
}
