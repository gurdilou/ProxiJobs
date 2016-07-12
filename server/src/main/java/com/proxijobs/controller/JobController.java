package com.proxijobs.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.Application;
import com.proxijobs.AppProperties;
import com.proxijobs.model.JobOffer;
import com.proxijobs.model.QuickSearch;
import com.proxijobs.utils.ApiRequestBuilder;

/**
 * En charge de la recherche des emplois
 * @author tluce
 *
 */
public class JobController {
	
	private static final Logger log = LoggerFactory.getLogger(Application.class);

	
	/**
	 * 
	 */
	public JobController() {
		
	}
	
	
	/**
	 * Retourne la liste des offres
	 * @param search
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public ArrayList<JobOffer> loadQuickJobs(QuickSearch search) throws UnsupportedEncodingException {
		ArrayList<JobOffer> offers = new ArrayList<JobOffer>();
		
		//Pour chaque providers...
		loadIndeedJobs(offers, search);
		
		
		return offers;
	}

	/**
	 * Charge les offres répertoriées sur Indeed.
	 *
	 * @param offers les offres à remplir
	 * @param search la recherche demandée
	 * @throws UnsupportedEncodingException the unsupported encoding exception
	 */
	private void loadIndeedJobs(ArrayList<JobOffer> offers, QuickSearch search) throws UnsupportedEncodingException {
		RestTemplate restTemplate = new RestTemplate();
		
		ApiRequestBuilder request = new ApiRequestBuilder("http://api.indeed.com/ads/apisearch");
		request.addParam("publisher", AppProperties.INDEED_API_KEY);
		request.addParam("q", search.getJob());
		request.addParam("v", "2");
		request.addParam("format", "json");
		request.addParam("l", search.getCity());
		request.addParam("radius", search.getPerimeterDistance());
		request.addParam("latlong", "1");
		request.addParam("co", "fr");
		request.addParam("limit", "15");
		
		
		ResponseEntity<String> resp = restTemplate.getForEntity(request.toString(), String.class);
		log.info("requête : "+request.toString());
		log.info("réponse code : "+resp.getStatusCode());
//		log.info("réponse : "+resp.getBody());

//		&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29
		
	}

}
