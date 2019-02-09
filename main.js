const EQUAL = '=';
const TIMES_SYMBOL = 'x';
const CLEAR_SYMBOL = 'c';
const ERROR = 'ERROR';

let toEval = [];
let displayArea = $('#num-display');

buttonClicked = (value) => {
  if (value !== EQUAL) {
    if (value === CLEAR_SYMBOL) {
      if ($('#num-display').text() === ERROR) {
        toEval = [];
        $('#num-display').text('');
      }

      toEval.pop();
      $('#num-display').text(function (_,txt) {
        return txt.slice(0, -1);
      });

      return;
    }

    if (value === TIMES_SYMBOL) {
      toEval.push('*');
    } else {
      toEval.push(value);
    }

    $('#num-display').append(value);
  } else {
    try {
      let evaluated = eval(toEval.join(''));
      $('#num-display').text(evaluated);

      toEval = [];
      toEval = evaluated.toString().split('');
    } catch (e) {
      $('#num-display').text(ERROR);
    }
  }
  $('#num-display').scrollLeft($('#num-display').outerWidth());
}
