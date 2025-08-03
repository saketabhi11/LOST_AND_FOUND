import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8000;
export const mongoURL = process.env.MONGO_URL;
export const api = "http://localhost:8000";