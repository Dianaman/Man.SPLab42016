angular.module('app.controllers')

.controller('directivasCtrl', function($scope, $state, $timeout, UsuarioService, ProductoService, UsuarioActual){


    $scope.usuarios = [];

    $scope.productos = [];

    UsuarioService.traerTodos()
        .then(function (respuesta){

            console.info("todos los usuarios", respuesta);

            $scope.usuarios = respuesta.data;

        }).catch(function (error){

            $scope.usuarios = [];

        })

    ProductoService.traerTodos()
        .then(function (respuesta){

            console.info("todos los productos", respuesta);

            $scope.productos = respuesta.data;

        }).catch(function (error){

            $scope.productos = [];

        })
})