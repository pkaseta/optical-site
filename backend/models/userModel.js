import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleInitial: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    rx: {
      odSph: { type: Number, required: true },
      osSph: { type: Number, required: true },
      odCyl: { type: Number, required: true },
      osCyl: { type: Number, required: true },
      odAxis: { type: Number, required: true },
      osAxis: { type: Number, required: true },
      odAdd: { type: Number, required: true },
      osAdd: { type: Number, required: true },
      odPD: { type: Number, required: true },
      osPD: { type: Number, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
