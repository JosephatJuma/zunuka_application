const Trip = require("../models/trips");

//Create a new Trip
exports.addTrip = async (req, res) => {
  const newTrip = new Trip(req.body);
  try {
    await newTrip.save().then((trip) => {
      res.send({ message: "Trip added", success: true, trip: trip });
    });
  } catch (error) {
    res.send({ message: "An error occured", success: false });
  }
};

//get all Trips
exports.all = async (req, res) => {
  await Trip.find()
    .sort({ _id: -1 })
    .then((trips) => {
      res.send({ trips: trips });
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};

//delete a Trips

exports.delete = async (req, res) => {
  await Trip.deleteOne({ _id: req.params.trip_id })
    .then((deleted) => {
      res.send({ success: deleted });
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};

//edit specified details of the Trip
exports.modify = async (req, res) => {
  const { field, value } = req.body;
  const updateQuery = { $set: {} };
  updateQuery.$set[field] = value;
  await Trip.updateOne({ _id: req.params.trip_id }, updateQuery)
    .then((updated) => {
      res.send({ success: updated });
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};
