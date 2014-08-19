
/* JavaScript content from js/auth.js in folder common */
/**
 * 
 */



var unaspChallengeHandler = WL.Client.createChallengeHandler("UnaspRealm");

unaspChallengeHandler.isCustomResponse = function(response) {
	if (!response || !response.responseJSON	|| response.responseText === null) {
		return false;
	}
	if (typeof(response.responseJSON.authRequired) !== 'undefined'){
		return true;
	} else {
		return false;
	}
};

unaspChallengeHandler.handleChallenge = function(response){
	var authRequired = response.responseJSON.authRequired;
	var userSession = response.responseJSON.userIdentity;

	if (authRequired == true){
//		alert(JSON.stringify(authRequired));
		alert("Usuário ou senha incorreta");
		$("#usuario").val("");
		$("#senha").val("");
		unaspChallengeHandler.submitFailure();

	} else if (authRequired == false){

		USER = {
				NAME : userSession.displayName,
				RA : userSession.attributes.ra
		}
		
		RA  = parseInt(USER.RA), USUARIO = USER.NAME
		WL.Client.reloadApp();
//		alert(JSON.stringify(RA));
		$.mobile.changePage("#menu");
		$("#display-name-user").text(USUARIO);
		unaspChallengeHandler.submitSuccess();
	}
};

//envia dados para login
$("#envia").bind('click', function () {
	var username = $("#usuario").val();
	var password = $("#senha").val();
	
	if(username == "" || password == ""){
		alert("Digite os dados corretamente");
		$("#usuario").val("");
		$("#senha").val("");
	}
	
	var invocationData = {
			adapter : "autenticacaoAdapter",
			procedure : "getLogin",
			parameters : [username, password]
	};

	unaspChallengeHandler.submitAdapterAuthentication(invocationData, {});
	return false;
});
//faz logout

$(".sair").click(function(){

	setTimeout(loading("show-page-loading-msg", "saindo"), 
			100);
	WL.Client.logout('UnaspRealm', {onSuccess:WL.Client.reloadApp});
	$.mobile.changePage("#login");
	return false;
})



