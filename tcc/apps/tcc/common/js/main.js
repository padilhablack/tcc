
var path = "";// caminho padrão
var USER;
var RA , USUARIO;

function wlCommonInit(){

	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}

	$(document).ready(function(){
		$.getScript(path+"js/functions.js");
		$.getScript(path+"js/view/view-notas.js");
		$.getScript(path+"js/view/view-biblioteca.js");
		$.getScript(path+"js/view/view-financeiro.js");
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


