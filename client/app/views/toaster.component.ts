import {Component} from '@angular/core';
import {ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'pj-toaster',
  directives: [ToasterContainerComponent],
  providers: [ToasterService],
  templateUrl: 'app/views/toaster.component.html',
})

export class ToasterComponent {
  private toasterService: ToasterService;

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  popToast() {
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }

  /**
   * [toasterconfig description]
   * @type {ToasterConfig}
   */
  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    showCloseButton: true,
    newestOnTop: true,
    positionClass: "toast-bottom-right",
    preventDuplicates: true,
    timeout: 3000
  });

}
