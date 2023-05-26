function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;

        difference = floor(leftwristX - rightwristX);
    }
    

}

function draw() {
    background('#969A97');
    document.getElementById("size").innerHTML="The size of the square is " + difference + "px";
    fill("white");
    stroke("blak");
    square(noseX , noseY , difference);
}


