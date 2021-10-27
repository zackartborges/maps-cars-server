const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const cars = [
  {
    createdAt: "2021-10-08T02:12:55.608Z",
    name: "Toyota Prius",
    status: 1,
    latitude: 33.95546,
    longitude: -83.34501,
    id: "1",
  },
  {
    createdAt: "2021-10-08T11:27:26.594Z",
    name: "Chevrolet Silverado",
    status: 0,
    latitude: 33.95,
    longitude: -83.37497,
    id: "2",
  },
  {
    createdAt: "2021-10-08T00:41:26.399Z",
    name: "GMC Astro",
    status: 2,
    latitude: 33.96142,
    longitude: -83.39013,
    id: "3",
  },
  {
    createdAt: "2021-10-08T10:55:38.542Z",
    name: "Toyota Corolla",
    status: 0,
    latitude: 33.9588,
    longitude: -83.3743,
    id: "4",
  },
  {
    createdAt: "2021-10-08T15:59:07.018Z",
    name: "Mercedes Benz",
    status: 2,
    latitude: 33.9454,
    longitude: -83.37713,
    id: "5",
  },
  {
    createdAt: "2021-10-08T15:50:38.882Z",
    name: "Land Rover",
    status: 1,
    latitude: 33.95537,
    longitude: -83.35815,
    id: "6",
  },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  setInterval(() => {
    console.log("Hey");
  }, 1000);
  console.log("connected");

  io.emit("getCars", cars);
  // socket.on("chat message", (msg) => {
  //   io.emit("chat message", msg + "jamie");
  // });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
