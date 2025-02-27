const {Router} = require('express');
const { getLoggedInUser, createUser, allUsers } = require('../controllers/userControllers');
const { readNotifications } = require('../controllers/notificationControllers');

const router = Router();

router.post('/users', getLoggedInUser);
router.get('/all-users', allUsers);
router.post('/create-user', createUser);
router.put('/read-notification/:_id', readNotifications)

module.exports = router;