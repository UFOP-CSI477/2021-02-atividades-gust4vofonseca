import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import "@shared/container";
import createConnection  from '@shared/infra/typeorm';


createConnection();

const app = express()
app.use(express.json());

export { app };