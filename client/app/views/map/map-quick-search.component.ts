import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import {QuickSearch} from '../../model/search/quick-search';

import {NotificationService} from '../../services/notification.service';

import {LocationResolverService} from '../../services/location-resolver.service';

@Component({
  selector: 'pj-map-quick-search',
  templateUrl: 'app/views/map/map-quick-search.component.html',
  providers: [NotificationService, LocationResolverService]
})
export class MapQuickSearchComponent implements OnInit {
  @Input() search: QuickSearch;
  @Output() onQuickSearchClose = new EventEmitter();
  @Output() onQuickSearch = new EventEmitter();
  @Output() onCenterMap = new EventEmitter();

  constructor(
    private routeParams: RouteParams,
    private locationService: LocationResolverService) {
  }

  ngOnInit() {
    let widgetForm = $('.pj-quick-search-form');
    widgetForm.form({
      keyboardShortcuts: false,
      fields: {
        kind: {
          identifier: 'kind',
          rules: [{ type: 'empty', prompt: 'Veuillez renseigner un emploi' }]
        },
        city: {
          identifier: 'city',
          rules: [{ type: 'empty', prompt: 'Veuillez renseigner un lieu' }]
        }
      }
    });
  }

  /**
   * Affecte la ville à la plus proche au champ ville
   */
  getCurrentLocation(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.locationService.getCurrentPosition().then(position => {
      this.search.city = position.cityLong;
      this.search.position = position;

      var center = new google.maps.LatLng(position.latitude, position.longitude);
      this.onCenterMap.emit(center);
    });
  }

  /**
   * Lorsque l'on veut chercher des offres
   */
  onLoadJobs() {
    if (this.inputsValid()) {
      this.onQuickSearch.emit(undefined);
    }
  }

  /**
   * Lorsque l'on réduit la fenêtre de recherche
   */
  onReduce() {
    this.onQuickSearchClose.emit(undefined);
  }


  /**
   * Vérifie que les champs du formulaires sont correctement remplis
   * @return {boolean} [description]
   */
  inputsValid(): boolean {
    let widgetForm = $('.pj-quick-search-form');

    return widgetForm.form('is valid');
  }
}
