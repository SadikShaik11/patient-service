import express from "express";
const router = express.Router();
import receptionRote from "./receptionRoute";

router.route.use("/reception", receptionRote);

export { router };
