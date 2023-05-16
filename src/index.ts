import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;
//db connect
async function db() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-practice");
    console.log("database connected");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
db();
