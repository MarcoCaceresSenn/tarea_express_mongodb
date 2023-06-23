import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	apellido: {
		type: String,
		required: true,
	},
});

const  studentModel = mongoose.model("Student", studentSchema);

export default studentModel;