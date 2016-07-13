package com.proxijobs.parser;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

import com.proxijobs.model.JobOffer;

public class IndeedParser {

	private static final String ERROR_KEY = "error";
	private static final String RESULTS_KEY = "results";
	private static final String JOB_TITLE_KEY = "jobtitle";
	private static final String COMPANY_KEY = "company";
	private static final String CITY_KEY = "city";
	private static final String STATE_KEY = "state";
	private static final String COUNTRY_KEY = "country";
	private static final String LOCATION_KEY = "formattedLocation";
	private static final String SOURCE_KEY = "source";
	private static final String DATE_KEY = "date";
	private static final String SNIPPER_KEY = "snippet";
	private static final String URL_KEY = "url";
	private static final String LATITUDE_KEY = "latitude";
	private static final String LONGITUDE_KEY = "longitude";
	private static final String JOB_KEY_KEY = "jobkey";
	private static final String SPONSORED_KEY = "sponsored";
	private static final String EXPIRED_KEY = "expired";
	private static final String LOCATION_FULL_KEY = "formattedLocationFull";
	private static final String RELATIVE_TIME_KEY = "formattedRelativeTime";

	//----------------------------------------------------------------------------------------------------------------------------
	//																	CONSTANTS
	//----------------------------------------------------------------------------------------------------------------------------

	//----------------------------------------------------------------------------------------------------------------------------
	//																	VARIABLES
	//----------------------------------------------------------------------------------------------------------------------------

	//----------------------------------------------------------------------------------------------------------------------------
	//																	CONSTRUCTOR
	//----------------------------------------------------------------------------------------------------------------------------
	public IndeedParser() {
		
	}

	//----------------------------------------------------------------------------------------------------------------------------
	//																	PRIVATE
	//----------------------------------------------------------------------------------------------------------------------------

	/**
	 * Parses the offer contained in JSON object.
	 *
	 * @param offerJSON the offer JSON
	 * @param offersFilled the offers filled
	 */
	private void parseOfferJSON(JSONObject offerJSON, ArrayList<JobOffer> offersFilled) {
		JobOffer offer =  new JobOffer();
		offer.setJobtitle(offerJSON.getString(JOB_TITLE_KEY));
		offer.setCompany(offerJSON.getString(COMPANY_KEY));
		offer.setCity(offerJSON.getString(CITY_KEY));
		offer.setCountry(offerJSON.getString(COUNTRY_KEY));
		offer.setState(offerJSON.getString(STATE_KEY));
		offer.setFormattedLocation(offerJSON.getString(LOCATION_KEY));
		offer.setSource(offerJSON.getString(SOURCE_KEY));
		offer.setDate(offerJSON.getString(DATE_KEY));
		offer.setSnippet(offerJSON.getString(SNIPPER_KEY));
		offer.setUrl(offerJSON.getString(URL_KEY));
		offer.setLatitude(offerJSON.getDouble(LATITUDE_KEY));
		offer.setLongitude(offerJSON.getDouble(LONGITUDE_KEY));
		offer.setJobkey(offerJSON.getString(JOB_KEY_KEY));
		offer.setSponsored(offerJSON.getBoolean(SPONSORED_KEY));
		offer.setExpired(offerJSON.getBoolean(EXPIRED_KEY));
		offer.setFormattedLocationFull(offerJSON.getString(LOCATION_FULL_KEY));
		offer.setFormattedRelativeTime(offerJSON.getString(RELATIVE_TIME_KEY));
		
		
		offersFilled.add(offer);
	}
	//----------------------------------------------------------------------------------------------------------------------------
	//																	GETTER/SETTER
	//----------------------------------------------------------------------------------------------------------------------------

	//----------------------------------------------------------------------------------------------------------------------------
	//																	PUBLIC
	//----------------------------------------------------------------------------------------------------------------------------
	
	/**
	 * Parse les offres venant d'indeed
	 *
	 * @param offersFilled the offers filled
	 * @param indeedResponse the indeed response
	 * @throws IndeedError 
	 */
	public void parseJobs(ArrayList<JobOffer> offersFilled, String indeedResponse) throws IndeedError {
		JSONObject respJSON = null;
		try{
			respJSON = new JSONObject(indeedResponse);
		}catch (Exception e) {
			throw new IndeedError(e.getMessage());
		}
		
		
		if(respJSON != null){
			if(!respJSON.has(ERROR_KEY)){
				JSONArray listResults = respJSON.getJSONArray(RESULTS_KEY);
				for (int i = 0; i < listResults.length(); i++) {
					JSONObject result = listResults.getJSONObject(i);
					parseOfferJSON(result, offersFilled);
				}
				
			}else{
				String err = respJSON.getString(ERROR_KEY);
				throw new IndeedError(err);
			}
		}
	}


}
