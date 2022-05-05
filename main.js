function preload()
{

}

function setup(){
    canvas = createCanvas(1220,1000);
    canvas.position(100,150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,234,200,732,500);
    fill(0,250,250);
    stroke(0,34,0);
    circle(200,700,70);
    circle(1000,700,70);
    circle(1000,200,70);
    circle(200,200,70);
    circle(200,300,70);
    circle(200,400,70);
    circle(200,500,70);
    circle(200,600,70);
    circle(1000,300,70);
    circle(1000,400,70);
    circle(1000,500,70);
    circle(1000,600,70);
    fill(255,243,133);
    stroke(0,34,0);
    rect(235,179,730,45);
    rect(235,679,730,45);
}
 
function take_snapshot(){
    save("my_selfi.png");
}