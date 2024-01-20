import { WebSocket } from "ws";

const port = 1234;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.on("open", () => {
  console.log("[Client] Connected");
  ws.send("Hello from the client");

  let index = 1;

  setInterval(() => {
    ws.send(`Client: Message number ${index++}`);
  }, 1000);
});

ws.on("message", (data) => {
  console.log(`Received a message from the server: ${data}`);
});
