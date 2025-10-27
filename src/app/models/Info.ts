import { Schema, model } from "mongoose";

const InfoSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    phoneno: {
      type: String,
      required: [true, "Phone number is required"],
      unique: [true, "Phone number already exists"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
    },
  },
  { timestamps: true }
);

export default model("info", InfoSchema);
