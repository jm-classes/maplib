import { Router } from 'express';
import Stations from './stations.js';

const router = Router();

router.get('/stations', getStations);

export default router;

async function getStations(req, res) {
  const qs = new URLSearchParams(req.query);
  const minCapacity = parseInt(qs.get('minCapacity'));
  const maxCapacity = parseInt(qs.get('maxCapacity'));

  const name = req.query.name ?? '';

  try {
    const stations = await Stations.find({
      capacity: {
        $lte: maxCapacity || Number.POSITIVE_INFINITY,
        $gte: minCapacity || Number.NEGATIVE_INFINITY,
      },
      $text: {
        $search: name,
        $language: 'fr',
      },
    });
    // Nécessite la création d'un index dans la BDD :
    //  db.stations.createIndex({ name: 'text' })

    res.json(stations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
