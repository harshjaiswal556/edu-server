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