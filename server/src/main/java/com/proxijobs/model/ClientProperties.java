package com.proxijobs.model;


/**
 * The Class ClientProperties.
 * Contient les infos sur le client
 */
public class ClientProperties {

	//----------------------------------------------------------------------------------------------------------------------------
	//																	CONSTANTS
	//----------------------------------------------------------------------------------------------------------------------------

	//----------------------------------------------------------------------------------------------------------------------------
	//																	VARIABLES
	//----------------------------------------------------------------------------------------------------------------------------
	private String ipAddress = "";
	private String  userAgent = "";
	private String countryCode = "";
	//----------------------------------------------------------------------------------------------------------------------------
	//																	CONSTRUCTOR
	//----------------------------------------------------------------------------------------------------------------------------

	//----------------------------------------------------------------------------------------------------------------------------
	//																	PRIVATE
	//----------------------------------------------------------------------------------------------------------------------------

	//----------------------------------------------------------------------------------------------------------------------------
	//																	GETTER/SETTER
	//----------------------------------------------------------------------------------------------------------------------------
	/**
	 * Gets the ip address.
	 *
	 * @return the ipAddress
	 */
	public String getIpAddress() {
		return ipAddress;
	}
	
	/**
	 * Sets the ip address.
	 *
	 * @param ipAddress the ipAddress to set
	 */
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}
	
	/**
	 * Gets the user agent.
	 *
	 * @return the userAgent
	 */
	public String getUserAgent() {
		return userAgent;
	}
	
	/**
	 * Sets the user agent.
	 *
	 * @param userAgent the userAgent to set
	 */
	public void setUserAgent(String userAgent) {
		this.userAgent = userAgent;
	}
	
	/**
	 * Gets the country code.
	 *
	 * @return the countryCode
	 */
	public String getCountryCode() {
		return countryCode;
	}
	
	/**
	 * Sets the country code.
	 *
	 * @param countryCode the countryCode to set
	 */
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	//----------------------------------------------------------------------------------------------------------------------------
	//																	PUBLIC
	//----------------------------------------------------------------------------------------------------------------------------

}
