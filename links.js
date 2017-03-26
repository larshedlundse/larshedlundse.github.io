/* 
Script by: Lars Hedlund - http://www.larshedlund.se 
Resource: Raphaël JavaScript library
*/
// Load xml-files
function loadXMLDoc(dname)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
//xhttp.send();
return xhttp.responseXML;
}

// Make link layer that will be updatet only once per page resize
function  draw_links_svg(svg){
 
// Variables

   var sign_size = [width/30,height/30];
   var sign_1_position = [width/30, 14*height/20];
   var sign_2_position = [55*width/60, 10*height/20];
   var sign_3_position = [16*width/40 , 22*height/40]


// Signs Links

   // Linkedin
   var sign_1 = svg.add([
       {
         type: "rect",
         x: sign_1_position[0],
         y: sign_1_position[1],
         width: sign_size[0]*2,
         height: sign_size[1]*2,
         fill: "blue",
         "fill-opacity" : 0.0,
         stroke: "grey",
         "href": "http://www.linkedin.com/in/lhedlund"
       }]);

   // Africabycar
   var sign_2 = svg.add([
       {
         type: "rect",
         x: sign_2_position[0] - 2*sign_size[0],
         y: sign_2_position[1],
         width: sign_size[0]*4,
         height: sign_size[1]*5,
         fill: "blue",
         "fill-opacity" : 0.0,
         stroke: "none",
         "href": "http://www.larshedlund.se/africabycar.com"
       }]);


   // Flickr
   var sign_3 = svg.add([
       {
         type: "rect",
         x: sign_3_position[0] - 2*sign_size[0],
         y: sign_3_position[1],
         width: sign_size[0]*3,
         height: sign_size[1]*3,
         fill: "blue",
         "fill-opacity" : 0.0,
         stroke: "none",
         "href": "http://www.flickr.com/photos/larshedlund/sets/"
       }]);

}




