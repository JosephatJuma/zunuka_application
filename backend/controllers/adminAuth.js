const Admin = require("../models/admin");
const createHash = require("../middleware/createPasswordHash");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const password = await createHash(req.body.password);
  const { name, email, phone } = req.body;
  try {
    const adminExists = await Admin.find({ email: email });
    if (adminExists.length > 0) {
      return res
        .status(200)
        .send({ message: "Adminstrator already exists", success: false });
    }
    const newAdmin = new Admin({ name, email, phone, password });
    await newAdmin.save();
    res.status(200).send({
      message: "Adminstrator registration successful",
      success: true,
      user: newAdmin,
    });
  } catch (error) {
    res
      .status(200)
      .send({ message: "Unexpected error occurred!", success: false });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email });
  if (admin) {
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      res.status(200).send({ message: "Wrong Password!", success: false });
    } else {
      res
        .status(200)
        .send({ message: "Login successfull!", success: true, user: user });
    }
  } else {
    res.status(200).send({ message: "Wrong Email Provided!", success: false });
  }
};
