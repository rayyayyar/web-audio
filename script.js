// define variables

var audioCtx = new AudioContext();
var source;


// use XHR to load an audio track, and
// decodeAudioData to decode it and stick it in a buffer.
// Then we put the buffer into the source

function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'caribou.mp3', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        source.buffer = myBuffer;
        
        source.connect(audioCtx.destination);
        
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();
}

function play() {
  getData();
  source.start(0);
  
}

play();