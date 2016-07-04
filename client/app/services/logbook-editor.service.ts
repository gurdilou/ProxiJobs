import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';


import {LogBook} from '../model/jobs/log-book';
import {SavedJobOffer} from '../model/jobs/saved-job-offer';
import {ApplyBack} from '../model/jobs/apply-back';
import {AppProperties} from '../model/general/app-properties';
import {ILogbookEditor} from './logbook/logbook-editor.interface';

import {LogbookEditorLocal} from './logbook/logbook-editor-local.service';
import {LogbookEditorRemote} from './logbook/logbook-editor-remote.service';
import {NotificationService} from './notification.service';



@Injectable()
export class LogbookEditorService implements ILogbookEditor {
  private loaderLocal: LogbookEditorLocal;
  private loaderRemote: LogbookEditorRemote;


  constructor(
    private http: Http,
    private app: AppProperties) {
      this.loaderLocal = new LogbookEditorLocal();
      this.loaderRemote = new LogbookEditorRemote(http);
  }


  addApplyBack(savedOffer : SavedJobOffer, newApplyBack : ApplyBack ) : Promise<SavedJobOffer> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.addApplyBack(savedOffer, newApplyBack);
    }else{
      return this.loaderLocal.addApplyBack(savedOffer, newApplyBack);
    }
  }


  deleteApplyBack(savedOffer : SavedJobOffer, indexApplyBack : number) : Promise<SavedJobOffer> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.deleteApplyBack(savedOffer, indexApplyBack);
    }else{
      return this.loaderLocal.deleteApplyBack(savedOffer, indexApplyBack);
    }
  }

  saveLogbook(savedOffer : SavedJobOffer): Promise<SavedJobOffer> {
    if(this.app.userIsConnected()){
      return this.loaderRemote.saveLogbook(savedOffer);
    }else{
      return this.loaderLocal.saveLogbook(savedOffer);
    }
  }


}
