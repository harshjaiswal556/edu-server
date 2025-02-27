const {Router} = require('express');
const { sendNotification, getNotifications } = require('../controllers/notificationControllers');

const router = Router();

router.post('/send-notification', sendNotification);
router.get('/notification', getNotifications);

module.exports = router;