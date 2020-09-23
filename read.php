<?php
	exec("./script.sh");
	$tiedostoNimi = "log.txt";
	if (file_exists($tiedostoNimi)) {
		echo file_get_contents($tiedostoNimi);
	}
?>

