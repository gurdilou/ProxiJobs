import {User} from './user';

/**
 * Persistance de l'application
 */
export class AppProperties {

  public static BASE_URL: string = 'http://localhost:8080/';

  /**
   * user connected
   * @type {User}
   */
  private user : User = new User();
  /**
   * true if app properties has been loaded
   * @type {boolean}
   */
  private isReady : boolean = false;

  /**
   * Liste des objets en attente du chargement
   * @type {any[]}
   */
  private waitingReady : any[] = [];

  /**
   * L'adresse IP du client
   * @type {string}
   */
  ipAddress : string = "";
  /**
   * Le user agent du navigateur web du client
   * @type {string}
   */
  userAgent : string = "";
  /**
   * La pays de l'utilisateur
   * @type {string}
   */
  countryCode : string = "";


  constructor() {
    this.loadIp();
    this.loadUserAgent();
  }

  private loadIp() {
    let self = this;
    $(document).ready(function() {
      $.ajax({
        url: '//freegeoip.net/json/',
        type: 'POST',
        dataType: 'jsonp',
        success: function(location) {
          self.ipAddress = location.ip;
          self.countryCode = location.country_code;
          self.isReady = true;
          self.resolveWaitingReady();
        }
      });
    });
  }

  private waitReady(callback : any) {
    this.waitingReady.push(callback);
  }

  private resolveWaitingReady() {
    for(let i = 0; i < this.waitingReady.length; i++) {
      this.waitingReady[i]();
    }
  }

  private loadUserAgent() {
    this.userAgent = navigator.userAgent;
  }

  /**
   * Retourne vrai si l'utilisateur est connecté à un compte
   * @return {boolean} vrai si l'utilisateur est connecté à un compte
   */
  userIsConnected() : boolean {
    return this.user.connected;
  }

  /**
   * Call resolve when app properties are ready
   * @return {Promise<boolean>} resolved when properties are loaded
   */
  public ready(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if(this.isReady) {
        resolve(true);
      }else{
        this.waitReady(function(){
          resolve(true);
        });
      }
    });
  }

}
