import {JobOffer} from '../../model/jobs/job-offer';
import * as Collections from 'typescript-collections';

/**
 * Storage object for google map-marker + linked offers
 */
export class CoupleMarkerOffers {
  marker : google.maps.Marker;
  offers : Collections.LinkedList<JobOffer> = new Collections.LinkedList<JobOffer>();

}
