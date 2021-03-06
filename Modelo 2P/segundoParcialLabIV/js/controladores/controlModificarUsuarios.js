angular.module('app.controllers')

.controller('modificarUsuariosCtrl', function($scope, $state, $timeout, $stateParams, UsuarioActual, UsuarioService){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.user = {};

	$scope.user.id = $stateParams.id;
	$scope.user.nombre = $stateParams.nombre;
	$scope.user.correo = $stateParams.correo;
	$scope.user.clave = $stateParams.clave;
	$scope.copiaclave = $stateParams.clave;
	$scope.user.tipo = $stateParams.tipo;
	$scope.user.foto = 'foto.jpg';

	console.log($scope.user);

	$scope.Guardar = function(){

		var user = JSON.stringify($scope.user);

		console.info("user", $scope.user);

		UsuarioService.modificarUsuario(user)
			.then(function (respuesta){

				console.info("respuesta", respuesta);

				$state.go('grillaUsuarios');

			}).catch(function (error){
				console.info("error", error);
			})

	}

})