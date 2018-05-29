/* Se define la funci�n que se usar� para instanciar objetos XMLHttpRequest */
	function crear_objeto_XMLHttpRequest() {
		try {
			objeto = new XMLHttpRequest();
		} catch(err1) {
			try {
				objeto = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (err2) {
				try {
					objeto = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (err3) {
					objeto = false;
				}
			}
		}
		return objeto;
	}
/* Aqu� acaba la definici�n de la funci�n que se usar� para instaciar objetos XMLHttpRequest */

/* Esta sentencia se usar� para invocar a la funci�n que instancia objetos XMLHyypRequest. 
Cada vez que nuestros scripts necesiten uno de estos objetos, se crear�n invocando a la 
funci�n, asi: */
var objeto_AJAX = crear_objeto_XMLHttpRequest();
