const router = express.Router();
import express from "express";

import { addUser, getUser } from "../controller/userController.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversationController.js";
import { msgNew, getMsg } from "../controller/msgController.js";
import { uploadFile, getImage } from "../controller/image-controller.js";

// comment
import upload from "../utils/upload.js";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("worked");
});

router.post("/add", addUser);
router.get("/users", getUser);
router.post("/conversation/add", newConversation);
router.post("/conversation/get", getConversation);
router.post("/message/add", msgNew);
router.get("/message/get/:id", getMsg);

// comment

//upload is middlewear
router.post("/file/upload", upload.single("file"), uploadFile);
router.get("/file/:filename", getImage);

export default router;
