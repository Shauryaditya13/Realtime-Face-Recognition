Webcam.set({
    width:360,
    height:300,
    image_format:'png',
    png_quality:90
   });
   
   camera=document.getElementById("camera");
   Webcam.attach("camera");
   
   function TakeImage() {
    Webcam.snap(function(data_url){
    document.getElementById("Result").innerHTML="<img id='capturedimage' src='"+data_url+"'>";
    });
   }
   console.log("ml5version",ml5.version);
   imageclassifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/agSFt2ny9/model.json",modelloaded);

   function modelloaded() {
    console.log("modelloaded");
}

function IdentifyImage() {
    img=document.getElementById("capturedimage");
    imageclassifier.classify(img,getresult);
}

function getresult(error,results) {
if(error) {
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("Face_Name").innerHTML=results[0].label;
    document.getElementById("Face_Accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}