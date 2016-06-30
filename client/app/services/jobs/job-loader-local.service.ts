import {IJobLoader} from './job-loader.interface';

import {QuickSearch} from '../../model/search/quick-search';
import {JobOffer} from '../../model/jobs/job-offer';
import {SavedJobOffer} from '../../model/jobs/saved-job-offer';
import {AdvancedSearch} from '../../model/search/advanced-search';

import {NotificationService} from '../notification.service';

export class JobLoaderLocal implements IJobLoader{

  getJobsQuick(search : QuickSearch) : Promise<JobOffer[]> {
    return new Promise<JobOffer[]>( (resolve, reject) => {
      let result : JobOffer[] =[];

      // TODO recherche
      // + ajouter champ si search is AdvancedSearch

      resolve(result);
      // reject(Error("Failed to find position"));
    });
  }

  getJobsAdvanced(search : AdvancedSearch) : Promise<JobOffer[]> {
    return new Promise<JobOffer[]>( (resolve, reject) => {
      let result : JobOffer[] =[];
      resolve(result);
    });
  }

  getSavedOffers() : Promise<SavedJobOffer[]> {
    return new Promise<SavedJobOffer[]>( (resolve, reject) => {
      let result : SavedJobOffer[] =[];

      let tmp = new SavedJobOffer();
      tmp.job = new JobOffer();
      tmp.job.id = 0;
      tmp.job.jobtitle = "Développeur H/F SQL serveur";
      tmp.job.company = "puddi corp";
      tmp.job.city = "rouen";
      tmp.job.country = "France";
      tmp.job.formattedLocation = "797 chemin de la breteque, 76230, Bois-Guillaume";
      tmp.job.source = "Indeed";
      tmp.job.date = "20/04/2015";
      tmp.logbook.documentsSent = true;
      tmp.logbook.resumeUrl = "http://blog.luce.pro";
      tmp.job.snippet =
        "Invoke, éditeur de logiciels de reporting financier et réglementaire connaît une croissance forte depuis sa création, en France comme à l’international."
        +"<br/>Reconnue comme référence incontournable sur le marché, Invoke compte aujourd’hui parmi ses clients plus de 1 800 groupes et régulateurs. Avec un budget d’environ 1/3 de son chiffre d’affaires consacré à la R&D, Invoke ne cesse d’enrichir fonctionnellement sa gamme pour continuer de satisfaire ses clients et poursuivre son évolution rapide."
        +"<br/>Invoke est une structure à taille humaine qui a toujours su faire progresser ses collaborateurs."
        +"<br/>Vous souhaitez vous investir dans une entreprise dynamique et participer à son développement ? Vous cherchez un poste à forte responsabilité au sein d'une entreprise innovante ?"
        +"<br/>Invoke cherche de nouveaux talents pour accompagner sa forte croissance et recrute un Ingénieur en Recherche & Développement Logiciel."
        +"<br/>"
        +"<br/>Missions"
        +"<br/>Rattaché au service Recherche et Développement, votre principale mission consiste à assurer, au sein d’une équipe dynamique d’une vingtaine d’ingénieurs, l’analyse et la conception de nos progiciels."
        +"<br/>"
        +"<br/>Vous serez ainsi amené́ à prendre en charge les activités suivantes :"
        +"<br/>"
        +"<br/>Analyser et spécifier des nouvelles fonctionnalités, des nouveaux modules ou des nouvelles applications en fonction d'une expression de besoin."
        +"<br/>Rédiger les documents d'analyse."
        +"<br/>Développer ces nouvelles fonctionnalités, modules ou applications."
        +"<br/>Tester ces nouveaux développements (tests unitaires, d'intégration, de montées en charge et de non régression)."
        +"<br/>Améliorer des fonctionnalités déjà existantes (ergonomie, temps de réponse sur grosses volumétries / bases de données de plusieurs centaines de millions d'enregistrements, ...)."
        +"<br/>Profil"
        +"<br/>De formation supérieure en Informatique, école d’ingénieurs ou master 2 universitaire, vous manifestez un intérêt pour la conception et le développement d’applications."
        +"<br/>"
        +"<br/>Vous aimez travailler en équipe et êtes capable de vous adapter rapidement à un nouveau langage ou à une nouvelle technologie."
        +"<br/>"
        +"<br/>Méthodique et rigoureux, vous devrez contribuer à ce que nos applications atteignent un niveau de qualité optimal (fonctionnalités, ergonomie, temps de réponse, ...) tout en conservant une forte volonté d’innover et de surprendre."
        +"<br/>"
        +"<br/>Localisation"
        +"<br/>Le poste est basé à Rouen."
        +"<br/>"
        +"<br/>Rémunération"
        +"<br/>Rémunération à fixer selon profil."
        +"<br/>"
        +"<br/>Candidature"
        +"<br/>CV et lettre de motivation à envoyer par mail à Mme Elodie THIBAULT (ethibault@invoke.fr).";

      tmp.job.url = "http://www.indeed.fr/pagead/clk?mo=r&ad=-6NYlbfkN0Asq71gwkBzBySIA2SeM6fGNfQcF2IjDdOJtyxYu4YaUptRbYC2cwl0uHCaN6lERn53iknHoUMDGLbzinWnNaurdaQOdO47NF9mo6XJJcGJKpUJ5vikwwgOiwkrw1A7fBc-b1Qq3JZAenxZJoDgRRuHej_BP7aiq3deX8fZS1o38Vll0tJW8sUZSZ7TglLUPC-H-_TGiBIW9mE8t7GzoXX11HxT6-3Vrj5uqugQfh8amyn8SEAq6CpXWyG2MDmDIn48PRBch-z2oImrCBUzRGeTSESEv_LMbrkv781mRTw_G8vMDWR4OzIC8RKNv2DStP6QNDLT8GXYTmwLtUtPJ82pH79HNZERxi3r4llfRWp4QTWjvvMxAWxl1DN0ETNxzy83MhduoHEDpjO5-wrwxkyC4OPl8NXHjqI_vgVN98_WHcJobeajojWKuJGCwgMNJkd7JbkWxsMgoHtrqmgzxCJIujC2I19q5KojOxCcqx846pgxxDIw2u_bGZrPHCetmbXMBGSXOKbDz067A4YHHevVeYxPr14YaVJHgBn617jsSA==&p=1&sk=&fvj=0&tk=1amg9fvha9v99fnr&jsa=3498&oc=1&sal=0";
      tmp.job.latitude = 49.479787;
      tmp.job.longitude = 1.111285;
      tmp.job.salary = "A négocier";
      tmp.logbook.postulated = true;
      tmp.logbook.note = "Voir la cantine";
      tmp.logbook.postulationDate = new Date();
      result.push(tmp);

      for(let i = 0; i < 50; i++){
        let tmp2 = new SavedJobOffer();
        tmp2.job = new JobOffer();
        tmp2.job.id = 0;
        tmp2.job.jobtitle = "Développeur H/F SQL serveur";
        tmp2.job.company = "puddi corp";
        tmp2.job.city = "rouen";
        tmp2.job.country = "France";
        tmp2.job.formattedLocation = "797 chemin de la breteque, 76230, Bois-Guillaume";
        tmp2.job.source = "Indeed";
        tmp2.job.date = "20/04/2015";
        tmp2.job.snippet = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        tmp2.job.url = "http://www.indeed.fr/pagead/clk?mo=r&ad=-6NYlbfkN0Asq71gwkBzBySIA2SeM6fGNfQcF2IjDdOJtyxYu4YaUptRbYC2cwl0uHCaN6lERn53iknHoUMDGLbzinWnNaurdaQOdO47NF9mo6XJJcGJKpUJ5vikwwgOiwkrw1A7fBc-b1Qq3JZAenxZJoDgRRuHej_BP7aiq3deX8fZS1o38Vll0tJW8sUZSZ7TglLUPC-H-_TGiBIW9mE8t7GzoXX11HxT6-3Vrj5uqugQfh8amyn8SEAq6CpXWyG2MDmDIn48PRBch-z2oImrCBUzRGeTSESEv_LMbrkv781mRTw_G8vMDWR4OzIC8RKNv2DStP6QNDLT8GXYTmwLtUtPJ82pH79HNZERxi3r4llfRWp4QTWjvvMxAWxl1DN0ETNxzy83MhduoHEDpjO5-wrwxkyC4OPl8NXHjqI_vgVN98_WHcJobeajojWKuJGCwgMNJkd7JbkWxsMgoHtrqmgzxCJIujC2I19q5KojOxCcqx846pgxxDIw2u_bGZrPHCetmbXMBGSXOKbDz067A4YHHevVeYxPr14YaVJHgBn617jsSA==&p=1&sk=&fvj=0&tk=1amg9fvha9v99fnr&jsa=3498&oc=1&sal=0";
        tmp2.job.latitude = 49.479787;
        tmp2.job.longitude = 1.111285;
        tmp2.job.salary = "40k€";

        result.push(tmp2);
      }


      resolve(result);
    });
  }

  getSavedOfferLogBook(offer : SavedJobOffer) : Promise<SavedJobOffer> {
    return new Promise<SavedJobOffer>( (resolve, reject) => {

      offer.logbook.isLoaded = true;

      resolve(offer);
    });
  }

}
