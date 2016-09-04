import {JobOffer} from '../../model/jobs/job-offer';

/**
 * Storage object for google map-marker + linked offers
 */
export class CoupleMarkerOffers {
  marker : google.maps.Marker;
  offers : JobOffer[] = [];

}
