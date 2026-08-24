const mongoose = require('mongoose');

const tyreSpecificationsSchema = new mongoose.Schema(
  {
    tyreSize: {
      type: String,
      required: [true, 'Tyre size is required'],
      trim: true,
    },

    construction: {
      type: String,
      required: [true, 'Construction is required'],
      enum: ['Radial', 'Bias'],
    },

    pattern: {
      type: String,
      trim: true,
    },

    loadIndex: {
      type: String,
      trim: true,
    },

    speedRating: {
      type: String,
      trim: true,
    },

    plyRating: {
      type: String,
      trim: true,
    },

    tubeType: {
      type: String,
      required: [true, 'Tube type is required'],
      enum: ['Tubeless', 'Tube'],
    },
  },
  { _id: false }
);

const fleetAssetSchema = new mongoose.Schema(
  {
    assetCode: {
      type: String,
      required: [true, 'Asset code is required'],
      unique: true,
      trim: true,
      uppercase: true,
    },

    assetName: {
      type: String,
      required: [true, 'Asset name is required'],
      trim: true,
    },

    assetType: {
      type: String,
      required: [true, 'Asset type is required'],
      enum: ['Tyre'],
      default: 'Tyre',
    },

    brand: {
      type: String,
      required: [true, 'Brand is required'],
      trim: true,
    },

    model: {
      type: String,
      required: [true, 'Model is required'],
      trim: true,
    },

    status: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },

    description: {
      type: String,
      trim: true,
    },

    tyreSpecifications: {
      type: tyreSpecificationsSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('FleetAsset', fleetAssetSchema);