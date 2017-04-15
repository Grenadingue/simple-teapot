#!/usr/bin/env node

const path = require('path');
const express = require('express');
const app = express();
const serverPort = 8080;

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`[${ip}]: ${req.originalUrl}`);
    next();
});

app.get('/', (req, res) => {
    res.status(418).sendFile(path.join(__dirname, 'teapot.html'));
});

app.use('/teapot.png', express.static(path.join(__dirname, 'teapot.png')));

app.listen(serverPort);
