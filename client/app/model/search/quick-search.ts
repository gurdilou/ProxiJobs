import {UserPosition} from './user-position';

/**
 * Une recherche minimale
 */
export class QuickSearch {
  /**
   * Le boulot cherché
   * @type {string}
   */
  job: string = "";
  /**
   * L'adresse ciblée
   * @type {string}
   */
  city: string = "";
  /**
   * La distance autour de la recherche
   * @type {string}
   */
  perimeter: string = "";
  /**
   * Pas forcément renseigné, la position plus précise de l'utilisateur
   * @type {UserPosition}
   */
  position : UserPosition = undefined;
}
