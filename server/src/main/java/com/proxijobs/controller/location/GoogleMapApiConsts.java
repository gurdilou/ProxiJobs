package com.proxijobs.controller.location;

public class GoogleMapApiConsts {
	public static final String RESP_ERROR = "ERROR"; // Un problème est survenu lors de la communication avec les serveurs Google.
	public static final String RESP_INVALID_REQUEST = "INVALID_REQUEST"; // Cette requête n'est pas valide.
	public static final String RESP_OK = "OK"; // La réponse contient un résultat valide.
	public static final String RESP_OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT"; // La page Web a dépassé son quota de requêtes.
	public static final String RESP_NOT_FOUND = "NOT_FOUND"; // Le point géographique référencé n'a pas été trouvé dans la base de données Places.
	public static final String RESP_REQUEST_DENIED = "REQUEST_DENIED"; // La page Web n'est pas autorisée à utiliser PlacesService.
	public static final String RESP_UNKNOWN_ERROR = "UNKNOWN_ERROR"; // La requête PlacesService n'a pas pu être traitée en raison d'une erreur de serveur. Si vous essayez à nouveau, la requête pourrait aboutir.
	public static final String RESP_ZERO_RESULTS = "ZERO_RESULTS"; // Aucun résultat n'a été trouvé pour cette requête.
}
