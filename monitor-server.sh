#!/bin/bash

# Server Monitoring & Auto-Restart Script
# Keeps Next.js dev server running continuously

SERVER_PORT=3001
LOG_FILE="/Users/otobong.okoko/Desktop/zalando/portfolio/server.log"
PID_FILE="/Users/otobong.okoko/Desktop/zalando/portfolio/server.pid"
PROJECT_DIR="/Users/otobong.okoko/Desktop/zalando/portfolio"
CHECK_INTERVAL=30  # Check every 30 seconds
MAX_RETRIES=3
RETRY_DELAY=5

echo "🔍 Server Monitor Started - $(date)"
echo "📊 Check Interval: ${CHECK_INTERVAL}s"
echo "📍 Port: ${SERVER_PORT}"
echo "📋 Log: ${LOG_FILE}"

# Function to check if port is in use
is_port_open() {
    lsof -i :${SERVER_PORT} >/dev/null 2>&1
    return $?
}

# Function to start server
start_server() {
    echo "🚀 Starting server..."
    cd ${PROJECT_DIR}
    nohup npm run dev > ${LOG_FILE} 2>&1 &
    NEW_PID=$!
    echo ${NEW_PID} > ${PID_FILE}
    echo "✅ Server started with PID: ${NEW_PID}"
    sleep 3
}

# Function to stop server
stop_server() {
    if [ -f ${PID_FILE} ]; then
        OLD_PID=$(cat ${PID_FILE})
        if ps -p ${OLD_PID} > /dev/null; then
            kill ${OLD_PID} 2>/dev/null
            echo "🛑 Stopped server PID: ${OLD_PID}"
            sleep 2
        fi
    fi
}

# Initial start
if ! is_port_open; then
    start_server
else
    echo "✅ Server already running on port ${SERVER_PORT}"
fi

# Monitoring loop
CONSECUTIVE_FAILURES=0
while true; do
    sleep ${CHECK_INTERVAL}
    
    if is_port_open; then
        CONSECUTIVE_FAILURES=0
        echo "✅ $(date '+%H:%M:%S') - Server healthy"
    else
        CONSECUTIVE_FAILURES=$((CONSECUTIVE_FAILURES + 1))
        echo "⚠️  $(date '+%H:%M:%S') - Server down (attempt ${CONSECUTIVE_FAILURES}/${MAX_RETRIES})"
        
        if [ ${CONSECUTIVE_FAILURES} -ge ${MAX_RETRIES} ]; then
            echo "❌ Server failed ${MAX_RETRIES} consecutive checks. Restarting..."
            stop_server
            sleep ${RETRY_DELAY}
            start_server
            CONSECUTIVE_FAILURES=0
        fi
    fi
done
