
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
		$.mobile.loading( "hide" );result  = response.invocationResult.user

//		/precarrega as opções
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

curso = 800,ra = 86539,ano = 2014,periodo = 20141;
var invocationData = {
		adapter : "SistemaUNASP", 
		procedure : "retornaTurma",
		parameters : [curso,ra,ano,periodo], 

};

WL.Client.invokeProcedure(invocationData,{
	onSuccess : function(){
		alert('SIM')
	},
	onFailure : function(){
		alert('Não');
	}

});



