const btn = document.querySelector('#specialBtn'),
      teamOnePoints = document.querySelector('#teamOnePoints'),
      teamTwoPoints = document.querySelector('#teamTwoPoints'),
      socket = io();

var   points1 = 0,
      points2 = 0;

btn.addEventListener('click', function(){
  console.log("ha");
  socket.emit("btnPress", "ello");
});

socket.on('btnPress', () => {
  points1++;
  teamOnePoints.textContent = "Points: " + points1;
});
