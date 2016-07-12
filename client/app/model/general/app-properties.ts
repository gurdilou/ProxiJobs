import {User} from './user';

/**
 * Persistance de l'application
 */
export class AppProperties {
  public static BASE_URL: string = 'http://localhost:8080/';

  private user : User = new User();
  private ipAddress : string = "";
  private userAgent : string = "";


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
        }
      });
    });
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

}
