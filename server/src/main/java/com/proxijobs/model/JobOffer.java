package com.proxijobs.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Une offre d'emploi
 * @author tluce
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class JobOffer { 
	
	private double id = 0;
	private String jobtitle = "";
	private String company = "";
	private String city = "";
	private String state = "";
	private String country = "";
	private String formattedLocation = "";
	private String source = "";
	private String date = "";
	private String snippet = "";
	private String url = "";
	private double latitude = 0;
	private double longitude = 0;
	private String provider = "";
	private String jobkey = "";
	private boolean sponsored = false;
	private boolean expired = false;
	private String formattedLocationFull = "";
	private String formattedRelativeTime = "";
	private String salary = "";
	
	/**
	 * Constructor
	 */
	public JobOffer() {
		
	}


	/**
	 * @return the id
	 */
	public double getId() {
		return id;
	}


	/**
	 * @param id the id to set
	 */
	public void setId(double id) {
		this.id = id;
	}


	/**
	 * @return the jobtitle
	 */
	public String getJobtitle() {
		return jobtitle;
	}


	/**
	 * @param jobtitle the jobtitle to set
	 */
	public void setJobtitle(String jobtitle) {
		this.jobtitle = jobtitle;
	}


	/**
	 * @return the company
	 */
	public String getCompany() {
		return company;
	}


	/**
	 * @param company the company to set
	 */
	public void setCompany(String company) {
		this.company = company;
	}


	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}


	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}


	/**
	 * @return the state
	 */
	public String getState() {
		return state;
	}


	/**
	 * @param state the state to set
	 */
	public void setState(String state) {
		this.state = state;
	}


	/**
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}


	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		this.country = country;
	}


	/**
	 * @return the formattedLocation
	 */
	public String getFormattedLocation() {
		return formattedLocation;
	}


	/**
	 * @param formattedLocation the formattedLocation to set
	 */
	public void setFormattedLocation(String formattedLocation) {
		this.formattedLocation = formattedLocation;
	}


	/**
	 * @return the source
	 */
	public String getSource() {
		return source;
	}


	/**
	 * @param source the source to set
	 */
	public void setSource(String source) {
		this.source = source;
	}


	/**
	 * @return the date
	 */
	public String getDate() {
		return date;
	}


	/**
	 * @param date the date to set
	 */
	public void setDate(String date) {
		this.date = date;
	}


	/**
	 * @return the snippet
	 */
	public String getSnippet() {
		return snippet;
	}


	/**
	 * @param snippet the snippet to set
	 */
	public void setSnippet(String snippet) {
		this.snippet = snippet;
	}


	/**
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}


	/**
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}


	/**
	 * @return the latitude
	 */
	public double getLatitude() {
		return latitude;
	}


	/**
	 * @param latitude the latitude to set
	 */
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}


	/**
	 * @return the longitude
	 */
	public double getLongitude() {
		return longitude;
	}


	/**
	 * @param longitude the longitude to set
	 */
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}


	/**
	 * @return the provider
	 */
	public String getProvider() {
		return provider;
	}


	/**
	 * @param provider the provider to set
	 */
	public void setProvider(String provider) {
		this.provider = provider;
	}


	/**
	 * @return the jobkey
	 */
	public String getJobkey() {
		return jobkey;
	}


	/**
	 * @param jobkey the jobkey to set
	 */
	public void setJobkey(String jobkey) {
		this.jobkey = jobkey;
	}


	/**
	 * @return the sponsored
	 */
	public boolean isSponsored() {
		return sponsored;
	}


	/**
	 * @param sponsored the sponsored to set
	 */
	public void setSponsored(boolean sponsored) {
		this.sponsored = sponsored;
	}


	/**
	 * @return the expired
	 */
	public boolean isExpired() {
		return expired;
	}


	/**
	 * @param expired the expired to set
	 */
	public void setExpired(boolean expired) {
		this.expired = expired;
	}


	/**
	 * @return the formattedLocationFull
	 */
	public String getFormattedLocationFull() {
		return formattedLocationFull;
	}


	/**
	 * @param formattedLocationFull the formattedLocationFull to set
	 */
	public void setFormattedLocationFull(String formattedLocationFull) {
		this.formattedLocationFull = formattedLocationFull;
	}


	/**
	 * @return the formattedRelativeTime
	 */
	public String getFormattedRelativeTime() {
		return formattedRelativeTime;
	}


	/**
	 * @param formattedRelativeTime the formattedRelativeTime to set
	 */
	public void setFormattedRelativeTime(String formattedRelativeTime) {
		this.formattedRelativeTime = formattedRelativeTime;
	}


	/**
	 * @return the salary
	 */
	public String getSalary() {
		return salary;
	}


	/**
	 * @param salary the salary to set
	 */
	public void setSalary(String salary) {
		this.salary = salary;
	}
	
	
	
	
}
