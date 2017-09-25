# ConnectorValidator (Validador de conexión)

Basicamente es una herramienta que permite establecer si el estado de una conexión es óptimo para el evnvío de datos por medio de una petición ajax.

### Ejemplo de uso:

``` javascript
(function() {

	'use strict';

    document.addEventListener("DOMContentLoaded",function(event){
	    // Se le pasa como parametro el tiempo estimado para la respuesta
	    var test = new ConnectorValidator(2000); 
		test.then(function(resp) { 
			// true : Respuesta en el tiempo estimado (conexion estable)
		}).catch(function(error) { 
			// false : No hubo respuesta en el tiempo estimado (conexion fallida o lenta)
		});
	});

})();
    
```
