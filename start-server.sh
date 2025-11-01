#!/bin/bash

# Portfolio Dev Server Startup Script
# This script will keep the server running for extended periods

cd /Users/otobong.okoko/Desktop/zalando/portfolio

echo "=========================================="
echo "🚀 Portfolio Dev Server Starter"
echo "=========================================="
echo "Starting server on port 3001..."
echo "This server will stay running..."
echo ""

# Kill any existing processes on port 3001
lsof -ti:3001 | xargs kill -9 2>/dev/null

# Start the server with nohup to keep it running
# nohup redirects output to server.log
PORT=3001 nohup ./node_modules/.bin/next dev > server.log 2>&1 &

SERVER_PID=$!

echo "✅ Server started with PID: $SERVER_PID"
echo "📍 URL: http://localhost:3001"
echo "📋 Logs: server.log"
echo ""
echo "Server is running in the background..."
echo "To stop: kill $SERVER_PID or kill -9 $SERVER_PID"
echo ""

# Monitor the server process
sleep 3

if kill -0 $SERVER_PID 2>/dev/null; then
    echo "✅ Server is running successfully!"
    
    # Show first few lines of log
    echo ""
    echo "Initial server output:"
    head -5 server.log
else
    echo "❌ Server failed to start. Check server.log for errors."
    cat server.log
    exit 1
fi
