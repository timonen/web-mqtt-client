<?php
function send($msq){
        $cmd = 'mosquitto_pub -d -t aihe -m "'.$msq.'"';
        exec($cmd);
}

if(isset($_GET['msg'])){
	send($_GET['msg']);
}

?>

