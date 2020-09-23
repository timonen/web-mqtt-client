#!/bin/bash
(
mosquitto_sub -h localhost -v -t "aihe" > log.txt
) &
disown %1
