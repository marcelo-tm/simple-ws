import { WebSocketServer } from "ws";

const port = 1234;
const wss = new WebSocketServer({ port });

wss.on("connection", (ws) => {
  ws.send("Hello from the server!");

  ws.on("message", (data) => {
    console.log(`Received message from client: ${data}`);
  });

  let index = 1;

  setInterval(() => {
    ws.send(`Server: Message number ${index++}`);
  }, 1000);
});

console.log(`Listening at :${port}...`);
