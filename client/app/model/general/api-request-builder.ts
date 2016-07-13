import {User} from './user';
import {AppProperties} from './app-properties';
/**
 * Le constructeur de requête pour le serveur
 */
export class ApiRequestBuilder {
  private initialized : boolean = false;

  constructor(private app : AppProperties, private url : string) {
    this.addParam("ipaddress", app.ipAddress);
    this.addParam("useragent", app.userAgent);
    this.addParam("countrycode", app.countryCode);
  }

  /**
   * Ajoute un paramètre à l'url, encode sa valeur
   * @param  {string} name  le nom du paramètre
   * @param  {string} value sa valeur
   */
  public addParam(name :string, value : string) {
    if(!this.initialized){
      this.url += "?";
      this.initialized = true;
    }else {
      this.url += "&";
    }

    this.url += name+"="+encodeURI(value);
  }

  /**
   * Retourne l'url complète
   * @return {string} l'url complète
   */
  public toString() : string {
    return this.url;
  }

}
