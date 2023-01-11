import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    // latest msg
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const conversation = mongoose.model("conversation", conversationSchema);

export default conversation;
