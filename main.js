noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/4x9Y5ytp/Clown-nose-large.webp");

}

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized !!!");
}

function draw(){
    image(video , 0 , 0, 400 , 400);
    image(clown_nose , noseX , noseY , 60 , 60);
}
function take_snapshot(){
    save("my_filter.png");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);

        noseX = result[0].pose.nose.x - 155;
        noseY = result[0].pose.nose.y - 65;

        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

