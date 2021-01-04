const express = require("express"),
      app = express(),
      http = require('http').createServer(app),
      io = require('socket.io')(http),
      bodyParser = require("body-parser");

var count = 0;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

http.listen(50001, function(){
  console.log("Quizzing app up!");
});

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/quizzingScreen', (req, res) => {
  res.render('quizzingScreen.ejs');
});

io.on('connection', (socket) => {
  console.log("User Connected");
  socket.on('disconnect', () => {
    console.log("A user disconnected");
  });

  socket.on("btnPress", () => {
    console.log("nah");
    count++;
    io.emit('btnPress', count);
  });
});
