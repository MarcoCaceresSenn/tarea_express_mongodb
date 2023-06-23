import express from "express";

import studentRoute from "./routes/student.router.js";

import connectDB from "./configs/mongo.js";

import {PORT} from "./configs/environment.js";

const app = express();

app.use(express.json());

app.use("",studentRoute);

async function startSever() {
    console.log("Starting server...");
	const isConnected = await connectDB();
	if (isConnected) {
		app.listen(PORT, () => {
			console.log(`Server started on ${PORT}`);
		});
	} else {
        console.log(`Server did not start on ${PORT}`)
		process.exit();
	}
}

startSever();