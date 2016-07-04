import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';

import * as moment from 'moment';
import {ApplyBack} from '../../model/jobs/apply-back';

@Component({
  selector: 'pj-apply-back',
  templateUrl : 'app/views/offers/offer-back-widget.component.html'
})

export class OfferApplyBackWidgetComponent {
  @Input() applyBack : ApplyBack;
  @Output() onDeleteApplyBack = new EventEmitter();
  @Output() onEditApplyBack = new EventEmitter();

  constructor() {
  }

  /**
   * Lors d'un clic sur le bouton supprimre
   * @param  {any}    event l event de click
   */
  protected onButtDeleteClick(event : any) {
    event.stopPropagation();
    event.preventDefault();

    this.onDeleteApplyBack.emit(this.applyBack);
  }
  /**
   * Lors d'un clic sur le bouton editer
   * @param  {any}    event event l event de click
    */
  protected onButtEditClick(event : any){
    event.stopPropagation();
    event.preventDefault();

    let self = this;
    let result = this.applyBack.date;

    let widget = $('.log-response-backs');
    console.log("widget : "+widget.html());
    let inputPostulation = widget.pickadate({
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
    pickerPostulation.open();

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

        self.applyBack.date = result;
        self.onEditApplyBack.emit(self.applyBack);
      }
    });
  }

}
