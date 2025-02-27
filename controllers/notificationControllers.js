const Notification = require('../models/notificationModel');

module.exports.sendNotification = async(req, res)=>{
    const {title, type, message, read, data} = req.body;

    try {
        Notification.create({
            title, type, message, read, data
        }).then((data)=>{
            console.log("New Notification...");
            res.send(data);
        })
    } catch (error) {
        return res.json(error);
    }
}

module.exports.getNotifications = async (req, res) => {
  const start = parseInt(req.query._start) || 0;
  const limit = parseInt(req.query._limit) || 10;

  const data = await Notification.find()
    .skip(start)
    .limit(limit - start);
  res.send(data);
};
