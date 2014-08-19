/**
 * Desenvolvido por Jonas Padilha
 */


//Fun��o Gen�rica de execu��o de procedures

function executaProcedure(pametros, adapter, procedure, sucess, failure){
	var invocationData = {
			adapter : adapter, 
			procedure : procedure,
			parameters : pametros, 

	};
	WL.Client.invokeProcedure(invocationData,{
		onSuccess : sucess,
		onFailure : failure
	});

}

//Fun��o Gen�rica de execu��o de procedures

function habilita(elemento){
	$(elemento).show();
}
function desabilita(elemento){
	$(elemento).hide();
}


//FUN��O FALHA DE CONEX�O
function failConnection(result){
		WL.SimpleDialog.show(
				"Falha de Conexão!"," Verifique a sua conexão e tente novamente!", 
				[{text: "Reiniciar", handler:WL.Client.reloadApp  
				}]
		);
}

function habilita(elemento){
	$(elemento).show();
}
function desabilita(elemento){
	$(elemento).hide();
}

//Mensagens de alerta
function showAlert(type,message) {
	  $('.alert').removeClass('invisible').addClass( 'ui-corner-all ui-shadow '+type).html(message).fadeIn();
		  
	  $('.alert').click(function() {
		    closeAlert();
		  });
	
		 
		function closeAlert() {
		  $('#alert').fadeOut();
		}
		
		setTimeout(function(){ $('.alert').fadeOut(); }, 5000);
	}


function refreshPage()
{
    jQuery.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'none',
        reloadPage: true
    });
}

////Fun��o Gen�rica de execu��o de procedures
//function executaProcedure(pametros, adapter, procedure, sucess, failure){
//var invocationData = {
//adapter : adapter, 
//procedure : procedure,
//parameters : pametros, 

//};
//WL.Client.invokeProcedure(invocationData,{
//onSuccess : sucess,
//onFailure : failure
//});

//}
