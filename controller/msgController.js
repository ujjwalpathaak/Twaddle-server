import msg from "../model/msg.js";
import Conversation from "../model/conversation.js";

export const msgNew = async (request, response) => {
  try {
    const newMsg = new msg(request.body);
    await newMsg.save();
    await Conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });
    const messages = await msg.find({ conversationId: request.params.id });
    response.status(200).json(messages);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getMsg = async (request, response) => {
  try {
    const messages = await msg.find({ conversationId: request.params.id });
    response.status(200).json(messages);
  } catch (error) {
    console.log("Error getting messages")
    response.status(500).json(error);
  }
};
