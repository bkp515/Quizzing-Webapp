const express = require("express"),
      app = express(),
      http = require('http').createServer(app),
      io = require('socket.io')(http),
      bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

http.listen(80, function(){
  console.log("Quizzing app up!");
});

app.get('/', function(req, res){
  res.render('index.ejs');
});

io.on('connection', (socket) => {
  console.log("User Connected");
  socket.on('disconnect', () => {
    console.log("A user disconnected");
  });

  socket.on("btnPress", () => {
    console.log("nah");
    io.emit('btnPress');
  });
});
