import {User} from './user';

/**
 * Persistance de l'application
 */
export class AppProperties {

  private user : User = new User();

  constructor() {
  }

  /**
   * Retourne vrai si l'utilisateur est connecté à un compte
   * @return {boolean} vrai si l'utilisateur est connecté à un compte
   */
  userIsConnected() : boolean {
    return this.user.connected;
  }

}
