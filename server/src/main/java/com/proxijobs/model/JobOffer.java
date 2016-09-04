package com.proxijobs.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// TODO: Auto-generated Javadoc
/**
 * Une offre d'emploi.
 *
 * @author tluce
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class JobOffer implements HasLocation { 

	/** The id. */
	private double id = 0;
	
	/** The jobtitle. */
	private String jobtitle = "";
	
	/** The company. */
	private String company = "";
	
	/** The city. */
	private String city = "";
	
	/** The state. */
	private String state = "";
	
	/** The country. */
	private String country = "";
	
	/** The formatted location. */
	private String formattedLocation = "";
	
	/** The source. */
	private String source = "";
	
	/** The date. */
	private String date = "";
	
	/** The snippet. */
	private String snippet = "";
	
	/** The url. */
	private String url = "";
	
	/** The latitude. */
	private double latitude = 0;
	
	/** The longitude. */
	private double longitude = 0;
	
	/** The provider. */
	private String provider = "";
	
	/** The jobkey. */
	private String jobkey = "";
	
	/** The sponsored. */
	private boolean sponsored = false;
	
	/** The expired. */
	private boolean expired = false;
	
	/** The formatted location full. */
	private String formattedLocationFull = "";
	
	/** The formatted relative time. */
	private String formattedRelativeTime = "";
	
	/** The salary. */
	private String salary = "";
	

	/**
	 * Constructor.
	 */
	public JobOffer() {

	}


	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public double getId() {
		return id;
	}


	/**
	 * Sets the id.
	 *
	 * @param id the id to set
	 */
	public void setId(double id) {
		this.id = id;
	}


	/**
	 * Gets the jobtitle.
	 *
	 * @return the jobtitle
	 */
	public String getJobtitle() {
		return jobtitle;
	}


	/**
	 * Sets the jobtitle.
	 *
	 * @param jobtitle the jobtitle to set
	 */
	public void setJobtitle(String jobtitle) {
		this.jobtitle = jobtitle;
	}


	/**
	 * Gets the company.
	 *
	 * @return the company
	 */
	public String getCompany() {
		return company;
	}


	/**
	 * Sets the company.
	 *
	 * @param company the company to set
	 */
	public void setCompany(String company) {
		this.company = company;
	}



	/* (non-Javadoc)
	 * @see com.proxijobs.model.HasLocation#getCity()
	 */
	public String getCity() {
		return city;
	}


	/**
	 * Sets the city.
	 *
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}


	/**
	 * Gets the state.
	 *
	 * @return the state
	 */
	public String getState() {
		return state;
	}


	/**
	 * Sets the state.
	 *
	 * @param state the state to set
	 */
	public void setState(String state) {
		this.state = state;
	}



	/* (non-Javadoc)
	 * @see com.proxijobs.model.HasLocation#getCountry()
	 */
	public String getCountry() {
		return country;
	}


	/**
	 * Sets the country.
	 *
	 * @param country the new country
	 */
	public void setCountry(String country) {
		this.country = country;
	}


	/**
	 * Gets the formatted location.
	 *
	 * @return the formattedLocation
	 */
	public String getFormattedLocation() {
		return formattedLocation;
	}


	/**
	 * Sets the formatted location.
	 *
	 * @param formattedLocation the formattedLocation to set
	 */
	public void setFormattedLocation(String formattedLocation) {
		this.formattedLocation = formattedLocation;
	}


	/**
	 * Gets the source.
	 *
	 * @return the source
	 */
	public String getSource() {
		return source;
	}


	/**
	 * Sets the source.
	 *
	 * @param source the source to set
	 */
	public void setSource(String source) {
		this.source = source;
	}


	/**
	 * Gets the date.
	 *
	 * @return the date
	 */
	public String getDate() {
		return date;
	}


	/**
	 * Sets the date.
	 *
	 * @param date the date to set
	 */
	public void setDate(String date) {
		this.date = date;
	}


	/**
	 * Gets the snippet.
	 *
	 * @return the snippet
	 */
	public String getSnippet() {
		return snippet;
	}


	/**
	 * Sets the snippet.
	 *
	 * @param snippet the snippet to set
	 */
	public void setSnippet(String snippet) {
		this.snippet = snippet;
	}


	/**
	 * Gets the url.
	 *
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}


	/**
	 * Sets the url.
	 *
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}



	/* (non-Javadoc)
	 * @see com.proxijobs.model.HasLocation#getLatitude()
	 */
	public double getLatitude() {
		return latitude;
	}



	/* (non-Javadoc)
	 * @see com.proxijobs.model.HasLocation#setLatitude(double)
	 */
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}



	/* (non-Javadoc)
	 * @see com.proxijobs.model.HasLocation#getLongitude()
	 */
	public double getLongitude() {
		return longitude;
	}


	
	/* (non-Javadoc)
	 * @see com.proxijobs.model.HasLocation#setLongitude(double)
	 */
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}


	/**
	 * Gets the provider.
	 *
	 * @return the provider
	 */
	public String getProvider() {
		return provider;
	}


	/**
	 * Sets the provider.
	 *
	 * @param provider the provider to set
	 */
	public void setProvider(String provider) {
		this.provider = provider;
	}


	/**
	 * Gets the jobkey.
	 *
	 * @return the jobkey
	 */
	public String getJobkey() {
		return jobkey;
	}


	/**
	 * Sets the jobkey.
	 *
	 * @param jobkey the jobkey to set
	 */
	public void setJobkey(String jobkey) {
		this.jobkey = jobkey;
	}


	/**
	 * Checks if is sponsored.
	 *
	 * @return the sponsored
	 */
	public boolean isSponsored() {
		return sponsored;
	}


	/**
	 * Sets the sponsored.
	 *
	 * @param sponsored the sponsored to set
	 */
	public void setSponsored(boolean sponsored) {
		this.sponsored = sponsored;
	}


	/**
	 * Checks if is expired.
	 *
	 * @return the expired
	 */
	public boolean isExpired() {
		return expired;
	}


	/**
	 * Sets the expired.
	 *
	 * @param expired the expired to set
	 */
	public void setExpired(boolean expired) {
		this.expired = expired;
	}


	/**
	 * Gets the formatted location full.
	 *
	 * @return the formattedLocationFull
	 */
	public String getFormattedLocationFull() {
		return formattedLocationFull;
	}


	/**
	 * Sets the formatted location full.
	 *
	 * @param formattedLocationFull the formattedLocationFull to set
	 */
	public void setFormattedLocationFull(String formattedLocationFull) {
		this.formattedLocationFull = formattedLocationFull;
	}


	/**
	 * Gets the formatted relative time.
	 *
	 * @return the formattedRelativeTime
	 */
	public String getFormattedRelativeTime() {
		return formattedRelativeTime;
	}


	/**
	 * Sets the formatted relative time.
	 *
	 * @param formattedRelativeTime the formattedRelativeTime to set
	 */
	public void setFormattedRelativeTime(String formattedRelativeTime) {
		this.formattedRelativeTime = formattedRelativeTime;
	}


	/**
	 * Gets the salary.
	 *
	 * @return the salary
	 */
	public String getSalary() {
		return salary;
	}


	/**
	 * Sets the salary.
	 *
	 * @param salary the salary to set
	 */
	public void setSalary(String salary) {
		this.salary = salary;
	}


	/* (non-Javadoc)
	 * @see com.proxijobs.model.HasLocation#getPlace()
	 */
	@Override
	public String getPlace() {
		return this.getCompany();
	}




}
