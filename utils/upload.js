import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

import dotenv from "dotenv";

dotenv.config();

// const storage = new GridFsStorage({
//   url: process.env.DATABASE_URL,
//   options: { useNewUrlParser: true },
//   file: (request, file) => {
//     const match = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
//     if (match.indexOf(file.mimetype) === -1) {
//       return `${Date.now()}-file-${file.originalname}`;
//     }
//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-file-${file.originalname}`,
//     };
//   },
// });

export default multer();
