import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(process.env.MONGO);
  console.log("Connected to database");
}

export default connect;
