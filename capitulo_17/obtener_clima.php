<?php
	header ()
	$pais_elegido = $_REQUEST["lista"];
	$resultado = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
	$resultado .= "<climas>";
	switch($pais_elegido){
		case "1":
			$resultado .= "<clima>Climatolog�a ib�rica</clima>";
			break;
		case "2":
			$resultado .= "<clima>Climatolog�a mediterr�nea</clima>";
			break;
		case "3":
			$resultado .= "<clima>Climatolog�a g�lida</clima>";
			break;
		case "4":
			$resultado .= "<clima>Climatolog�a ardiente</clima>";
			break;
	}
	$resultado .= "</climas>";
	echo $resultado;
?>