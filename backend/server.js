// Here we are using Socket.io
import "dotenv/config";
import http from "http";
import app from "./app.js";

// Configuration
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// Server Running
server.listen(PORT, () => {
  console.log(`Server is Running at Port ${PORT}`);
})

