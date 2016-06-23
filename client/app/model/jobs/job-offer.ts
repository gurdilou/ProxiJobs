export class JobOffer {
  /**
   * l'id chez proxi-jobs
   * @type {number}
   */
  id: number = -1;

  // Liés à l'annonce
  /**
   * Le titre de l'annonce
   * @type {string}
   */
  jobtitle : string = "";
  /**
   * La société
   * @type {string}
   */
  company : string = "";
  /**
   * La ville concernée
   * @type {string}
   */
  city : string = "";
  /**
   * Le pays
   * @type {string}
   */
  state : string = "";
  /**
   * L'état
   * @type {string}
   */
  country : string = "";
  /**
   * L'adresse formattée
   * @type {string}
   */
  formattedLocation : string = "";
  /**
   * La source chez indeed
   * @type {string}
   */
  source : string = "";
  /**
   * La date de parution
   * @type {string}
   */
  date : string = "";
  /**
   * La drescription du poste
   * @type {string}
   */
  snippet : string = "";
  /**
   * Url publique de l'annonce
   * @type {string}
   */
  url : string = "";
  /**
   * latitude gps
   * @type {number}
   */
  latitude : number = 0;
  /**
   * longitude gps
   * @type {number}
   */
  longitude : number = 0;
  /**
   * Le site fournisseur de l'annonce
   * @type {string}
   */
  provider : string = "indeed";
  /**
   * L'idée de l'annonce chez le fournisseur
   * @type {string}
   */
  jobkey : string = "";
  /**
   * Vrai s'il s'agit d'une annonce sponsorisée
   * @type {boolean}
   */
  sponsored : boolean = false;
  /**
   * Vrai si l'annonce est expirée
   * @type {boolean}
   */
  expired : boolean = false
  /**
   * L'adresse complète formattée
   * @type {string}
   */
  formattedLocationFull : string = "";
  /**
   * La durée depuis la parution formattée
   * @type {string}
   */
  formattedRelativeTime : string = "";

}
