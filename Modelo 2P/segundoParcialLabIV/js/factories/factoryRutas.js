angular
  .module('app')
  .factory('factoryRutas', function (){
  	var objeto = {};

    objeto.nombre = "Factory de rutas";
	
	objeto.RutaProductos = 'http://localhost:8080/labo42p/webservice1/productos/';
	objeto.RutaUsuarios = 'http://localhost:8080/labo42p/webservice1/usuarios/';
    //objeto.RutaProductos = 'http://localhost/2ParcialLab/webservice1/productos/';
    //objeto.RutaProductos = 'http://localhost/webservice1/productos/';

    
    //objeto.RutaUsuarios = 'http://localhost/2ParcialLab/webservice1/usuarios/';

    return objeto;


    
  })