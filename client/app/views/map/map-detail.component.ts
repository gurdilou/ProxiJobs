import {Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as Collections from 'typescript-collections';

import {JobOffer} from '../../model/jobs/job-offer';
import {QuickSearch} from '../../model/search/quick-search';

import {JobLoaderService} from '../../services/job-loader.service';
import {NotificationService} from '../../services/notification.service';


import {MapQuickSearchComponent} from './map-quick-search.component';
import {MapJobDetailComponent} from './map-job-detail.component';


@Component({
  selector: 'pj-map-detail',
  templateUrl: 'app/views/map/map-detail.component.html',
  providers: [NotificationService, JobLoaderService]
})
/**
 * Classe gérant le détail d'une carte
 */
export class MapDetailComponent implements OnInit {
  @Output() onCenterMap = new EventEmitter();
  @Output() onSearchJobs = new EventEmitter();
  @ViewChild(MapJobDetailComponent) jobDetailsPopup:MapJobDetailComponent;

  offers: JobOffer[] = [];
  search: QuickSearch;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private jobLoader : JobLoaderService) {
    this.search = new QuickSearch();
  }

  ngOnInit() {
    //Si on veut afficher un boulot,
    this.route.params.forEach((params: Params) => {
      if (params.hasOwnProperty('jobid')) {
        let id = +params['jobid'];
        // this.jobService.getJob(id.then(offer => this.offer = offer);
      }
      //Si on veut afficher la recherche rapide
      if ( params.hasOwnProperty('qJob') || params.hasOwnProperty('qCity')|| params.hasOwnProperty('qPerim') ) {
        this.search.job = decodeURI(params['qJob']);
        this.search.city = decodeURI(params['qCity']);
        this.search.perimeter = decodeURI(params['qPerim']);

        this.onQuickSearch();
      }
    });
  }

  /**
   * Lorsqu'on clique sur le bouton afficher l'offre sélectionnée
   */
  onShowSelectedJob() {
    this.hideQuickSearch();
    this.showSelectedJobPopup();
  }

  /**
   * callback lors de la fermeture de la quick search
   */
  onQuickSearchClose() {
    this.hideQuickSearch();
  }

  onJobPopupClose() {
    this.hideSelectedJobPopup();
  }

  //call back lors d'une recherche rapide
  onQuickSearch() {
    this.refreshQuickSearchUrl();
    this.hideQuickSearch();
    this.setQuickSearchLoading(true);
    this.jobLoader.getJobsQuick(this.search)
      .then(offers => {
        this.setQuickSearchLoading(false);
        this.onSearchJobs.emit(offers);
      });
  }

  /**
   * Lorsqu'on clique sur le bouton afficher la recherche rapide
   */
  onShowQuickSearch() {
    this.refreshQuickSearchUrl();
    this.hideSelectedJobPopup();
    this.showQuickSearch();
  }

  /**
   * Lorsque l'utilisateur centre un point sur la carte
   */
  centerMap(center : google.maps.LatLng) {
    this.onCenterMap.emit(center);
  }

  /**
   * Rafraichit l'url de la page, sans la recharger
   * @return {any}
   */
  refreshQuickSearchUrl() {
    let job = this.search.job ? this.search.job : '';
    let city = this.search.city ? this.search.city : '';
    let perimeter = this.search.perimeter ? this.search.perimeter : '';

    let queryRaw = 'qJob=' + job + ';qCity=' + city + ';qPerim=' + perimeter;
    let query = queryRaw;
    this.location.go('/map;' + query);
  }

  /**
   * Affiche la fenêtre de recherche rapide
   */
  private showQuickSearch() {
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
  private hideQuickSearch() {
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

  private showSelectedJobPopup() {
    $('.pj-detail-button.ui.button.job').addClass("job-opened");
    $('.pj-detail-button.ui.button.search').addClass("job-opened");
    let popup = $('.pj-map-detail.jobs-selected');
    if (!popup.hasClass("visible")) {
      $('.pj-map-detail.jobs-selected').transition({
        animation: 'fade left',
        duration: 350
      });
    } else {
      popup.removeClass("hidden");
      $('.pj-map-detail.jobs-selected').transition({
        animation: 'pulse',
        duration: 150
      });
    }
  }

  private hideSelectedJobPopup() {
    let popup = $('.pj-map-detail.jobs-selected');

    if (popup.hasClass("visible")) {
      $('.pj-detail-button.ui.button.job').removeClass("job-opened");
      $('.pj-detail-button.ui.button.search').removeClass("job-opened");
      // $('.pj-map-detail.quicksearch').addClass('visible');
      popup.transition({
        animation: 'fade left',
        duration: 450
      });
    }
  }

  private setQuickSearchLoading(display : boolean) {
    let butt = $('.pj-detail-button.ui.button.search');
    if(display){
      butt.addClass('loading');
    }else{
      butt.removeClass('loading');
    }
  }

  /**
   * Affiche le détail de une ou plusieurs offres
   * @param  {Collections.LinkedList<JobOffer>} offers les offres
   */
  displayOffers(offers : JobOffer[]) {
    this.offers = offers;
    let popup = $('.pj-map-detail.jobs-selected');
    this.onShowSelectedJob();
  }

}
