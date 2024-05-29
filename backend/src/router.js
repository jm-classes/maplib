import { Router } from 'express'
import Stations from './stations.js'

const router = Router()

router.get('/stations', async (req, res) => {
  const stations = await Stations.find();
  res.send(stations);
});

export default router;