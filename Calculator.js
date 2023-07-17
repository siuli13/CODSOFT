function vib() {
  navigator.vibrate(100);
}

function calculate() {
  var input = document.forms.screen.value;
  var result = eval(input);

  document.forms.screen.value = result;
}

function clearScreen() {
  document.forms.screen.value = "";
}
