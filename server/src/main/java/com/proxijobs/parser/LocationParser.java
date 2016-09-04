package com.proxijobs.parser;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.Application;
import com.proxijobs.controller.location.GoogleMapApiConsts;
import com.proxijobs.model.Position;

@Component
public class LocationParser {

	private static final String RESULTS = "results";
	private static final String GEOMETRY = "geometry";
	private static final String LOCATION = "location";
	private static final String LATITUDE = "lat";
	private static final String LONGITUDE = "lng";
	private static final String STATUS = "status";
	private static final String ADDRESS = "formatted_address";
	
	

	
	private static final Logger log = LoggerFactory.getLogger(Application.class);

	
	
	public LocationParser() { 
	}

	public Position parsePosition(ResponseEntity<String> resp) throws LocationResolveException {
		if(resp.getHeaders().getContentType().isCompatibleWith(MediaType.APPLICATION_JSON)) {
			JSONObject respJSON = null;
			try{
				respJSON = new JSONObject(resp.getBody());
				
				if(responseIsValid(respJSON)){
					if(respJSON.has(RESULTS)){
						JSONArray results = respJSON.getJSONArray(RESULTS);
						if(results.length() >= 1){
							JSONObject result = results.getJSONObject(0);
							JSONObject place = result.getJSONObject(GEOMETRY).getJSONObject(LOCATION);
							String address = result.getString(ADDRESS);
							
							Position pos = new Position();
							pos.setLatitude(place.getDouble(LATITUDE));
							pos.setLongitude(place.getDouble(LONGITUDE));
							pos.setAddress(address);
							return pos;
						}
					}
				}else{
					return null;
				}
			}catch (Exception e) {
				throw new LocationResolveException(e);
			}
		}
		throw new LocationResolveException("API didn't answer correctly.");
	}

	
	private boolean responseIsValid(JSONObject respJSON) {
		if(respJSON.has(STATUS)) {
			String status = respJSON.getString(STATUS);
			
			if(status.equals(GoogleMapApiConsts.RESP_OVER_QUERY_LIMIT)) {
				log.error("Map API RESP_OVER_QUERY_LIMIT.");
			}
			return status.equals(GoogleMapApiConsts.RESP_OK);
		}
		return false;
	}

}
