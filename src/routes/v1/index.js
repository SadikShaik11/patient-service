import express from "express";
const router = express.Router();
import receptionRote from "./receptionRoute.js";

router.use("/reception", receptionRote.router);

export { router };
