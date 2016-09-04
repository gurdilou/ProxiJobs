package com.proxijobs.controller.jobs.wrappers;

import com.proxijobs.model.ClientProperties;
import com.proxijobs.model.QuickSearch;

public class ReqWrapQuickJobs {
	
	private QuickSearch search;
	private ClientProperties props;
	
	
	
	public QuickSearch getSearch() {
		return search;
	}
	public void setSearch(QuickSearch search) {
		this.search = search;
	}
	public ClientProperties getProps() {
		return props;
	}
	public void setProps(ClientProperties props) {
		this.props = props;
	}
}
