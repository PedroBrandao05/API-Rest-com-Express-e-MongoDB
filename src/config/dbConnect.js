import mongoose from "mongoose";

mongoose.connect("mongodb+srv://PedroBrandao05:aracnideo1@aluralivros.bxglsav.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;