package com.proxijobs.model;

/**
 * L'utilisateur de proxijobs.
 *
 * @author Thomas Luce
 */
public class AppUser {
	private boolean connected = false;
	private String token = "";
	
	
	public boolean isConnected() {
		return connected;
	}
	public void setConnected(boolean connected) {
		this.connected = connected;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
}
