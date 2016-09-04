package com.proxijobs.model;

/**
 * The object can tell its location
 * @author Thomas Luce
 *
 */
public interface HasLocation {
	
	/**
	 * @return the name of the place
	 */
	public String getPlace();
	
	/**
	 * @return the city
	 */
	public String getCity();
	
	/**
	 * @return the country
	 */
	public String getCountry();
	
	/**
	 * @return the latitude
	 */
	public double getLatitude();


	/**
	 * @param latitude the latitude to set
	 */
	public void setLatitude(double latitude);

	/**
	 * @return the longitude
	 */
	public double getLongitude();

	/**
	 * @param longitude the longitude to set
	 */
	public void setLongitude(double longitude);
}
