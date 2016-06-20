import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import {SearchAdvancedWidget} from './search-adv-widget.component';

import {LocationResolverService} from '../../services/location-resolver.service';
import {SearchLoaderService} from '../../services/search-loader.service';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {ContractKind, ContractKindUtils} from '../../model/search/contract-kind';

@Component({
  selector: 'pj-search-advanced',
  templateUrl : 'app/views/search/search-advanced.component.html',
  providers: [LocationResolverService, SearchLoaderService]
})

export class SearchAdvancedComponent implements OnInit {
  private advSearch : AdvancedSearch;
  @Output() onAddingToFavorites = new EventEmitter();
  @Output() onRemoveFromFavorites = new EventEmitter();


  constructor(
    private router: Router,
    private routeParams : RouteParams,
    private locationService : LocationResolverService,
    private searchService : SearchLoaderService) {
      this.advSearch = new AdvancedSearch();
  }

  /**
   * Affecte la ville à la plus proche au champ ville
   */
  protected getCurrentLocation(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.locationService.getCurrentPosition().then(position => {
      this.advSearch.city = position.address;
    });
  }

  ngOnInit() {
    let widgetForm = $('.pj-adv-search-form');
    widgetForm.form({
      keyboardShortcuts: false,
      fields: {
        kind: {
          identifier: 'job',
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
   * Lorsque l'on veut chercher des offres
   */
  protected onLoadJobs() {
    if (this.inputsValid()) {
      let params = {
        aJob: this.advSearch.job,
        aCity: this.advSearch.city,
        aCompany: this.advSearch.company,
        aKind: ContractKindUtils.getContractKindStr(this.advSearch.kind),
        aPerim: this.advSearch.perimeter,
        aSalary: this.advSearch.salary
      };
      this.router.navigate(['MapPage', params]);
    }else{
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /**
   * Vérifie que les champs du formulaires sont correctement remplis
   * @return {boolean} [description]
   */
  private inputsValid(): boolean {
    let widgetForm = $('.pj-adv-search-form');

    return widgetForm.form('is valid');
  }

  /**
   * Change le bouton de favoris comme recherche favorite
   */
  private displaySearchStarred() {
    let button = $('.star-search');
    button.addClass('starred');

    let label = $('.starred-label');
    label.html("Ajoutée !");

    let icon = button.find('.icon');
    icon.removeClass('empty');
  }

  /**
   * Remet le bouton favoris à normal
   */
  private hideSearchStarred() {
    let button = $('.star-search');
    button.removeClass('starred');

    let label = $('.starred-label');
    label.html("Ajouter aux favoris");

    let icon = button.find('.icon');
    icon.addClass('empty');
  }

  /**
   * Ajoute la recherche aux favoris
   */
  protected addToFavorites() {
    if(!this.advSearch.starred){
      if (this.inputsValid()) {
        this.searchService.addFavorite(this.advSearch)
          .then( search => {
            this.onAddingToFavorites.emit(search);
            this.displaySearchStarred();
          } );
      }
    }else{
      this.searchService.removeFavorite(this.advSearch)
        .then( search => {
          this.onRemoveFromFavorites.emit(search);
          this.hideSearchStarred();
        } );
    }
  }

  /**
   * Modifie le formulaire pour y coller la recherche donnée
   * @param  {AdvancedSearch} search la recherche à afficher
   */
  applySearch(search : AdvancedSearch) {
    this.hideSearchStarred();

    this.advSearch = search;
    if(search.starred) {
      this.displaySearchStarred();
    }
  }



}
