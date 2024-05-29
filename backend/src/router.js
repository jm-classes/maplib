import { Router } from 'express';
import Stations from './stations.js';

const router = Router();

router.get('/stations', getStations);

export default router;

async function getStations(req, res) {
  const qs = new URLSearchParams(req.query);
  const minCapacity = parseInt(qs.get('minCapacity'));
  const maxCapacity = parseInt(qs.get('maxCapacity'));

  const name = req.query.name ?? null;

  try {
    const findQuery = {};

    if (maxCapacity || minCapacity) {
      findQuery.capacity = {};
      if (maxCapacity) findQuery.capacity.$lte = maxCapacity;
      if (minCapacity) findQuery.capacity.$gte = minCapacity;
    }

    if (name) {
      // Nécessite la création d'un index dans la BDD : db.stations.createIndex({ name: 'text' })
      findQuery.$text = { $search: name, $language: 'fr' }
    }

    const stations = await Stations.find(findQuery);

    res.json(stations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
