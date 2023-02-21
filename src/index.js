import mongoose from "mongoose";
import { app } from "./app.js";
let server;

try {
 const options ={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
let port =8000
  mongoose
    .connect(`mongodb://localhost:27017`,options )
    .then(() => {
      server = app.listen(port, () => {
        console.log("listening to the port ",port);
      });
    });
} catch (error) {
  console.log(error); }
