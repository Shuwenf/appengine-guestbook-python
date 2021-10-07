function timer() {
  var current_time = new Date, 
      game_init_time = new Date(t), 
      minutes = current_time.getMinutes() - game_init_time.getMinutes(),
      seconds = current_time.getSeconds() - game_init_time.getSeconds();
  if (seconds < 0) {
    minutes = minutes - 1;
    seconds = seconds + 60; 
  return minutes + ":", seconds 
}
  
function foodcolor() {
  for (var colorcode = "0123456789ABCDEF", color = "#", i = 0; i < 6; i++){
    color += colorcode[Math.ceil(Math.random() * 15)];
  }
  return color
}
  
function food() {
  this.x = 0, this.y = 0, this.w = 10, this.h = 10, this.color = foodcolor(), this.renew = function() { 
    this.x = Math.floor(Math.random() * (w - 20) + 10), 
    this.y = Math.floor(Math.random() * (w - 20) + 10), 
    this.color = foodcolor(), this.renew(), 
    this.put = (() => {
      canvas_context.fillStyle = this.color, 
      canvas_context.fillRect(this.x, this.y, this.w, this.h)
    })
  }
}

function init() { 
  cc.height = h, cc.width = w, c.fillRect(0, 0, w, innerHeight); 
}
 
var t = new Date + "", 
    cc = document.getElementByTagName("canvas")[0], 
    c = cc.getContext("2d"); 
