package com.proxijobs.controller;

import java.util.ArrayList;
import java.util.concurrent.Callable;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Application;
import com.proxijobs.AppProperties;
import com.proxijobs.model.ApplicationError;
import com.proxijobs.model.ClientProperties;
import com.proxijobs.model.JobOffer;
import com.proxijobs.model.QuickSearch;



@RestController
@CrossOrigin(origins = AppProperties.REQUESTS_ORIGIN)
public class MainController {
	
	private static final Logger log = LoggerFactory.getLogger(Application.class);
	
	
	private JobController jobController = new JobController();
	
	
	/**
	 * Requête de chargement des jobs suite à une recherche rapide
	 * @param job
	 * @param city
	 * @param perimeter
	 * @return
	 */
	@RequestMapping("/quickJobs")
    public @ResponseBody Object loadQuickJobs(
    		@RequestParam(value="ipaddress", defaultValue="") String ipAddress,
    		@RequestParam(value="useragent", defaultValue="") String userAgent,
    		@RequestParam(value="countrycode", defaultValue="") String countryCode,
    		@RequestParam(value="job", defaultValue="") String job,
    		@RequestParam(value="city", defaultValue="") String city,
    		@RequestParam(value="perimeter", defaultValue="") String perimeter) {
		
		
		ClientProperties props = new ClientProperties();
		props.setIpAddress(ipAddress);
		props.setUserAgent(userAgent);
		props.setCountryCode(countryCode);
		
		QuickSearch search = new QuickSearch();
		search.setJob(job);
		search.setCity(city);
		search.setPerimeter(perimeter);
		
		return this.handleRequest(new Callable<Object>() {
			@Override
			public Object call() throws Exception {
				return jobController.loadQuickJobs(props, search);
			}
		}, "Echec du chargement des offres");
    }

	@RequestMapping("/advJobs")
    public @ResponseBody ArrayList<JobOffer> advancedJobs(
    		@RequestParam(value="job", defaultValue="") String job,
    		@RequestParam(value="city", defaultValue="") String city,
    		@RequestParam(value="perimeter", defaultValue="") String perimeter) {
    	
    	ArrayList<JobOffer> result = new ArrayList<JobOffer>();
    	
    	System.out.println("Requete recue");
    	//Appel à Indeed
    	
    	return result; 
    }
	
	
	/**
	 * Retourne la réponse à la requete
	 * @param handleRequest
	 * @return
	 */
	private Object handleRequest(Callable<Object> handleRequest, String msgIfError) {
		try {
			Object resp = handleRequest.call();
			return resp;
		}catch (Exception e) {
			log.error("Error caught : "+e.getMessage(), e);
			
			ApplicationError errorObj = new ApplicationError();
			errorObj.setError(e);
			errorObj.setMessage(msgIfError);
			
			
			return errorObj;
		}	
	}
	

}
