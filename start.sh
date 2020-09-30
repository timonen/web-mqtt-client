#!/bin/bash
if [ -n "$1" ]; then 
(
mosquitto_sub -h localhost -v -t "$1" > log.txt
) &
disown %1
else 
	echo "Topic is not set"; 
fi

