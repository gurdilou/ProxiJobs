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

  static getContractKindStr(pKind : ContractKind) {
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
}
