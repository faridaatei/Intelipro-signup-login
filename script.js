var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 1000;
myCanvas.height = 500;

let xGrid=10;
let yGrid=10;
let cellSize=10;
  
let ctx = myCanvas.getContext("2d");

let data={

    year:2017/1/1
}
function drawGrids(){

    ctx.beginPath();


    while (xGrid<myCanvas.height)
    {
        ctx.moveTo(0,xGrid);
        ctx.lineTo(myCanvas.width,xGrid);
        xGrid+=cellSize;
    }

while (yGrid<myCanvas.width)
    {
        ctx.moveTo(yGrid,0);
        ctx.lineTo(yGrid,myCanvas.height);
        yGrid+=cellSize;
    }




    ctx.strokeStyle="gray";
    ctx.stroke();





}


function blocks(count)

{
    return count*10;
}


function drawAxis()
{
ctx.beginPath();
ctx.strokeStyle="black";
ctx.moveTo(blocks(5),blocks(5));
ctx.lineTo(blocks(5),blocks(40));
ctx.lineTo(blocks(80),blocks(40));
ctx.stroke();

}


drawGrids();
drawAxis();


