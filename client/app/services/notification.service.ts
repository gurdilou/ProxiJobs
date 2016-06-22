import { Injectable }    from '@angular/core';

import {ToasterService, Toast, ToasterConfig} from 'angular2-toaster/angular2-toaster';



@Injectable()
export class NotificationService {

  constructor(
    private toastr: ToasterService) {
  }

  /**
   * affiche un toast
   * @param  {Toast}  toast le toast affichée
   */
  pop(toast : Toast) {
    this.toastr.pop(toast);
  }

  /**
   * Affiche une erreur
   * @param  {any}    error l'erreur à affichée
   */
  errror(error : any) {
    let toast: Toast = {
        type: 'error',
        title: 'Erreur',
        showCloseButton: true,
        body: error.message || error,
    };
    this.toastr.pop(toast);
  }

  /**
   * Informe l'utilisateur de la suppression d'un item
   * @param  {string} title            Ce qui a été supprimé
   * @param  {any}    callBackOnCancel fonction appelé lors d'un clic pour annuler
   */
  askConfirmDownload(title: string, callBackOnCancel : any) {
    let toast: Toast = {
        type: 'info',
        title: title,
        body: 'Cliquez ici pour annuler',
        showCloseButton: true,
        timeout: 9000,
        clickHandler: (toast , isCloseButton) => {
          console.log("isCloseButton : "+isCloseButton);
          if(isCloseButton === undefined){
            callBackOnCancel(true);
          }
          return false;
        }
    };
    this.pop(toast);
  }

}
