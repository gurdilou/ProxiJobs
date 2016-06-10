import {Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router, RouteParams } from '@angular/router-deprecated';

import {JobOffer} from '../../model/jobs/job-offer';
import {QuickSearch} from '../../model/search/quick-search';


import {MapQuickSearchComponent} from './map-quick-search.component';
import {MapJobDetailComponent} from './map-job-detail.component';


@Component({
  selector: 'pj-map-detail',
  templateUrl: 'app/views/map/map-detail.component.html',
  directives: [MapQuickSearchComponent]
})
/**
 * Classe gérant le détail d'une carte
 */
export class MapDetailComponent implements OnInit {

  search: QuickSearch;
  offer: JobOffer;


  constructor(
    private router: Router,
    private routeParams: RouteParams,
    private location: Location) {
    this.search = new QuickSearch();
  }

  ngOnInit() {
    //Si on veut afficher un boulot,
    if (this.routeParams.get('jobid') !== null) {
      let id = +this.routeParams.get('jobid');
      // this.jobService.getJob(id.then(offer => this.offer = offer);

    }
    //Si on veut afficher la recherche rapide
    if ((this.routeParams.get('qJob') !== null) || (this.routeParams.get('qCity') !== null) || (this.routeParams.get('qPerim') !== null)) {
      this.search.job = decodeURI(this.routeParams.get('qJob'));
      this.search.city = decodeURI(this.routeParams.get('qCity'));
      this.search.perimeter = decodeURI(this.routeParams.get('qPerim'));

      this.showQuickSearch();
    }
  }

  /**
   * Lorsqu'on clique sur le bouton afficher l'offre sélectionnée
   */
  onShowSelectedJob() {
    //TODO popup show selected job
    this.hideQuickSearch();
  }

  /**
   * callback lors de la fermeture de la quick search
   */
  onQuickSearchClose() {
    this.hideQuickSearch();
  }

  //call back lors d'une recherche rapide
  onQuickSearch() {
    this.refreshQuickSearchUrl();
    this.hideQuickSearch();
    //add loading
  }

  /**
   * Lorsqu'on clique sur le bouton afficher la recherche rapide
   */
  onShowQuickSearch() {
    this.refreshQuickSearchUrl();
    this.showQuickSearch();
  }

  /**
   * Rafraichit l'url de la page, sans la recharger
   * @return {any}
   */
  refreshQuickSearchUrl() {
    let job = this.search.job ? this.search.job : '';
    let city = this.search.city ? this.search.city : '';
    let perimeter = this.search.perimeter ? this.search.perimeter : '';

    let queryRaw = 'qJob=' + job + '&qCity=' + city + '&qPerim=' + perimeter;
    let query = Location.normalizeQueryParams(queryRaw);
    this.location.go('/map/' + query);
  }

  /**
   * Affiche la fenêtre de recherche rapide
   */
  showQuickSearch() {
    $('.pj-detail-button.ui.button.job').addClass("search-opened");
    $('.pj-detail-button.ui.button.search').addClass("search-opened");
    // $('.pj-map-detail.quicksearch').addClass('visible');
    $('.pj-map-detail.quicksearch').transition({
      animation: 'fade left',
      duration: 450
    })
  }

  /**
   * Masque la fenêtre de recherche rapide
   * @return {[type]} [description]
   */
  hideQuickSearch() {
    let popup = $('.pj-map-detail.quicksearch');

    if (popup.hasClass("visible")) {
      $('.pj-detail-button.ui.button.job').removeClass("search-opened");
      $('.pj-detail-button.ui.button.search').removeClass("search-opened");
      // $('.pj-map-detail.quicksearch').addClass('visible');
      popup.transition({
        animation: 'fade left',
        duration: 450
      });
    }

  }


}
