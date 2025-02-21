const User = require("../models/usersModel");
const bcryptjs = require('bcryptjs')

module.exports.getLoggedInUser = async(req, res)=>{
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username});
        const pass = bcryptjs.compareSync(password, user.password);        
      if(user && pass){
        return res.status(200).json({ message: 'Login successful', user });
      }
      return res.status(400).json({ message: 'Invalid credentials' });
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  }

  module.exports.createUser = async(req, res)=>{
    const {name, username, password} = req.body;
    try {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        User.create({
            name, username, password: hashedPassword
        }).then((data)=>{
            console.log("Added successfully...");
            res.send(data);
        })
    } catch (error) {
      return res.json(error)
    }
  }