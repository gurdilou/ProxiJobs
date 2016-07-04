export enum ApplyResponseStatus {
  None = 1,
  Waiting = 2,
  Interview = 3,
  Rejected = 4
}

export class ApplyResponseStatusUtils {

  static getResponseStatusStr(pStatus : ApplyResponseStatus) : string {
    switch(pStatus) {
      case ApplyResponseStatus.None: return "En attente";
      case ApplyResponseStatus.Waiting: return "En attente";
      case ApplyResponseStatus.Interview: return "Entretien placé";
      case ApplyResponseStatus.Rejected: return "Refusé";
      default: return "";
    }
  }
  static getResponseStatus(pStatusStr : string) : ApplyResponseStatus {
    switch(pStatusStr) {
      case "": return ApplyResponseStatus.None;
      case "En attente": return ApplyResponseStatus.Waiting;
      case "Entretien placé": return ApplyResponseStatus.Interview;
      case "Refusé": return ApplyResponseStatus.Rejected;
      default: return null;
    }
  }
}
