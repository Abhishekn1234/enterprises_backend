const fleetAssetService = require('../services/fleetAssetServices');
const validateFleetAsset = require('../validators/fleetAssetValidator');
const isValidObjectId = require('../utils/isValidObjectId');



const createFleetAsset = async (req, res) => {
  try {
    const { isValid, errors } = validateFleetAsset(req.body);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    const existingAsset =
      await fleetAssetService.findByAssetCode(
        req.body.assetCode
      );

    if (existingAsset) {
      return res.status(409).json({
        success: false,
        message: 'Asset code already exists',
        errors: {
          assetCode: 'Asset code must be unique',
        },
      });
    }

    const asset =
      await fleetAssetService.createFleetAsset(req.body);

    return res.status(201).json({
      success: true,
      message: 'Fleet asset created successfully',
      data: asset,
    });

  } catch (error) {
    console.error('Create Fleet Asset Error:', error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Asset code already exists',
        errors: {
          assetCode: 'Asset code must be unique',
        },
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to create fleet asset',
    });
  }
};



const getFleetAssets = async (req, res) => {
  try {
    const result =
      await fleetAssetService.getFleetAssets(req.query);

    return res.status(200).json({
      success: true,
      data: result.assets,
      pagination: result.pagination,
    });

  } catch (error) {
    console.error('Get Fleet Assets Error:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to fetch fleet assets',
    });
  }
};


const getFleetAssetById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid fleet asset ID',
      });
    }

    const asset =
      await fleetAssetService.getFleetAssetById(id);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: 'Fleet asset not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: asset,
    });

  } catch (error) {
    console.error('Get Fleet Asset Error:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to fetch fleet asset',
    });
  }
};


const updateFleetAsset = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid fleet asset ID',
      });
    }

    const { isValid, errors } =
      validateFleetAsset(req.body);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    const duplicateAsset =
      await fleetAssetService.findByAssetCodeExceptId(
        req.body.assetCode,
        id
      );

    if (duplicateAsset) {
      return res.status(409).json({
        success: false,
        message: 'Asset code already exists',
        errors: {
          assetCode: 'Asset code must be unique',
        },
      });
    }

    const asset =
      await fleetAssetService.updateFleetAsset(
        id,
        req.body
      );

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: 'Fleet asset not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Fleet asset updated successfully',
      data: asset,
    });

  } catch (error) {
    console.error('Update Fleet Asset Error:', error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Asset code already exists',
        errors: {
          assetCode: 'Asset code must be unique',
        },
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to update fleet asset',
    });
  }
};



const deleteFleetAsset = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid fleet asset ID',
      });
    }

    const asset =
      await fleetAssetService.deleteFleetAsset(id);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: 'Fleet asset not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Fleet asset deleted successfully',
    });

  } catch (error) {
    console.error('Delete Fleet Asset Error:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to delete fleet asset',
    });
  }
};



const deactivateFleetAsset = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid fleet asset ID',
      });
    }

    const asset =
      await fleetAssetService.deactivateFleetAsset(id);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: 'Fleet asset not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Fleet asset deactivated successfully',
      data: asset,
    });

  } catch (error) {
    console.error(
      'Deactivate Fleet Asset Error:',
      error
    );

    return res.status(500).json({
      success: false,
      message: 'Failed to deactivate fleet asset',
    });
  }
};


module.exports = {
  createFleetAsset,
  getFleetAssets,
  getFleetAssetById,
  updateFleetAsset,
  deleteFleetAsset,
  deactivateFleetAsset,
};