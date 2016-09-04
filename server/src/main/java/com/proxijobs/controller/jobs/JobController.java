package com.proxijobs.controller.jobs;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.proxijobs.controller.jobs.wrappers.ReqWrapAdvancedJobs;
import com.proxijobs.controller.jobs.wrappers.ReqWrapQuickJobs;
import com.proxijobs.model.JobOffer;


/**
 * En charge de la recherche des emplois.
 *
 * @author tluce
 */
@Component
public class JobController {
	
	
	/** The providers. */
	private List<IsJobLoader> providers;


	/**
	 * Instantiates a new job controller.
	 */
	@Autowired
	public JobController(IndeedJobLoader indeedLoader) {
		providers = new ArrayList<IsJobLoader>();
		
		providers.add(indeedLoader);
	}
	
	
	/**
	 * Retourne la liste des offres.
	 *
	 * @param requestWrapper the request wrapper
	 * @return a job offers list
	 * @throws Exception the exception
	 */
	public ArrayList<JobOffer> loadQuickJobs(ReqWrapQuickJobs requestWrapper) throws Exception {
		ArrayList<JobOffer> offers = new ArrayList<JobOffer>();
		
		//Pour chaque providers...
		for(IsJobLoader jobLoader : providers){
			jobLoader.loadQuickJobs(offers, requestWrapper.getProps(), requestWrapper.getSearch());
		}
		
		
		return offers;
	}
	
	
	/**
	 * Load advanced jobs.
	 *
	 * @param requestWrapper the request wrapper
	 * @return the array list
	 * @throws Exception 
	 */
	public ArrayList<JobOffer> loadAdvancedJobs(ReqWrapAdvancedJobs requestWrapper) throws Exception {
		ArrayList<JobOffer> offers = new ArrayList<JobOffer>();
		
		//Pour chaque providers...
		for(IsJobLoader jobLoader : providers){
			jobLoader.loadAdvancedJobs(offers, requestWrapper.getProps(), requestWrapper.getSearch());
		}
		
		
		return offers;
	}



}
