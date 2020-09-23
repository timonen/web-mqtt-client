ps -ef | grep mosquitto_sub | grep -v grep | awk '{print $2}' | xargs kill
