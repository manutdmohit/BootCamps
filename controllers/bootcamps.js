// @desc Get all bootcamps
// @route GEt /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
};

// @desc Get a single bootcamp
// @route Get /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
};

// @desc Create new bootcamp
// @route Get /api/v1/bootcamps
// @access Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, id: 1, msg: 'create new bootcamp' });
};

// @desc Update Bootcamp
// @route Put /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @desc Delete Bootcamp
// @route Delete /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
