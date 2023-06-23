import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

const  messageModel = mongoose.model("message", messageSchema);

export default messageModel;