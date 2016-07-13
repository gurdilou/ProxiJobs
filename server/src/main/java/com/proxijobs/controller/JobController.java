package com.proxijobs.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.proxijobs.AppProperties;
import com.proxijobs.model.ClientProperties;
import com.proxijobs.model.JobOffer;
import com.proxijobs.model.QuickSearch;
import com.proxijobs.parser.IndeedError;
import com.proxijobs.parser.IndeedParser;

/**
 * En charge de la recherche des emplois
 * @author tluce
 *
 */
public class JobController {
	
	
	/**
	 * 
	 */
	public JobController() {
		
	}
	
	
	/**
	 * Retourne la liste des offres.
	 *
	 * @param props the props
	 * @param search the search
	 * @return the array list
	 * @throws UnsupportedEncodingException the unsupported encoding exception
	 * @throws IndeedError the indeed error
	 */
	public ArrayList<JobOffer> loadQuickJobs(ClientProperties props, QuickSearch search) throws UnsupportedEncodingException, IndeedError {
		ArrayList<JobOffer> offers = new ArrayList<JobOffer>();
		
		//Pour chaque providers...
		loadIndeedJobs(offers, props, search);
		
		
		return offers;
	}

	/**
	 * Charge les offres répertoriées sur Indeed.
	 *
	 * @param offers les offres à remplir
	 * @param props the props
	 * @param search la recherche demandée
	 * @throws UnsupportedEncodingException the unsupported encoding exception
	 * @throws IndeedError the indeed error
	 */
	private void loadIndeedJobs(ArrayList<JobOffer> offers, ClientProperties props, QuickSearch search) throws UnsupportedEncodingException, IndeedError {
		RestTemplate restTemplate = new RestTemplate();
		
		
		
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);

		UriComponentsBuilder request = UriComponentsBuilder.fromHttpUrl("http://api.indeed.com/ads/apisearch");
		request.queryParam("publisher", AppProperties.INDEED_API_KEY);
		request.queryParam("q", search.getJob());
		request.queryParam("v", "2");
		request.queryParam("format", "json");
		request.queryParam("l", search.getCity());
		request.queryParam("radius", search.getPerimeterDistance());
		request.queryParam("latlong", "1");
		request.queryParam("co", props.getCountryCode().toLowerCase());
		request.queryParam("limit", "15");
		request.queryParam("userip", props.getIpAddress());
		request.queryParam("useragent", props.getUserAgent());
		request.queryParam("highlight", "1");

	
		
		ResponseEntity<String> resp = restTemplate.getForEntity(request.build().encode().toUri(), String.class);
		IndeedParser parser = new IndeedParser();
//		System.out.println("response.getBody() : "+response.getBody());
		parser.parseJobs(offers, resp.getBody() );
	}

}
