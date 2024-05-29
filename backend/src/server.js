import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { startApp, log, exitWithError } from './helpers.js';
import router from './router.js'

const app = express();

app.use('/api', cors());
app.use('/api', router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(log('MONGO', 'Connected successfully!'), exitWithError('MONGO'))
  .then(startApp(app))
  .then(log('EXPRESS', `Listening http://${process.env.HOST}:${process.env.PORT}`), exitWithError('EXPRESS'));