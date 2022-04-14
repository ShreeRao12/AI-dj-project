unravel = "";
AOT = "";
function preload()
{
    unravel = loadSound("unravel.mp3");
    AOT = loadSound("shinzo wo sasageyo!.mp3");
}
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 500, 500);
}