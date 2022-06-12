import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import "@shared/container";
import createConnection  from '@shared/infra/typeorm';
import { router } from './routes';

createConnection();

const app = express()
app.use(express.json());

app.use(router);

export { app };