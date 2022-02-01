const ErrorResponse = require('../utils/errorResponse');
const ayncHandler = require('../middleware/async');
const User = require('../models/User');
const asyncHandler = require('../middleware/async');

// @desc Register user
// @route GET /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});