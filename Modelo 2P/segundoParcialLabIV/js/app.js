angular.module('app', ['app.controllers', 'ui.router', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.edit', 'angularFileUpload', 'satellizer'])

.run(function($rootScope){

	$rootScope.userActual = {};
	$rootScope.userActual.login = false;
	$rootScope.userActual.nombre = "Diana Man";

})


.config(function ($stateProvider, $urlRouterProvider, $authProvider){
	
	$authProvider.loginUrl ="labo42p/Modelo%202P/segundoParcialLabIV/ws1/servidor/jwt/php/auth.php";
	$authProvider.tokenName = "segundoparcial";
	$authProvider.tokenPrefix="Aplicacion";
	$authProvider.authHeader="data";

	$stateProvider
		.state("log", {
			url:"/log",
			abstract:true,
			templateUrl:"log-abstract.html"
		})

		.state("log.login", {
			url:"/login",
			views: {
				"registro": {
					templateUrl:"login.html",
					controller:"controlLogin"
				}
			}
		})

		.state("log.logout", {
			url:"/logout",
			cache:false,
			views: {
				"registro": {
					templateUrl:"logout.html",
					controller:"controlLogin"
				}
			}
		})

		.state("log.register", {
			url:"/register",
			views: {
				"registro": {
					templateUrl:"register.html",
					controller:"controlRegistro"
				}
			}
		})

		.state("bienvenida", {
			url:"/bienvenida",
			templateUrl: "bienvenida.html",
			controller:"BienvenidaCtrl"
		})

		.state("altaProductos", {
			url:"/altaProductos",
			templateUrl: "altaProductos.html",
			controller:"altaProductosCtrl"
		})

		.state("grillaProductos", {
			url:"/grillaProductos",
			templateUrl: "grillaProductos.html",
			controller:"grillaProductosCtrl"
		})

		.state("altaUsuarios", {
			url:"/altaUsuarios",
			templateUrl: "altaUsuarios.html",
			controller:"altaUsuariosCtrl"
		})

		.state("modificarUsuarios", {
			url:"/modificarUsuarios/{id}?:nombre:email:clave:tipo",
			templateUrl: "altaUsuarios.html",
			controller:"modificarUsuariosCtrl"
		})

		.state("grillaUsuarios", {
			url:"/grillaUsuarios",
			templateUrl: "grillaUsuarios.html",
			controller:"grillaUsuariosCtrl"
		})
		.state("directivaUsuarios", {
			url:"/directivaUsuarios",
			templateUrl: "directivaUsuarios.html",
			controller:"directivasCtrl"
		})

		.state("directivaProductos", {
			url:"/directivaProductos",
			templateUrl: "directivaProductos.html",
			controller:"directivasCtrl"
		})

	$urlRouterProvider.otherwise("/grillaUsuarios");

})


