var c = document.querySelector("#flowLogo");
c.width = window.innerWidth < 490 ? window.innerWidth - 20 : 480;; 

var x = c.getContext("2d");
var time = 0;
var frame = 0;
var playing = true;
function u(t) {
  c.width=window.innerWidth < 490 ? window.innerWidth - 20 : 480;
  for(i=0;i<64;i++)
  x.fillRect(i*10, 25 + Math.cos(4*t+(i*3))*25, 7, 30)
}
//x.fillRect(20,20,150,100);
u(10);
function loop() {
  if (playing){
    u(time);
  }
  time = frame/60;
  if(time * 60 | 0 == frame - 1){
    time += 0.000001;
  }
  frame++;
}
setInterval(loop, 16);