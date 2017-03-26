/* 
Script by: Lars Hedlund - http://www.larshedlund.se 
Resource: Raphaël JavaScript library
*/

function  draw_grej_svg(svg, pointerX, pointerY)
{
 
// Variables
  var position = [2*width/3 + 100, height/2]; 
  var grej_size = [width/100,height/100];
  
  var body_size = [grej_size[0]*2 ,grej_size[1]*12 ];
  var body_position = [position[0] - body_size[0]/2, position[1] + grej_size[1]*4];
  
  var left_leg_start = [body_position[0] - body_size[0]/2, body_position[1] + body_size[1]];
  var right_leg_start = [body_position[0] + grej_size[0]*1 , body_position[1] + body_size[1]];

  var right_foot = [position[0] + grej_size[0]*4, position[1] + grej_size[1]*18];
  var left_foot = [position[0] - grej_size[0]*6, position[1] + grej_size[1]*18];


// Moving Body

  var body = svg.add([
 	{
        type: "ellipse",
        cx: position[0],
        cy: position[1],
        rx: grej_size[0]*4,
        ry: grej_size[1]*4,
	fill: "none",
        stroke: "grey",
        "stroke-width": 6
       },      

	{
        type: "rect",
        x: body_position[0],
        y: body_position[1],
        width: body_size[0], 
        height:  body_size[1],
         fill: "red",
	stroke: "none"
      },

      {
        type: "rect",
        x: right_foot[0],
        y: right_foot[1],
        width: grej_size[0]*2,
        height: grej_size[1]*1,
        fill: "black",
	stroke: "none"
      },
      {
        type: "rect",
        x: left_foot[0],
        y: left_foot[1],
        width: grej_size[0]*2,
        height: grej_size[1]*1,
        fill: "black",
	stroke: "none"
      }]);

}




