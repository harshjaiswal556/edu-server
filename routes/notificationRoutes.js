const {Router} = require('express');
const { sendNotification ,getNotifications} = require('../controllers/notificationControllers');
const { get } = require('mongoose');

const router = Router();

router.post('/send-notification', sendNotification);
router.get('/notifications', getNotifications);


module.exports = router;