const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
const btn = document.querySelector("button");
recognition.interimResults = true;

btn.addEventListener("click", e => {
  let p = document.createElement("p");
  const wordSpeech = document.querySelector(".word-speech");

  recognition.addEventListener("result", event => {
    console.log(event.results);
    const transcript = Array.from(event.results);

    transcript
      .map(result => result[0])
      .map(result => result.transcript)
      .join("");
    p.textContent = transcript;
    wordSpeech.append(p);
  });
});

recognition.start();

recognition.onspeechend = function() {
  recognition.stop();
};
