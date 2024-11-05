import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import hotelRouter from "./routes/hotels.js";
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mangoDB,");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB diconnected!");
});
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/hotels", hotelRouter);
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!");
});
