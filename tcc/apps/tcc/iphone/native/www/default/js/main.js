
/* JavaScript content from js/main.js in folder common */

var path = "";// caminho padrão
var USER;
var RA , USUARIO;

function wlCommonInit(){

	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}


	$(document).ready(function(){
		verificaLogin();
	})


}

function verificaLogin(){
	
	loading("show-page-loading-msg","Carregando..");
	
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
		$.mobile.loading( "hide" );
		result  = response.invocationResult.user

		//precarrega as opções
		RA = result.attributes.ra; 
		USUARIO  = result.displayName	



		if(result !== null){
			$("#login").hide();
			loadCurso(RA);
			loadEmprestimos(RA);
			loadReservas(RA);
			carregaAno(RA);
			$.mobile.changePage("#menu");
			$("#display-name-user").text(USUARIO);

		}else{
			$.mobile.loading( "hide" );
			$("#login").show();
			$.mobile.changePage("#login");
		}	
	}

	function activefailure(){
		showAlert("alert-new","<p>Falha na conexao!Verifique e tente novamente</p>");
		$.mobile.loading( "hide" );fadeOut("slow");
	}

}



/* JavaScript content from js/main.js in folder iphone */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}