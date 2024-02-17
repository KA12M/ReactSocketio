import express from "express";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import cors from "cors";

const messageList = [];

const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello, world", data: messageList });
});

app.get("/new-message", (req, res) => {
  const { msg } = req.query;
  messageList.push(msg);
  res.json({ message: `Success new message: ${msg}`, data: messageList });
});

const server = app.listen(port, () => {
  console.log("running in port http://localhost:" + port);
});

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

// รอการ connect จาก client
io.on("connection", (client) => {
  console.log("user connected " + client.id);
  io.sockets.emit("receive-message", messageList);

  client.on('get-message', () => {
    io.sockets.emit('receive-message', messageList);
  })

  // เมื่อ Client ตัดการเชื่อมต่อ
  client.on("disconnect", () => {
    console.log("user disconnected");
  });

  // ส่งข้อมูลไปยัง Client ทุกตัวที่เขื่อมต่อแบบ Realtime
  client.on("send-message", function (data) {
    messageList.unshift(data);
    io.sockets.emit("new-message", messageList);
  });
});
