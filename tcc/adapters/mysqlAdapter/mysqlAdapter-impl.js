/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
 
function retornaCurso(ra) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getCurso",
		parameters : [ra]
	});
}


function retornaTurma(ra,curso) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getTurma",
		parameters : [ra,curso]
	});
}


function retornaPeriodo(ra,curso,turma) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getPeriodo",
		parameters : [ra,curso,turma]
	});
}

function retornaDisciplina(ra,curso,turma,periodo) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getDisciplina",
		parameters : [ra,curso,turma,periodo]
	});
}

function retornaNotas(ra,curso,turma,periodo,disciplina) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getNotas",
		parameters : [ra,curso,turma,periodo,disciplina]
	});
}

function retornaAulas(ra,curso,turma,periodo,disciplina) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getAulas",
		parameters : [ra,curso,turma,periodo,disciplina]
	});
}


function retornaMaterial(pesquisa) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getMaterial",
		parameters : [pesquisa]
	});
}

function setEmprestimos(ra,material,data) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "setEmprestimo",
		parameters : [ra,material,data]
	});
}

function selectEmprestimos(ra) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getEmprestimo",
		parameters : [ra]
	});
}

function selectReserva(ra){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "selectReserva",
		parameters : [ra]
	});
}

function criaReserva(ra, material){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "setReserva",
		parameters : [ra, material]
	});
}

function selectFinanceiro(ra, ano){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getFinanceiroAno",
		parameters : [ra, ano]
	});
}
function FinanceiroAnoMes(ra){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getAnoMes",
		parameters : [ra]
	});
}

function getLogin(ra,senha){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "login",
		parameters : [ra,senha]
	});
}