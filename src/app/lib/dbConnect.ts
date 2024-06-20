import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
const dbConnect = () => {
  console.log("connecting to database!!!");
  mongoose
    .connect(MONGODB_URI)
    .then((res:any) => {
      console.log("conected!!");
      return res;
    })
    .catch((err:Error) => {
      console.error(err);
    });
};


export default dbConnect;

