#!/usr/bin/env node

const path = require('path');
const express = require('express');
const app = express();
const hostPort = 8080;
const hostName = 'localhost';

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`[${ip}]: ${req.originalUrl}`);
    next();
});

app.get('/', (req, res) => {
    res.status(418).sendFile(path.join(__dirname, 'teapot.html'));
});

app.use('/teapot.png', express.static(path.join(__dirname, 'teapot.png')));

app.listen(hostPort, hostName);
