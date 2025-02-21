const {Router} = require('express');
const { getLoggedInUser, createUser } = require('../controllers/userControllers');

const router = Router();

router.post('/users', getLoggedInUser);
router.post('/create-user', createUser);

module.exports = router;