require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const fleetAssetRoutes = require('./routes/fleetAssetRoutes');

const app = express();

connectDB();

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Fleet Asset Management API is running',
  });
});

app.use('/api/fleet-assets', fleetAssetRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});