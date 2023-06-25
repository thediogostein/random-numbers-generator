const form = document.querySelector('form');

function generateRandomNrs(howMany) {
  const randomNrs = [];

  for (let i = 0; i < howMany; i++) {
    randomNrs.push(Math.floor(Math.random() * 100) + 1);
  }

  return randomNrs;
}

function generateRandomNrsHtml(howMany) {
  return generateRandomNrs(howMany)
    .map((nr) => `<div class="nr">${nr}</div>`)
    .join('');
}

function getNumbers(e) {
  e.preventDefault();

  const howMany = form.querySelector('select').value;
  renderNumbers(howMany);
}

function renderNumbers(howMany) {
  document.getElementById('numbers-container').innerHTML =
    generateRandomNrsHtml(howMany);
}

renderNumbers(6);

form.addEventListener('submit', getNumbers);
