import express from "express";
import {
  regControl,
  logCont,
  testCont,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
} from "../control/authentCont.js";
import { isAdmin, reqSignIn } from "../middleware/authMiddle.js";
const routes = express.Router();

routes.post("/reg", regControl);

routes.post("/login", logCont);

routes.get("/test", reqSignIn, isAdmin, testCont);

routes.get("/user-auth", reqSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

routes.get("/admin-auth", reqSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

routes.put("/Profile", reqSignIn, updateProfileController);

export default routes;
