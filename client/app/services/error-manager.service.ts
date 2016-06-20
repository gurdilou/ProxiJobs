import { Injectable }    from '@angular/core';

import {ToasterService, Toast} from 'angular2-toaster/angular2-toaster';

@Injectable()
export class ErrorManagerService {

  constructor(private toastr : ToasterService) {
  }
  /**
   * Gère une erreur
   * @param  {any}    error l'erreur
   */
  handle(error : any) {
    // console.error("ErrorManagerService : ", error);

    let toast: Toast = {
        type: 'error',
        title: 'Erreur',
        showCloseButton: true,
        body: error.message || error,
    };
    this.toastr.pop(toast);
  }
}
