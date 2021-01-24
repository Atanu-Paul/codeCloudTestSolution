//importing the database schema models
const Students = require("../model");

//@desc     Default welcome route
//@route    GET /api
//@access   public
exports.sayHi = (req, res) => {
  res.status(200).json({ message: "Welcome To Students API" });
};

//@desc     register route
//@route    POST /api/register
//@access   public
exports.register = async (req, res) => {
  // console.log(req.body);

  const students = new Students(req.body);

  await students.save((err, students) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(201).json({ status: "success", data: students });
  });
};

//@desc     fetch all data route
//@route    GET /api/allData
//@access   public
exports.getAllData = async (req, res) => {
  // console.log(req.body);

  await Students.find({}, (err, students) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res
      .status(200)
      .json({ status: "success", count: students.length, data: students });
  });
};
