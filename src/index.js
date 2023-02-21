import mongoose from "mongoose";
import { app } from "./app.js";
let server;

try {
 const options ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
  mongoose
    .connect('mongodb+srv://sadik:zLNA1fXmcRGjKVgC@cluster0.k4jul.mongodb.net/test',options )
    .then(() => {
      logger.info("Connected to MongoDB");
      server = app.listen(8000, () => {
        console.log(8000);
      });
    });
} catch (error) {
  console.log(error); }
