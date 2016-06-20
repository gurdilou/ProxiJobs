export enum ContractKind {
  FixedTerm = 1,
  Interim = 2,
  Internship = 3,
  PartTime = 4,
  Training = 5,
  Freelance = 6,
  Permanent = 7,
  FullTime = 8
}

export class ContractKindUtils {

  static getContractKindStr(pKind : ContractKind) : string {
    switch(pKind) {
      case ContractKind.FixedTerm: return "CDD";
      case ContractKind.Interim: return "Intérim";
      case ContractKind.Internship: return "Stage";
      case ContractKind.PartTime: return "Temps partiel";
      case ContractKind.Training: return "Alternance";
      case ContractKind.Freelance: return "Freelance";
      case ContractKind.Permanent: return "CDI";
      case ContractKind.FullTime: return "Temps complet";
      default: return "";
    }
  }
  static getContractKind(pKindStr : string) : ContractKind {
    switch(pKindStr) {
      case "CDD": return ContractKind.FixedTerm;
      case "Intérim": return ContractKind.Interim;
      case "Stage": return ContractKind.Internship;
      case "Temps partiel": return ContractKind.PartTime;
      case "Alternance": return ContractKind.Training;
      case "Freelance": return ContractKind.Freelance;
      case "CDI": return ContractKind.Permanent;
      case "Temps complet": return ContractKind.FullTime;
      default: return null;
    }
  }
}
