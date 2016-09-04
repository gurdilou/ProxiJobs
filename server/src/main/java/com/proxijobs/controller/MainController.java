package com.proxijobs.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Application;
import com.proxijobs.AppProperties;
import com.proxijobs.controller.jobs.JobController;
import com.proxijobs.controller.jobs.wrappers.ReqWrapAdvancedJobs;
import com.proxijobs.controller.jobs.wrappers.ReqWrapQuickJobs;
import com.proxijobs.model.ApplicationError;
import com.proxijobs.model.JobOffer;
import com.proxijobs.parser.IndeedError;



@RestController
@CrossOrigin(origins = AppProperties.REQUESTS_ORIGIN)
@Component
public class MainController {

	private static final Logger log = LoggerFactory.getLogger(Application.class);
	
	
	private JobController jobController;

	@Autowired
	public MainController(JobController jobController) { 
		this.jobController = jobController;
	}
	


	/**
	 * Requête de chargement des jobs suite à une recherche rapide.
	 *
	 * @param requestWrapper the request wrapper
	 * @return the response entity
	 * @throws UnsupportedEncodingException the unsupported encoding exception
	 * @throws IndeedError the indeed error
	 */
	@RequestMapping(value = "/quickJobs", method = RequestMethod.POST)
	public @ResponseBody Object loadQuickJobs(@RequestBody ReqWrapQuickJobs requestWrapper) {
		try{
			ArrayList<JobOffer> jobs = jobController.loadQuickJobs(requestWrapper);
			return jobs;			
		}catch(Exception e){
			return handleRequest(e, "Erreur lors du chargement des offres");
		}
	}

	/**
	 * Requête de chargement des jobs suite à une recherche rapide.
	 *
	 * @param requestWrapper the request wrapper
	 * @return the object
	 */
	@RequestMapping(value = "/advJobs", method = RequestMethod.POST)
	public Object advancedJobs(@RequestBody ReqWrapAdvancedJobs requestWrapper)  {
		try {
			ArrayList<JobOffer> jobs = jobController.loadAdvancedJobs(requestWrapper);
			return jobs;
		} catch (Exception e) {
			return handleRequest(e, "Erreur lors du chargement des offres");
		}
	}


	/**
	 * Retourne la réponse à la requete.
	 *
	 * @param e the e
	 * @param msgIfError the msg if error
	 * @return the object
	 */
	private Object handleRequest(Exception e, String msgIfError) {
		log.error("Error caught : "+e.getMessage(), e);

		ApplicationError errorObj = new ApplicationError();
		errorObj.setError(e);
		errorObj.setMessage(msgIfError);


		return errorObj;
	}


}
