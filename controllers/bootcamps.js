const Bootcamp = require('../model/Bootcamps');

// @desc Get all bootcamps
// @route GEt /api/v1/bootcamps
// @access Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({ success: false, data: bootcamps });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc Get a single bootcamp
// @route Get /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc Create new bootcamp
// @route Get /api/v1/bootcamps
// @access Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc Update Bootcamp
// @route Put /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc Delete Bootcamp
// @route Delete /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
