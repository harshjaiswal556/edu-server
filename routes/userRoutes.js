const {Router} = require('express');
const { getLoggedInUser } = require('../controllers/studentControllers');

const router = Router();

router.get('/users', getLoggedInUser);

module.exports = router;