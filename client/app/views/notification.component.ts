import {Component} from '@angular/core';
import {ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'pj-toaster',
  directives: [ToasterContainerComponent],
  templateUrl: 'app/views/notification.component.html',
})

export class NotificationComponent {
  private toasterService: ToasterService;

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }


  /**
   * [toasterconfig description]
   * @type {ToasterConfig}
   */
  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    newestOnTop: true,
    positionClass: "toast-bottom-right",
    preventDuplicates: false,
    timeout: 3000,
    limit: 6
  });

}
