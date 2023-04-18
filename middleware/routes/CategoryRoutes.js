import express from "express";
import { isAdmin, reqSignIn } from "./../middleware/authMiddle.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "../control/categoryController.js";

const router = express.Router();

router.post("/create-category", reqSignIn, isAdmin, createCategoryController);

router.put(
  "/update-category/:id",
  reqSignIn,
  isAdmin,
  updateCategoryController
);

router.get("/get-category", categoryControlller);

router.get("/single-category/:slug", singleCategoryController);

router.delete(
  "/delete-category/:id",
  reqSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
