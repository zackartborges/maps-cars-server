const express = require("express"); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const http = require("http").Server(express);
const socketio = require("socket.io")(http);

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
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

// socketio.on("connection", (socket) => {
//   for (let i = 0; i < cars.length; i++) {
//     socket.emit("car", cars[i]);
//   }
//   socket.on("car", (data) => {
//     cars.push(data);
//     socketio.emit("car", data);
//   });
// });
// create a GET route
app.get("/express_backend", (req, res) => {
  //Line 9
  res.send({ cars }); //Line 10
}); //Line 11
