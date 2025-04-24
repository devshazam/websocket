import { WebSocketServer } from 'ws';
const express = require("express");
const app = express()
const path = require("path")


app.use("/",express.static(path.resolve(__dirname, "../client")))

const server = new WebSocketServer({ 
  port: 8081 
});

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        socket.send(`Server: ${message}`);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8081');