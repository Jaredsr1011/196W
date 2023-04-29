function showAlert() {

    alert("Hello, world!");
  }
  
  function biggerText() {

    document.getElementById("text-input").style.fontSize = "24pt";
  }
  
  function fancyText() {

    var textArea = document.getElementById("text-input");

    if (document.getElementById("fancy-radio").checked) {
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
      textArea.style.fontWeight = "bold";
    }
  }
  
  function boringText() {

    var textArea = document.getElementById("text-input");

    if (document.getElementById("boring-radio").checked) {
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
      textArea.style.fontWeight = "normal";
    }
  }
  
  function mooText() {

    var textArea = document.getElementById("text-input");
    var text = textArea.value;
    text = text.toUpperCase();
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].trim().split(" ");

      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }

    text = sentences.join(".");
    textArea.value = text;
  }