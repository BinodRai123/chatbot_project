require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const ConnectToDB = require("./src/db/db");
const generateResponse = require("./src/services/ai.service");


const httpServer = createServer(app);
const io = new Server(httpServer);



io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user is disconnected");
  })

  //custon events
  socket.on("message",(msg) =>{
    console.log(msg);
  });

  //AI Integration
  socket.on("ai-message", async(msg) => {
      const response = await generateResponse(msg.prompt);
      console.log(response);
      console.log('hello');
      socket.emit("ai-message-response", {response});
  })

});


ConnectToDB();
httpServer.listen(3000, () => {
  console.log("Server listening on port 3000");

});