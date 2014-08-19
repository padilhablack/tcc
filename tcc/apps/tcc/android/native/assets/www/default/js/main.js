
/* JavaScript content from js/main.js in folder common */

var path = "";// caminho padrão
var USER;
var RA , USUARIO;

function wlCommonInit(){

	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}

	$(document).ready(function(){
		$("#login").hide();
		verificaLogin();
	});

}

function verificaLogin(){

	var invocationData = {
			adapter : "autenticacaoAdapter", 
			procedure : "getUsuarioActive",
			parameters : [], 

	};
	WL.Client.invokeProcedure(invocationData,{
		onSuccess : activesucess,
		onFailure : activefailure
	});

	function activesucess(response){

		result  = response.invocationResult.user
		
		//precarrega as opções
		RA = result.attributes.ra; 
		USUARIO  = result.displayName	
		
		
		
		if(result == null){
			$("#login").show();
			$.mobile.changePage("#login");
		}else{
			loadCurso(RA);
			loadEmprestimos(RA);
			loadReservas(RA);
			carregaAno(RA);
			$.mobile.changePage("#menu");
			$("#display-name-user").text(USUARIO);
		}	
	}

	function activefailure(){
		alert('ERRO');
	}

}



/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}