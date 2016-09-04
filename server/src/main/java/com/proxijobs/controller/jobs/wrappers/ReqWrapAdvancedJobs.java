package com.proxijobs.controller.jobs.wrappers;

import com.proxijobs.model.AdvancedSearch;
import com.proxijobs.model.ClientProperties;

public class ReqWrapAdvancedJobs {
	private ClientProperties props;
	private AdvancedSearch search;
	
	
	public ClientProperties getProps() {
		return props;
	}
	public void setProps(ClientProperties props) {
		this.props = props;
	}
	public AdvancedSearch getSearch() {
		return search;
	}
	public void setSearch(AdvancedSearch search) {
		this.search = search;
	}
	
	
	
	
}
