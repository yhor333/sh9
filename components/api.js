const apiUrl = 'https://swapi.dev/api/people/1/';
const content = document.querySelector('.main-content');
const table = document.querySelector('.main-table');
const btn = document.querySelector('.main-btn-call');
let dataApi;

function printTable() {
  fetch(apiUrl)
    .then((resoleve) => {
      return resoleve.json();
    })
    .then(data => {
      for (let property in data) {
        let rowName = document.createElement('tr');
        let rowProperty = document.createElement('tr');
        rowName.innerHTML = `<td>${property}</td>`;
        table.appendChild(rowName);
        rowProperty.innerHTML = `<td>${data[property]}</td>`;
        rowName.appendChild(rowProperty);
        changeStyle();
      }
    })
}

printTable();

function changeStyle() {
  const allTr = document.querySelectorAll('tr');
  for (let tr of allTr) {
    tr.style.backgroundColor = '#e495e4';
  }
}

btn.addEventListener('click', function() {
  content.style.display = 'block';
})
