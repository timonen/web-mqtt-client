<?php
function send($topic, $msq){
        $cmd = 'mosquitto_pub -d -t '.$topic.' -m "'.$msq.'"';
        exec($cmd);
}

if(isset($_GET['msg']) && isset($_GET['topic'])){
	send($_GET['topic'], $_GET['msg']);
}

?>

