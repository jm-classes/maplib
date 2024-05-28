import mongoose from 'mongoose';

const StationSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  stationcode: { type: String, required: true },
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  coordonnees_geo: {
    lon: { type: Number, required: true },
    lat: { type: Number, required: true },
  },
});

const collectionName = 'stations';
export default mongoose.model('Stations', StationSchema, collectionName);
