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

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("model loaded!");
}
function draw()
{
    image(video, 0, 0, 500, 500);
}

function gotPoses(results)
{
    if(results.length > 0){
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("LeftWristX = "+leftWristX+" leftWristY = "+leftWristY);

    RightWristX = results[0].pose.rightWrist.x;
    RightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = "+RightWristX+" RightWristY = "+RightWristY);
}
}