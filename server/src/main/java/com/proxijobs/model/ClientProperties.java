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
	private String userAgent = "";
	private String countryCode = "";
	private AppUser user = null;
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
	 * @return the ip address
	 */
	public String getIpAddress() {
		return ipAddress;
	}

	/**
	 * Sets the ip address.
	 *
	 * @param ipAddress the new ip address
	 */
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	/**
	 * Gets the user agent.
	 *
	 * @return the user agent
	 */
	public String getUserAgent() {
		return userAgent;
	}

	/**
	 * Sets the user agent.
	 *
	 * @param userAgent the new user agent
	 */
	public void setUserAgent(String userAgent) {
		this.userAgent = userAgent;
	}

	/**
	 * Gets the country code.
	 *
	 * @return the country code
	 */
	public String getCountryCode() {
		return countryCode;
	}

	/**
	 * Sets the country code.
	 *
	 * @param countryCode the new country code
	 */
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	
	/**
	 * Gets the user.
	 *
	 * @return the user
	 */
	public AppUser getUser() {
		return user;
	}

	/**
	 * Sets the user.
	 *
	 * @param user the new user
	 */
	public void setUser(AppUser user) {
		this.user = user;
	}	
	
	//----------------------------------------------------------------------------------------------------------------------------
	//																	PUBLIC
	//----------------------------------------------------------------------------------------------------------------------------





}
