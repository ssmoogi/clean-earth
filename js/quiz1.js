var total = 0;

function getAnswer(number) {
  var radio = "radio" + number;
  var isChecked = false;
  var radios = document.querySelectorAll('input[name="' + radio + '"]');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isChecked = true;
    }
  }

  if (!isChecked) {
    alert('You have to select an answer first before you click "Next"');
    return false;
  }

  var answerFromRadioButton = document.querySelector('input[name="' + radio + '"]:checked').value;
  total += +answerFromRadioButton;

  document.getElementById('answer' + number).classList.add('hidden');
  document.getElementById('answer' + (number + 1)).classList.remove('hidden');

  document.getElementById('checkmark' + number).classList.add('checkmark-visible')

  if (+number == 8) {
     document.getElementById('lastResult').innerHTML = total;
  }
}
