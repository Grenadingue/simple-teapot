#!/usr/bin/env node

import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const hostPort = 4180;
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
