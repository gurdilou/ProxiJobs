import {QuickSearch} from './quick-search';
import {ContractKind, ContractKindUtils} from './contract-kind';

export class AdvancedSearch extends QuickSearch{
  company: string;
  kind: ContractKind;
  salary: number;
  starred: boolean;

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
    if(this.salary !== 0){
      return this.salary+"k€";
    }
    return "";
  }
}
