const maxPoints = document.getElementById('maxPoints');
const achievedPoints = document.getElementById('achievedPoints');
const resultBtn = document.getElementById('result-btn');
const resultPercent = document.getElementById('result-percent');
const resultNote = document.getElementById('result-note');
let note = '';
let emoji = '';

resultBtn.addEventListener('click', () => {
  const percentResult = Math.round(
    (100 * achievedPoints.value) / maxPoints.value,
  );
  resultPercent.innerText = `${percentResult}%`;
  if (percentResult <= 29) {
    note = '6';
    emoji = '😵';
  } else if (percentResult <= 34) {
    note = '5-';
    emoji = '🥵';
  } else if (percentResult <= 39) {
    note = '5';
    emoji = '🤯';
  } else if (percentResult <= 44) {
    note = '5+';
    emoji = '🙁';
  } else if (percentResult <= 50) {
    note = '4-';
    emoji = '🥺';
  } else if (percentResult <= 56) {
    note = '4';
    emoji = '🤫';
  } else if (percentResult <= 60) {
    note = '4+';
    emoji = '😐';
  } else if (percentResult <= 65) {
    note = '3-';
    emoji = '🤭';
  } else if (percentResult <= 70) {
    note = '3';
    emoji = '🥱';
  } else if (percentResult <= 75) {
    note = '3+';
    emoji = '😏';
  } else if (percentResult <= 80) {
    note = '2-';
    emoji = '😌';
  } else if (percentResult <= 86) {
    note = '2';
    emoji = '😊';
  } else if (percentResult <= 91) {
    note = '2+';
    emoji = '🤓';
  } else if (percentResult <= 95) {
    note = '1-';
    emoji = '🥳';
  } else {
    note = '1';
    emoji = '🤩';
  }
  resultNote.innerText = `${note} ${emoji}`;
});
