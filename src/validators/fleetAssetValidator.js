const validateFleetAsset = (data) => {
  const requiredFields = [
    'assetCode',
    'assetName',
    'assetType',
    'brand',
    'model',
  ];

  const errors = {};

  requiredFields.forEach((field) => {
    if (!data[field] || String(data[field]).trim() === '') {
      errors[field] = `${field} is required`;
    }
  });

  const tyreSpecifications = data.tyreSpecifications || {};

  if (!tyreSpecifications.tyreSize?.trim()) {
    errors.tyreSize = 'Tyre size is required';
  }

  if (!tyreSpecifications.construction?.trim()) {
    errors.construction = 'Construction is required';
  }

  if (!tyreSpecifications.tubeType?.trim()) {
    errors.tubeType = 'Tube type is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

module.exports = validateFleetAsset;