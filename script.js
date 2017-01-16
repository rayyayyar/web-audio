
var audioContext = new window.AudioContext();
var audioElement = document.getElementById('audioElement');

var source = audioContext.createMediaElementSource(audioElement);
console.log(source);
var analyser = audioContext.createAnalyser();

// bind analyser to media element source
source.connect(analyser);
source.connect(audioContext.destination);

// frequencyBinCount tells you how many values you'll receive from the analyser
var frequencyData = new Uint8Array(analyser.frequencyBinCount);

function renderFrame() {
   requestAnimationFrame(renderFrame);
   // update data in frequencyData
   analyser.getByteFrequencyData(frequencyData);
   // render frame based on values in frequencyData
   console.log(frequencyData);
}
renderFrame();
