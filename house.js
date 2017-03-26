/* 
Script by: Lars Hedlund - http://www.larshedlund.se 
Resource: Raphaël JavaScript library
*/


// Redrawing layer. Updated after mousemove event occure
function  draw_motion_svg(svg){
 
// Variables
  
  var mw_size = [width*2/5,height*2/5];
  var mw_corner_TL = [width*4/5 - pointerX, height*4/5 - pointerY];
  var mw_corner_TR = [width*6/5 - pointerX, height*4/5 - pointerY];
  var mw_corner_BL = [width*4/5 - pointerX, height*6/5 - pointerY];
  var mw_corner_BR = [width*6/5 - pointerX, height*6/5 - pointerY]; 

  var top_corner_L = [width/6 - width/30, height/6 - height/30];
  var top_corner_R = [5 * width/6, height/6];
  var bottom_corner_L = [width/6, 5*height/6];
  var bottom_corner_R = [5 * width/6, 5*height/6];

  var house_frame_color = "maroon";
  var house_backwall_color = "khaki";

 
// Moving wall

  var backwall = svg.add([
      {
        type: "rect",
        x: mw_corner_TL[0] + 13*mw_size[0]/27,
        y: mw_corner_TL[1],
        width: mw_size[0]/27, 
        height:  mw_size[1],
         fill: house_frame_color,
	stroke: "none"
      },
      {
        type: "rect",
        x: mw_corner_TL[0],
        y: mw_corner_TL[1] + 9*mw_size[1]/20,
        width: mw_size[0], 
        height: mw_size[1]/20, 
        fill: house_frame_color,
	stroke: "none"
      }, 
      {
        type: "rect",
        x: mw_corner_TL[0],
        y:  mw_corner_TL[1],
        width: mw_size[0]/4,
        height: mw_size[1],
        fill: house_backwall_color,
	stroke: "none"
      },
      {
        type: "rect",
        x: mw_corner_TL[0] + 3*mw_size[0]/4,
        y:   mw_corner_TL[1],
        width: mw_size[0]/4,
        height:  mw_size[1],
        fill: house_backwall_color,
	stroke: "none"
      },
      {
        type: "rect",
        x: mw_corner_TL[0],
        y:   mw_corner_TL[1] + 3*mw_size[1]/4,
        width: mw_size[0], 
        height: mw_size[1]/4,
        fill: house_backwall_color,
	stroke: "none"
      },
      {
        type: "rect",
        x: mw_corner_TL[0],
        y:  mw_corner_TL[1],
        width: mw_size[0],
        height: mw_size[1]/6,
        fill: house_backwall_color,
	stroke: "none"
      }]);


// Other Walls
  var left_wall = svg.path(
      "M "+ top_corner_L[0] +" " + top_corner_L[1] +
      "L "+ mw_corner_TL[0] + " " + mw_corner_TL[1] + 
      "L "+ mw_corner_BL[0] + " " + mw_corner_BL[1] +
      "L " + bottom_corner_L[0] + " " + bottom_corner_L[1] + 
      "Z "     ).attr({fill: "darkorange", "fill-opacity" : 0.5, stroke: house_frame_color, "stroke-width": 8 , "stroke-linejoin": "bevel" });
  
  var right_wall = svg.path(
      "M "+ top_corner_R[0] +" " + top_corner_R[1] +
      "L "+ bottom_corner_R[0] + " " + bottom_corner_R[1] + 
      "L "+ mw_corner_BR[0] + " " + mw_corner_BR[1] + 
      "L "+ mw_corner_TR[0] + " " + mw_corner_TR[1] + 
      "Z "     ).attr({fill: "darkorange", "fill-opacity" : 0.5, stroke: house_frame_color, "stroke-width": 8 , "stroke-linejoin": "bevel"  });

  var flour = svg.path(
      "M "+ bottom_corner_L[0] +" " + bottom_corner_L[1] +
      "L "+ mw_corner_BL[0] + " " + mw_corner_BL[1] + 
      "L "+ mw_corner_BR[0] + " " + mw_corner_BR[1] +  
      "L " + bottom_corner_R[0] +" " + bottom_corner_R[1] +
      "Z "     ).attr({fill: "grey", "fill-opacity" : 1, stroke: "black", "stroke-width": 8 ,"stroke-linejoin": "bevel"  });
 
  var roof = svg.path(
      "M "+ top_corner_L[0] +" " + top_corner_L[1] +
      "L "+ top_corner_R[0] +" " + top_corner_R[1] + 
      "L "+ mw_corner_TR[0] + " " + mw_corner_TR[1] +  
      "L " + mw_corner_TL[0] + " " + mw_corner_TL[1] +
      "Z "     ).attr({fill: "slategray", "fill-opacity" : 0.5, stroke: house_frame_color, "stroke-width": 8 ,"stroke-linejoin": "bevel" });


// Painting 

  var picture_TL = [width*8/20 - pointerX/8, height*24/40 - pointerY/8];
  var picture_TR = [width*11/20 - pointerX/4, height*27/40 - pointerY/4];
  var picture_BL = [width*8/20 - pointerX/8, height*29/40 - pointerY/8];
  var picture_BR = [width*11/20 - pointerX/4, height*31/40 - pointerY/4]; 


// Easel
  var easel = svg.path(
      "M "+ (picture_BL[0] ) +" " + (picture_BL[1] + height*2/20) +
      "l "+ ( width*1/20 )+ " " + (- height*6/20 ) + 
      "L "+ (picture_BR[0] ) + " " + (picture_BR[1] + height*2/20 )
        ).attr({
      stroke: "black", 
      "stroke-width": 4 , 
      "stroke-linejoin": "bevel"});

  var easel = svg.path(
      "M "+ (width*22/40 - pointerX/2 ) + " " + (height*40/40 - pointerY/2) +
      "L "+ (picture_TL[0] + width*2/40 )+ " " + (picture_TL[1] + height*1/40) 
        ).attr({
      stroke: "black", 
      "stroke-width": 4 , 
      "stroke-linejoin": "bevel"});

// Frame
  var picture = svg.path(
      "M "+ (picture_TL[0]) +" " + (picture_TL[1]) +
      "L "+ (picture_TR[0] )+ " " + (picture_TR[1] ) + 
      "L "+ (picture_BR[0] ) + " " + (picture_BR[1] )+
      "L " + (picture_BL[0]) + " " + (picture_BL[1])+ 
      "Z "     ).attr({
      fill: "white", 
      "fill-opacity" : 1, 
      stroke: "black", 
      "stroke-width": 4 , 
      "stroke-linejoin": "bevel"});

   var picture = svg.add([
       {
         type: "ellipse",
        cx: (picture_TL[0] + (picture_TR[0] - picture_TL[0])/3),
        cy: (picture_TL[1] + (picture_BL[1] - picture_TL[1])/2),
        rx: (picture_TR[0] - picture_TL[0])/8,
        ry: (picture_BL[1] - picture_TL[1])/8,
	fill: "blue",
        stroke: "blue"
       },
      {
         type: "ellipse",
        cx: (picture_TR[0] - (picture_TR[0] - picture_TL[0])/3),
        cy: (picture_TL[1] + 25*(picture_BR[1] - picture_TR[1])/40),
        rx: (picture_TR[0] - picture_TL[0])/8,
        ry: (picture_BL[1] - picture_TL[1])/8,
	fill: "deeppink",
        stroke: "white"
       }]);

}




