import {ApplyResponseStatus} from './apply-response-status';

export class LogBook {
  postulated : boolean = false;
  documentsSent : boolean = false;
  resumeUrl : string = "";
  coverLetterUrl : string = "";
  gotAResponse : boolean;
  responseStatus : ApplyResponseStatus = ApplyResponseStatus.None;
}
