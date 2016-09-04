package com.proxijobs.controller.jobs;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.proxijobs.AppProperties;
import com.proxijobs.controller.location.LocationResolver;
import com.proxijobs.model.AdvancedSearch;
import com.proxijobs.model.ClientProperties;
import com.proxijobs.model.HasLocation;
import com.proxijobs.model.JobOffer;
import com.proxijobs.model.QuickSearch;
import com.proxijobs.parser.IndeedError;
import com.proxijobs.parser.IndeedParser;
import com.proxijobs.parser.LocationResolveException;

/**
 * Indeed API manager
 * @author Thomas Luce
 *
 */
@Component
public class IndeedJobLoader implements IsJobLoader {


	private LocationResolver locationService;


	@Autowired
	public IndeedJobLoader(LocationResolver locationService) {
		this.locationService = locationService;
	}
	
	
	/**
	 * {@inheritDoc}
	 * 
	 * @throws UnsupportedEncodingException the unsupported encoding exception
	 * @throws IndeedError the indeed error
	 * @throws LocationResolveException 
	 * @throws InterruptedException 
	 */
	@Override
	public void loadQuickJobs(ArrayList<JobOffer>  offers, ClientProperties props, QuickSearch search) 
				throws UnsupportedEncodingException, IndeedError, LocationResolveException, InterruptedException {
		RestTemplate restTemplate = new RestTemplate();
		
		
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);

		UriComponentsBuilder request = UriComponentsBuilder.fromHttpUrl("http://api.indeed.com/ads/apisearch");
		request.queryParam("publisher", AppProperties.INDEED_API_KEY);
		request.queryParam("q", search.getJob());
		request.queryParam("v", "2");
		request.queryParam("format", "json");
		request.queryParam("l", search.getCity());
		if(search.hasPerimeter()){
			request.queryParam("radius", search.getPerimeterDistance());	
		}
		request.queryParam("latlong", "1");
		request.queryParam("co", props.getCountryCode().toLowerCase());
		request.queryParam("limit", "15");
		request.queryParam("userip", props.getIpAddress());
		request.queryParam("useragent", props.getUserAgent());
		request.queryParam("highlight", "1");

	
		
		ResponseEntity<String> resp = restTemplate.getForEntity(request.build().encode().toUri(), String.class);
		IndeedParser parser = new IndeedParser();
		System.out.println("request url : "+request.build().encode().toUri());
		parser.parseJobs(offers, resp.getBody() );
		
		
		List<? extends HasLocation> offerPlaces = offers;
		locationService.resolveAllCoords(offerPlaces);
		
	}

	
	/**
	 * {@inheritDoc}
	 * 
	 * @throws UnsupportedEncodingException the unsupported encoding exception
	 * @throws IndeedError the indeed error
	 */
	@Override
	public void loadAdvancedJobs(ArrayList<JobOffer> offers, ClientProperties props, AdvancedSearch search)
			throws Exception {
		// TODO Auto-generated method stub
		
	}
	
	
}
