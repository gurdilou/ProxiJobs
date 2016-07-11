import {Component, OnDestroy} from '@angular/core';
import * as moment from 'moment';

import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {LogBook} from '../../model/jobs/log-book';
import {ApplyResponseStatus} from '../../model/jobs/apply-response-status';
import {ApplyBack} from '../../model/jobs/apply-back';

import {LogbookEditorService} from '../../services/logbook-editor.service';
import {NotificationService} from '../../services/notification.service';


import {OfferApplyBackWidgetComponent} from './offer-back-widget.component';

@Component({
  selector: 'pj-offers-logbook',
  templateUrl : 'app/views/offers/offers-logbook.component.html',
  directives: [OfferApplyBackWidgetComponent],
  providers: [NotificationService, LogbookEditorService]
})

export class OffersLogbookComponent implements OnDestroy{
  private logbook : LogBook;
  private savedOffer : SavedJobOffer;


  constructor(private logbookService : LogbookEditorService) {
  }

  /**
   * Affiche une offre
   * @param  {SavedJobOffer} offer [description]
   * @return {[type]}              [description]
   */
  display(savedOffer : SavedJobOffer) {
    if(this.savedOffer != null){
      this.logbookService.saveLogbook(this.savedOffer);
    }

    this.savedOffer = savedOffer;
    this.logbook = undefined;
    if(this.savedOffer != undefined){
      this.logbook = savedOffer.logbook;
    }
  }
  /**
   * Que l'offre liée a été supprimée
   * @return {[type]} [description]
   */
  offerDeleted() {
    this.savedOffer = undefined;
    this.logbook = undefined;

    this.display(undefined);
  }
  /**
   * Lors d'un changement du statut de la réponse
   * @param  {number} index [description]
   * @return {[type]}       [description]
   */
  protected onResponseStatusChange(index : number) {
    if(index === 0) {
      this.logbook.setResponseStatus(ApplyResponseStatus.Waiting);
    }
    if(index === 1) {
      this.logbook.setResponseStatus(ApplyResponseStatus.Interview);
    }
    if(index === 2) {
      this.logbook.setResponseStatus(ApplyResponseStatus.Rejected);
    }
  }


  /**
   * Lorsque l'utilisateur édite la date de postulation
   */
  protected onEditPostulationDate() {
    this.askTime('.log-postulation', this.logbook.postulationDate).then(timeSelected => {
      this.logbook.postulationDate = timeSelected;
    });
  }
  /**
   * Lorsque l'utilisateur édite la date de la réponse
   */
  protected onEditResponseDate() {
    this.askTime('.log-response', this.logbook.postulationDate).then(timeSelected => {
      this.logbook.responseDate = timeSelected;
    });
  }

  /**
   * Propose la sélection d'une date à l'utilisateur
   * @param  {string}        selector Le sélecteurpour placer la date picker
   * @return {Promise<Date>}          la date sélectionnée
   */
  protected askTime(selector : string, initialize : Date) : Promise<Date> {
    return new Promise<Date>( (resolve, reject) => {
      let result = initialize;
      let inputPostulation = $(selector+' .datepicker').pickadate({
        formatSubmit: 'yyyy/mm/dd',
        hiddenName : true
      });
      let pickerPostulation = inputPostulation.pickadate('picker');
      pickerPostulation.set('max', true);

      //Initialisation du widget
      if(result != undefined){
        let dateStr = moment(result).format('YYYY/MM/DD');
        inputPostulation.attr("data-value", dateStr);
        inputPostulation.find("input").attr("value", dateStr);
      }

      //Callbacks
      pickerPostulation.on({
        set: function(context) {
          if(context.select != null){
            result = new Date(context.select);
          }
        },
        close: function() {
          pickerPostulation.stop();
          pickerPostulation.clear();

          resolve(result);
        }
      });
    });
  }

  /**
   * Lors de l'ajout d'une relance
   */
  protected onAddApplyBack() {
    let newApplyBack = new ApplyBack();
    newApplyBack.date = new Date();
    newApplyBack.status = this.logbook.getResponseStatus();

    this.logbookService.addApplyBack(this.savedOffer, newApplyBack);
  }

  /**
   * Lors de la suppression d'une relance
   * @param  {ApplyBack} backDeleted la relance supprimée
   */
  protected onDeleteApplyBack(backDeleted : ApplyBack) {
    let index = this.logbook.getApplyIndex(backDeleted);

    this.logbookService.deleteApplyBack(this.savedOffer, index);
  }
  /**
   * Lors de l'édition d'une relance
   * @param  {ApplyBack} applyBack la relance
   */
  protected onEditApplyBack(applyBack : ApplyBack) {
    this.logbook.sortApplyBacks();
    this.logbookService.saveLogbook(this.savedOffer);
  }

  ngOnDestroy() {
    this.logbookService.saveLogbook(this.savedOffer);
  }

}
