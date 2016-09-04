package com.proxijobs.controller.location;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Future;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proxijobs.model.HasLocation;
import com.proxijobs.parser.LocationResolveException;


/**
 * Service de résolution d'addresses asynchrone
 * @author Thomas Luce
 *
 */
@Service
public class LocationResolver {
	
	private LocationResolveAsync asyncResolve;
	
	@Autowired
	public LocationResolver(LocationResolveAsync asyncResolve) {
		this.asyncResolve = asyncResolve;
	}


	/**
	 * Resolve a set of coordinates
	 * @param offers
	 * @throws LocationResolveException 
	 * @throws InterruptedException 
	 */
	public void resolveAllCoords(List<? extends HasLocation> places) throws LocationResolveException, InterruptedException {
		List<Future<HasLocation>> promises = new ArrayList<Future<HasLocation>>();
		
		for(HasLocation place : places) {
			Future<HasLocation> promiseLocation = asyncResolve.findLocation(place);
			promises.add(promiseLocation);
		}
		
		while(!allPromisesResolved(promises)) {
			Thread.sleep(25);
		}
	}


	private boolean allPromisesResolved(List<Future<HasLocation>> promises) {
		boolean finished = true;
		
		Iterator<Future<HasLocation>> iterator = promises.iterator();
		while(iterator.hasNext() && finished) {
			Future<HasLocation> promise = iterator.next();
			
			if(!promise.isDone()) {
				finished = false;
			}
		}
		
		return finished;
	}
}
