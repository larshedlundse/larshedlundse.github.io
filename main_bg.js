/* 
Script by: Lars Hedlund - http://www.larshedlund.se 
Resource: Raphaël JavaScript library
*/


//Background Layer, no motions(except ordinary animations)!
function draw_main_svg(svg){

//Colors
var CLOUD_COLOR1 = "#FFF";
var CLOUD_COLOR2 = "#DDD";
var GROUND_COLOR1 = "#FFF";
var GROUND_COLOR2 = "#DEE";

//Sky
  var sky = svg.rect(0,0,width,height).attr({fill: "lightskyblue", stroke: "none"});
//Ground
  var ground = svg.rect(0,height*2/3,width,height).attr({fill: GROUND_COLOR1,stroke: "none"});
// Mountains
  var top1 = svg.path(
      "M 0 "+ height*2/3 +
      "L "+ width/6 + " " + height*3/5 +
      "L "+ width/2 + " " + ( height*2/3) + 
      "Z ").attr({fill: GROUND_COLOR2, stroke: GROUND_COLOR2});

  var top2 = svg.path(
      "M "+ width/6 +" "+ height*2/3 +
      "L "+ 3*width/5 + " " + height/2 +
      "L "+ width + " " + ( height*2/3) + 
      "Z ").attr({fill: GROUND_COLOR1,stroke: GROUND_COLOR1});
// Cloud animations
  var w = width/15;
  var h = height/20;
 
  var cloud1 = svg.add([
       {
        type: "ellipse",
        cx: -4*w,
        cy: 3*h/2,
        rx: w,
        ry: h,
	fill: CLOUD_COLOR1,
        stroke: "none"
       },
      {
        type: "ellipse",
        cx: -3*w,
        cy: 2*h,
        rx: 2*w,
        ry: 2*h/3,
	fill: CLOUD_COLOR1,
        stroke: "none"
       },
      {
        type: "ellipse",
        cx: -2*w,
        cy: 3*h/2,
        rx: 2*w,
        ry: 2*h/3,
	fill: CLOUD_COLOR1,
        stroke: "none"
       },
      {
        type: "ellipse",
        cx: -2*w,
        cy: 2*h,
        rx: w,
        ry: 4*h/5,
	fill: CLOUD_COLOR1,
        stroke: "none"
       }]);

  var cloud2 = svg.add([
       {
        type: "ellipse",
        cx: -4*w,
        cy: 4*h/3 + h,
        rx: 3*w/4,
        ry: 3*h/4,
	fill: CLOUD_COLOR2,
        stroke: "none"
       },
      {
        type: "ellipse",
        cx: -4*w,
        cy: h + h,
        rx: w,
        ry: h/2,
	fill: CLOUD_COLOR2,
        stroke: "none"
       },
      {
        type: "ellipse",
        cx: -3*w,
        cy: h + h,
        rx: w/2,
        ry: 3*h/4,
	fill: CLOUD_COLOR2,
        stroke: "none"
       }]);


  anim = Raphael.animation({cx: 2*width}, 100000);

  var cloud3 = cloud1.clone();
  var cloud4 = cloud2.clone();

  cloud1.animate(anim.repeat(Infinity).delay(3000));
  cloud2.animate(anim.repeat(Infinity).delay(15000));
  cloud3.animate(anim.repeat(Infinity).delay(25000));
  cloud4.animate(anim.repeat(Infinity).delay(0));


// Signs

   var sign_size = [width/30,height/30];
   var sign_1_position = [width/30, 14*height/20];
   var sign_2_position = [55*width/60, 10*height/20];

// Linkedin Sign
   var stand_1 = svg.add([
       {
         type: "rect",
         x: sign_1_position[0]*2 - sign_size[0]/8,
         y: sign_1_position[1] - sign_size[1]/2,
         width: sign_size[0]/4,
         height: sign_size[1]*6  + sign_size[1],
         fill: "black",
         stroke: "grey"
       }]);

   var sign_1 = svg.add([
       {
         type: "rect",
         x: sign_1_position[0],
         y: sign_1_position[1],
         width: sign_size[0]*2,
         height: sign_size[1]*2,
         fill: "blue",
         "fill-opacity" : 1,
         stroke: "none",
       }]);

   var text_1 = svg.add([{
         type: "text",
         x: sign_1_position[0] + sign_size[0],
         y: sign_1_position[1] + sign_size[1],
         text: "Linkedin",
	 "font-size": sign_size[0]/2,
         fill: "white",
         "fill-opacity" : 1
       }]);

// Africabycar Sign

  var map_size= [width/9,height/7];
  var map_pos= [sign_2_position[0] - 2*sign_size[0],sign_2_position[1]];

  var stand_2 = svg.add([
       {
         type: "rect",
         x: sign_2_position[0] - sign_size[0]/8,
         y: sign_2_position[1] - sign_size[1]/2,
         width: sign_size[0]/4,
         height: sign_size[1]*6  + sign_size[1],
         fill: "black",
         stroke: "grey"
       }]);

  var africa_map = svg.path(
      "M "+ (map_pos[0] + 24*map_size[0]/64) +" " + (map_pos[1]) +
      "l "+ map_size[0]/6 +" " + 0 + 
      "l "+ map_size[0]/8 + " " + map_size[1]/20 +  
      "l " + map_size[0]/6 + " " + 0 +
      "l " + map_size[0]/6 + " " + (2*map_size[1]/7) +
      "l " + map_size[0]/12 + " "+ (- map_size[1]/30) +
      "l " + (-map_size[0]/40) + " "+  map_size[1]/12 +
      "l " + (-map_size[0]/6) + " "+  map_size[1]/7 +
      "l " + 0 + " "+  map_size[1]/8 +
      "l " + (-map_size[0]/12) + " "+  map_size[1]/20 +
      "l " + 0 + " "+  map_size[1]/15 +
      "l " + (-map_size[0]/20) + " "+  0 +
      "l " + 0 + " "+  map_size[1]/20 +
      "l " + (-map_size[0]/15) + " "+  map_size[1]/10 +
      "l " + (-map_size[0]/7) + " "+  0 +
      "l " + (-map_size[0]/15) + " "+ (-map_size[1]/5) +
      "l " + map_size[0]/30 + " "+  (-map_size[1]/20) +
      "l " + (-map_size[0]/15) + " "+ (-map_size[1]/8) +
      "l " + +map_size[0]/40 + " "+  (-map_size[1]/20) +
      "l " + (-map_size[0]/30) + " "+  0 +
      "l " + (-map_size[0]/30) + " "+  (-map_size[1]/20) +
      "l " + (-map_size[0]/10) + " "+  + map_size[1]/40 +
      "l " + (-map_size[0]/8) + " "+  0 +	
      "l " + (-map_size[0]/12) + " "+  (-map_size[1]/8) +
      "l " + +map_size[0]/40 + " "+  (-map_size[1]/6) +
      "l " + +map_size[0]/12 + " "+  (-map_size[1]/8) +	
      "Z ").attr({fill: "sandybrown", "fill-opacity" : 1, stroke: "black", "stroke-width": 2 });

// Route
  var africa_route = svg.path(
      "M "+ (map_pos[0] + 49*map_size[0]/64 ) +" " + (map_pos[1]+map_size[1]/20) +
      "l "+ map_size[0]/15 +" " + 0 +  
      "l " + map_size[0]/24 + " " + (map_size[1]/14) +     
      "l "+ -map_size[0]/12 +" " + map_size[1]/30 + 
      "l "+ 0 + " " + map_size[1]/10 +  
      "l " + map_size[0]/10 + " " + map_size[1]/10 +
      "l " + -map_size[0]/30 + " " + map_size[1]/7 +
      "l " + -map_size[0]/12 + " " + -map_size[1]/20 + 
      "l " + -map_size[0]/20 + " " + map_size[1]/20 +
      "l " + map_size[0]/20 + " " + map_size[1]/10 +
      "l " + -map_size[0]/40 + " " + map_size[1]/10 +
      "l " + -map_size[0]/5 + " " + map_size[1]/10 +
      "l " + -map_size[0]/30 + " " + map_size[1]/50 +
      "l " + map_size[0]/30 + " " + map_size[1]/10 
      ).attr({ stroke: "red", "stroke-width": 2 });

   var africa_text = svg.add([{
         type: "text",
         x: sign_2_position[0],
         y: sign_2_position[1] + sign_size[1],
         text: "AfricaByCar",
	 "font-size": sign_size[0]/3,
         "font-weight": "bold",
         fill: "black"
       }]);

}
