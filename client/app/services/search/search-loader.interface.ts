
import {AdvancedSearch} from '../../model/search/advanced-search';



export interface ISearchLoader {

  /**
   * Demande au serveur la liste des recherches favorites
   * @return {Promise<AdvancedSearch[]>} La liste des recherches favories
   */
  getFavorites() : Promise<AdvancedSearch[]>;

  /**
   * Sauvegarde une nouvelle recherche favorie
   * @param  {AdvancedSearch}          newFavorite la nouvelle recherche favorie
   * @param {number}                   l'index auquel sera insérée la recherche
   * @return {Promise<boolean>}
   */
  addFavorite(newFavorite : AdvancedSearch, insertBefore? : number) : Promise<AdvancedSearch>;

  /**
   * Supprime une recherche favorie
   * @param  {AdvancedSearch}          oldFavorite l'ancienne recherche favorie
   * @return {Promise<AdvancedSearch>}
   */
  removeFavorite(oldFavorite : AdvancedSearch) : Promise<AdvancedSearch>;

  /**
   * Charge la liste des recherches récentes
   * @return {Promise<AdvancedSearch[]>}  la liste des recherches récentes
   */
  getRecents() : Promise<AdvancedSearch[]>;


  /**
   * Ajoute une recherche aux récentes
   * @param  {AdvancedSearch} recentSearch la recherche récente
   * @return {Promise<AdvancedSearch>}
   */
  addRecent(recentSearch: AdvancedSearch): Promise<AdvancedSearch>;
}
