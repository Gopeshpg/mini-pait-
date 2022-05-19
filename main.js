var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("my canvas");
ctx = canvas.getcontext("2d");

color = "black";
width_of_line = 2;

if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

    

Canvas.addEventlistener("mouseDown", my_mouseDown)
function my_mouseDown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}    
    
Canvas.addEventlistener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

Canvas.addEventlistener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseup";

}

Canvas.addEventlistener("mousemove", my_mousemove);
function my_mousemove (e)
{
    var current_position_of_mouse_x = e.cilentX - canvas.offsetLeft;
    var current_position_of_mouse_Y = e.cilentY - canvas.offsetTop;
    if(mouseEvent == "mouseDown")
    {
    console.log(" Current Position Of X A nd Y Coordinates = ")
    console.log("X = "+current_position_of_mouse_x+"Y ="+current_position_of_mouse_Y);
    ctx.beginPath();
    ctx.strokestyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_Y, radius ,0 , 2 *Math.PI);
    ctx.stroke(); 
    }  
}

function my_touchstart(e)
    {
        console.log("my_touchatart");

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        

      last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

       
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_mousemove(e)
    {
        console.log("my_touchMove");

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "touchDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    function clearArea()
 {
   ctx.clearRect(0,0,canvas.width,canvas.height);
    
}