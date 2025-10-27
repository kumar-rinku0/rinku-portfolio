import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
const dbConnect = async () => {
  console.log("connecting to database!!!");
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("conected!!");
  } catch (error) {
    console.error(error);
  }
};

export default dbConnect;
