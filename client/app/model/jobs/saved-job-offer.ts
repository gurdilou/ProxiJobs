import {JobOffer} from './job-offer';
import {LogBook} from './log-book';

export class SavedJobOffer {
  job : JobOffer;
  logbook : LogBook = new LogBook();
}
