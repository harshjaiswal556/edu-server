const {Router} = require('express');
const { sendNotification } = require('../controllers/notificationControllers');

const router = Router();

router.post('/send-notification', sendNotification);

module.exports = router;