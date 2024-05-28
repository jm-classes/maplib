# Cloner le repository

```bash
git clone https://github.com/jm-classes/maplib.git

cd maplib
```

# Importer la base de données dans MongoDB

```bash
# Se positionner dans le dossier contenant le fichier JSON
cd _data

# Importer les documents dans la collection stations de la base de donnée maplib
mongoimport -d maplib -c stations --file ./velib-parisdata.json --jsonArray --drop
```

Vérifiez que l'import à bien fonctionné :

```bash
# Se connecter à la base de donnée maplib
mongosh

# Sélectionner la collection stations
use maplib

# Afficher les premiers documents de la collection stations
db.stations.countDocuments()
  # devrait afficher 1471
```

# Installer le backend

```bash
# Se positionner dans le dossier backend
cd backend

# Installer les dépendances
npm install

# Lancer le serveur
npm run dev
```

# Installer le frontend

```bash
# Se positionner dans le dossier frontend
cd frontend

# Installer les dépendances
npm install

# Lancer le serveur
npm run dev
```