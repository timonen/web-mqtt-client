<?php
	$fileName = "log.txt";
	if (file_exists($fileName)) {
		echo file_get_contents($fileName);
	}
?>

