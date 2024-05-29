import mongoose from 'mongoose'

const StationsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  stationcode: { type: String, required: true },
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  coordonnees_geo: {
    lon: { type: Number, required: true },
    lat: { type: Number, required: true }
  }
});

const collectionName = 'stations'; // Nom de la collection dans la BDD Mongo
export default mongoose.model('Stations', StationsSchema, collectionName);