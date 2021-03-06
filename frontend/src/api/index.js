// api/index.js
var socket = new WebSocket("ws://localhost:8080/ws");

let connect = (cb) => {
  console.log("Attempting connection");

  socket.onopen = () => {
    console.log("Succeeded connected");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket error: " + error.error);
  };
};

let sendMsg = (msg) => {
  console.log("Sending message: " + msg);
  socket.send(msg);
};

export { connect, sendMsg };
