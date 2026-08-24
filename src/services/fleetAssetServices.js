const FleetAsset = require('../models/FleetAsset');

const createFleetAsset = async (data) => {
  return await FleetAsset.create(data);
};

const getFleetAssets = async ({
  page = 1,
  limit = 10,
  search = '',
  status,
  brand,
  assetType,
  sort = 'createdAt',
  order = 'desc',
}) => {
  const currentPage = Math.max(Number(page), 1);
  const pageLimit = Math.min(Math.max(Number(limit), 1), 100);

  const filter = {};

  const searchText = String(search).trim();

  if (searchText) {
    filter.$or = [
      {
        assetCode: {
          $regex: searchText,
          $options: 'i',
        },
      },
      {
        assetName: {
          $regex: searchText,
          $options: 'i',
        },
      },
      {
        brand: {
          $regex: searchText,
          $options: 'i',
        },
      },
      {
        model: {
          $regex: searchText,
          $options: 'i',
        },
      },
    ];
  }

  if (status) {
    filter.status = status;
  }

  if (brand) {
    filter.brand = brand;
  }

  if (assetType) {
    filter.assetType = assetType;
  }

  const allowedSortFields = [
    'assetName',
    'assetCode',
    'createdAt',
  ];

  const sortField = allowedSortFields.includes(sort)
    ? sort
    : 'createdAt';

  const sortOrder = order === 'asc' ? 1 : -1;

  const total = await FleetAsset.countDocuments(filter);

  const assets = await FleetAsset.find(filter)
    .sort({
      [sortField]: sortOrder,
    })
    .skip((currentPage - 1) * pageLimit)
    .limit(pageLimit);

  return {
    assets,
    pagination: {
      page: currentPage,
      limit: pageLimit,
      total,
      totalPages: Math.ceil(total / pageLimit),
    },
  };
};

const getFleetAssetById = async (id) => {
  return await FleetAsset.findById(id);
};

const updateFleetAsset = async (id, data) => {
  return await FleetAsset.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};

const deleteFleetAsset = async (id) => {
  return await FleetAsset.findByIdAndDelete(id);
};

const deactivateFleetAsset = async (id) => {
  return await FleetAsset.findByIdAndUpdate(
    id,
    {
      status: 'Inactive',
    },
    {
      new: true,
      runValidators: true,
    }
  );
};

const findByAssetCode = async (assetCode) => {
  return await FleetAsset.findOne({
    assetCode: assetCode.trim().toUpperCase(),
  });
};

const findByAssetCodeExceptId = async (assetCode, id) => {
  return await FleetAsset.findOne({
    assetCode: assetCode.trim().toUpperCase(),
    _id: {
      $ne: id,
    },
  });
};

module.exports = {
  createFleetAsset,
  getFleetAssets,
  getFleetAssetById,
  updateFleetAsset,
  deleteFleetAsset,
  deactivateFleetAsset,
  findByAssetCode,
  findByAssetCodeExceptId,
};