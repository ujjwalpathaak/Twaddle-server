import * as dotenv from "dotenv";
dotenv.config();
import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = process.env.BACKEND_URL;

let gfs, gridfsBucket;
const mongooseConnection = mongoose.connection;

mongooseConnection.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(mongooseConnection.db, {
    bucketName: "fs",
  });
  gfs = grid(mongooseConnection.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadFile = (request, response) => {
  if (!request.file) return response.status(404).json("File not found");

  const imageUrl = `${url}/file/${request.file.filename}`;

  return response.status(200).json(imageUrl);
};

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};
