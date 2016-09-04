package com.proxijobs.model;

/**
 * A map point
 * 
 * @author Thomas Luce
 *
 */
public class Position {
	
	private double latitude = 0;
	private double longitude = 0;
	private String address = "";
	
	
	
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double lattitude) {
		this.latitude = lattitude;
	}
	
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	
	
}
