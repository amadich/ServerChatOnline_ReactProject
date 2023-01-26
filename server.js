const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());

app.use(express.static('public'))
/*
app.post("/api/msg", (req,res) => {
  
   console.log("a user connected");
   res.send("Connected");

})
*/

io.on("connection", (socket) => {
   console.log("Here is Connection io");
   socket.on("mymsg", (msg) => {
      console.log(`Your msg => ${msg}`);
      io.emit("mymsg",msg);
   })


   socket.on('disconnect', () => {
      console.log('user disconnected');
    });

})




http.listen(port, () => console.log(`Listening on port ${port}`));