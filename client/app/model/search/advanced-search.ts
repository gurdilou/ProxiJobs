import {QuickSearch} from './quick-search';
import {ContractKind, ContractKindUtils} from './contract-kind';

export class AdvancedSearch extends QuickSearch{
  company: string = "";
  kind: ContractKind = undefined;
  salary: number = 0;
  starred: boolean = false;

  /**
   * @return {string}  Retourne la concaténation du lieu et du périmètre espéré
   */
  getLocation() : string {
    let result = this.city;
    if( (this.city !== "") && (this.perimeter !== "") ){
      result += ", ";
    }
    result += this.perimeter;
    return result;
  }
  /**
   * @return {string}  Retourne la concaténation du salaire et du type de contrat espéré
   */
  getExpected() : string {
    let result =  ContractKindUtils.getContractKindStr(this.kind);
    if( (result !== "") && (this.salary !== 0) ){
      result += ", ";
    }
    result += this.getSalaryFormatted();
    return result;
  }
  /**
   * @return {string} le salaire formatté
   */
  getSalaryFormatted() : string {
    if((this.salary !== undefined) &&  (this.salary !== 0) ){
      return this.salary+"k€";
    }
    return "";
  }

  /**
   * Parse une recherche sauvegardée
   * @param  {Object}         json [description]
   * @return {AdvancedSearch}      [description]
   */
  static parseJSON(json : Object) : AdvancedSearch {
    let result = new AdvancedSearch();

    //quick search
    if(json.hasOwnProperty("job")) {
      result.job = json["job"];
    }
    if(json.hasOwnProperty("city")) {
      result.city = json["city"];
    }
    if(json.hasOwnProperty("perimeter")) {
      result.perimeter = json["perimeter"];
    }

    //advanced
    if(json.hasOwnProperty("company")) {
      result.company = json["company"];
    }
    if(json.hasOwnProperty("kind")) {
      result.kind = json["kind"];
    }
    if(json.hasOwnProperty("salary")) {
      result.salary = json["salary"];
    }
    if(json.hasOwnProperty("starred")) {
      result.starred = json["starred"];
    }

    return result;
  }
}
