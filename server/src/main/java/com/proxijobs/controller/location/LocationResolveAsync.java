package com.proxijobs.controller.location;

import java.util.concurrent.Future;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.proxijobs.model.HasLocation;
import com.proxijobs.model.Position;
import com.proxijobs.parser.LocationParser;
import com.proxijobs.parser.LocationResolveException;

@Service
public class LocationResolveAsync {
	private LocationParser parser;

	@Autowired
	public LocationResolveAsync(LocationParser parser) {
		super();
		this.parser = parser;
	}
	
	

	@Async
    public Future<HasLocation> findLocation(HasLocation place) throws LocationResolveException {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);

		String url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
		String address = place.getPlace()+", "+place.getCity()+", "+place.getCountry();
		
		UriComponentsBuilder request = UriComponentsBuilder.fromHttpUrl(url);
		request.queryParam("query", address);
		request.queryParam("key", "AIzaSyC_u2NmSUvEwkfzMTWhqrAEqMwXC8rlPIA");
		
		
//		System.out.println("request url : "+request.build().encode().toUri());
		ResponseEntity<String> resp = restTemplate.getForEntity(request.build().encode().toUri(), String.class);

		Position result = parser.parsePosition(resp);
		if((result != null) && (isCityStillValid(place, result))){
			place.setLatitude(result.getLatitude());
			place.setLongitude(result.getLongitude());		
		}

//		System.out.println("End verfi async");
		
		return new AsyncResult<HasLocation>(place);

    }



	private boolean isCityStillValid(HasLocation place, Position result) {
		if(!result.getAddress().isEmpty()) {
			if(!result.getAddress().contains(place.getCity())){
				return false;
			}
		}
		return true;
	}
}
