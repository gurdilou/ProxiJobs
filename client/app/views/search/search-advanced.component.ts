import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import {SearchAdvancedWidget} from './search-adv-widget.component';

import {LocationResolverService} from '../../services/location-resolver.service';
import {SearchLoaderService} from '../../services/search-loader.service';
import {NotificationService} from '../../services/notification.service';

import {AdvancedSearch} from '../../model/search/advanced-search';
import {ContractKind, ContractKindUtils} from '../../model/search/contract-kind';

@Component({
  selector: 'pj-search-advanced',
  templateUrl : 'app/views/search/search-advanced.component.html',
  providers: [NotificationService,, LocationResolverService, SearchLoaderService]
})

export class SearchAdvancedComponent implements OnInit {

  private advSearch : AdvancedSearch;
  private advSearchIndex : number = undefined;

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
      this.advSearch.city = position.cityLong;
      this.advSearch.position = position;
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
  protected onLoadJobs(event : any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.inputsValid()) {
      this.searchService.addRecent(this.advSearch)
        .then( search => {

          if(search.starred){
            this.searchService.refreshFavorite(this.advSearchIndex || 0, this.advSearch)
              .then( search => {
                this.loadSearchPage();
              });

          }else{
            this.loadSearchPage();
          }
        } );
    }
  }

  /**
   * Change de page, ce qui lance la recherche
   */
  private loadSearchPage() {
    let params = {
      aJob: this.advSearch.job,
      aCity: this.advSearch.city,
      aCompany: this.advSearch.company,
      aKind: ContractKindUtils.getContractKindStr(this.advSearch.kind),
      aPerim: this.advSearch.perimeter,
      aSalary: this.advSearch.salary
    };
    this.router.navigate(['MapPage', params]);
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
      this.searchService.removeFavorite(this.advSearchIndex || 0, this.advSearch)
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
  applySearch(search : AdvancedSearch, favoriteIndex : number) {
    this.hideSearchStarred();

    this.advSearch = search;
    this.advSearchIndex = favoriteIndex;

    let select = $('.select-kind');

    switch(this.advSearch.kind) {
      case ContractKind.Permanent : select.val("CDI"); break;
      case ContractKind.FixedTerm : select.val("CDD"); break;
      case ContractKind.Interim : select.val("Interim"); break;
      case ContractKind.Internship : select.val("Stage"); break;
      case ContractKind.PartTime : select.val("TempsPartiel"); break;
      case ContractKind.Training : select.val("Alternance"); break;
      case ContractKind.Freelance : select.val("Freelance"); break;
      case ContractKind.FullTime : select.val("TempsComplet"); break;
    }

    if(search.starred) {
      this.displaySearchStarred();
    }
  }

  /**
   * Rafraichit la valeur du bouton favori
   * @param  {AdvancedSearch} search la recherche donée
   * @return {[type]}                [description]
   */
  refreshSearchStarred(search: AdvancedSearch) {
    if(search == this.advSearch){
      this.hideSearchStarred();
      if(search.starred){
        this.displaySearchStarred();
      }
    }
  }
  /**
   * lors du changement du type de contrat cherché
   * @param  {string} value code du type
   */
  protected onKindChange(value : string) {
    switch(value) {
      case "All" : this.advSearch.kind = undefined; break;
      case "CDI" : this.advSearch.kind = ContractKind.Permanent; break;
      case "CDD" : this.advSearch.kind = ContractKind.FixedTerm; break;
      case "Interim" : this.advSearch.kind = ContractKind.Interim; break;
      case "Stage" : this.advSearch.kind = ContractKind.Internship; break;
      case "TempsPartiel" : this.advSearch.kind = ContractKind.PartTime; break;
      case "Alternance" : this.advSearch.kind = ContractKind.Training; break;
      case "Freelance" : this.advSearch.kind = ContractKind.Freelance; break;
      case "TempsComplet" : this.advSearch.kind = ContractKind.FullTime; break;
    }
  }

}
