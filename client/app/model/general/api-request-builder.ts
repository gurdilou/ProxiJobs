import {User} from './user';
import {AppProperties} from './app-properties';
/**
 * Le constructeur de requête pour le serveur
 */
export class ApiRequestBuilder {
  constructor(private app : AppProperties, url : string) {

  }


  public toString() : string {
    return "";
  }

}
