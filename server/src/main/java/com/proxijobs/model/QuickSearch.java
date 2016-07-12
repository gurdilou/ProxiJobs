package com.proxijobs.model;

public class QuickSearch {
	private String job = "";
	private String city = "";
	private String perimeter = "";
	
	
	/**
	 * Constrcutor bean
	 */
	public QuickSearch() {
		
	}
	
	/**
	 * Constructor
	 * @param job
	 * @param city
	 * @param perimeter
	 */
	public QuickSearch(String job, String city, String perimeter) {
		super();
		this.job = job;
		this.city = city;
		this.perimeter = perimeter;
	}


	/**
	 * @return the job
	 */
	public String getJob() {
		return job;
	}


	/**
	 * @param job the job to set
	 */
	public void setJob(String job) {
		this.job = job;
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
	 * @return the perimeter
	 */
	public String getPerimeter() {
		return perimeter;
	}


	/**
	 * @param perimeter the perimeter to set
	 */
	public void setPerimeter(String perimeter) {
		this.perimeter = perimeter;
	}

	/**
	 * retourne le perimètre en kilomètre
	 * 
	 * @return the perimeter distance
	 */
	public String getPerimeterDistance() {
		//TODO
		return this.perimeter;
	}
	
	

}
