package com.proxijobs.controller.jobs;

import java.util.ArrayList;

import com.proxijobs.model.AdvancedSearch;
import com.proxijobs.model.ClientProperties;
import com.proxijobs.model.JobOffer;
import com.proxijobs.model.QuickSearch;

/**
 * Object will be able to support all job actions loading
 * 
 * @author Thomas Luce
 *
 */
public interface IsJobLoader {
	
	/**
	 * Load jobs thanks to a quick search
	 * @param offers
	 * @param props
	 * @param search
	 */
	public void loadQuickJobs(ArrayList<JobOffer>  offers, ClientProperties props, QuickSearch search) throws Exception;

	/**
	 * Load jobs thanks to an advanced search
	 * @param offers
	 * @param props
	 * @param search
	 */
	public void loadAdvancedJobs(ArrayList<JobOffer> offers, ClientProperties props, AdvancedSearch search) throws Exception;
}
