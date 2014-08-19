
var UserIdentify;

function onAuthRequired(headers, errorMessage){
	errorMessage = errorMessage ? errorMessage : null;
	return {
		authRequired: true,
		errorMessage: errorMessage
	};
}

function onLogout(){
	WL.Server.setActiveUser("UnaspRealm", null);
	WL.Logger.debug("Logged out");
}


function getLogin(ra,senha){
	// CHAMA A PROCEDURE
	result =  WL.Server.invokeSQLStoredProcedure({
		procedure : "login",
		parameters : [ra,senha]
	});

	// RECEBE O RESULTADO
	aux = result.resultSet;
	
	if(aux.length > 0){
		WL.Logger.debug("Login e senha correta");

		// CRIA UM OBJETO DE IDENTIDADE DO USUÁRIO
		userIdentity = {
				userId: aux[0].nome,
				displayName: aux[0].nome, 
				attributes: {
					ra: aux[0].idAluno
				}
		}
		//GRAVA NA SECAO
		WL.Server.setActiveUser("UnaspRealm", userIdentity);
		WL.Logger.debug("Acesso autorizado");

		//RETORNA OS DADOS DO PROCESSO
		return { authRequired : false,userIdentity : userIdentity}
		
		// CASO OCORRER ERRO
	}else if(aux[0].isSuccessful == false){
		WL.Logger.debug("Falha na autenticação");
		return onAuthRequired(null, "Falha na autenticação");
	}
}
// RETORNA O DADOS DA SEÇAO ATIVA
function getUsuarioActive(){
	return {
		user : WL.Server.getActiveUser("UnaspRealm")
	};
}
