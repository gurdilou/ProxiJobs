package com.proxijobs.controller;

import java.util.ArrayList;
import java.util.concurrent.Callable;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.proxijobs.AppProperties;
import com.proxijobs.model.JobOffer;
import com.proxijobs.model.QuickSearch;



@RestController
@CrossOrigin(origins = AppProperties.REQUESTS_ORIGIN)
public class MainController {
	
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
    		@RequestParam(value="job", defaultValue="") String job,
    		@RequestParam(value="city", defaultValue="") String city,
    		@RequestParam(value="perimeter", defaultValue="") String perimeter) {
		
		
		QuickSearch search = new QuickSearch();
		search.setJob(job);
		search.setCity(city);
		search.setPerimeter(perimeter);
		
		return this.handleRequest(new Callable<Object>() {
			@Override
			public Object call() throws Exception {
				return jobController.loadQuickJobs(search);
			}
		});
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
	private Object handleRequest(Callable<Object> handleRequest) {
		try {
			Object resp = handleRequest.call();
			return resp;
		}catch (Exception e) {
			return e;
		}	
	}
	

}
