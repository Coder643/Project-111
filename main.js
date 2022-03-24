//https://teachablemachine.withgoogle.com/models/58DjdnaHa/

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="' +data_uri+'"/';

});
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/58DjdnaHa/model.json", modelLoaded);

function modelLoaded(){
console.log("modelLoaded");   
}


function speak(){
    var synth = window.speechSynthesis;
    speek_data_1 = "THe First Prediction Is: " + prediction_1;
    speek_data_2 = "THe Second Prediction Is: " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speek_data_1 + speek_data_2);
    
    synth.speak(utterThis);
}
