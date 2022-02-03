const express = require('express');
const { register, login } = require('../controllers/auth');
const { getMe, protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
