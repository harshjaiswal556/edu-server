const StudentModel = require("../models/studentModel");
const User = require("../models/usersModel");

module.exports.getStudents = async (req, res) => {
  const start = parseInt(req.query._start) || 0;
  const limit = parseInt(req.query._limit) || 10;

  const data = await StudentModel.find().skip(start).limit(limit-start);
  res.send(data);
};

module.exports.getLoggedInUser = async(req, res)=>{
  const {username, password} = req.body;
  try {
    const user = await User.findOne({username});
    if(user && (user.password === password)){
      return res.status(200).json({ message: 'Login successful', user });
    }
    return res.status(400).json({ message: 'Invalid credentials' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
}