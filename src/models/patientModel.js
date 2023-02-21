const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  patientName: {
    type: String,
    require: true,
  },
  place: {
    type: String,
    require: true,
  },
  dateOfCall: {
    type: Date,
  },
  patientProblem:{
    type: String,
    require:true
  }
});

const patients = mongoose.model('patients', patientSchema);
export {
    patients
}
