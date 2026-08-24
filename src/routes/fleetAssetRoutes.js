const express = require('express');

const {
  createFleetAsset,
  getFleetAssets,
  getFleetAssetById,
  updateFleetAsset,
  deleteFleetAsset,
  deactivateFleetAsset,
} = require('../controllers/fleetAssetController');

const router = express.Router();

router.post('/', createFleetAsset);

router.get('/', getFleetAssets);

router.get('/:id', getFleetAssetById);

router.put('/:id', updateFleetAsset);

router.patch('/:id/deactivate', deactivateFleetAsset);

router.delete('/:id', deleteFleetAsset);

module.exports = router;