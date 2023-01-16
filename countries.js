import data from './countries.json' assert { type: 'json' };
const output = document.getElementById("output");

console.log(data);

console.log('---- Arlin is testing some things ----');

console.log(data[0].name.common);

let html = "";
for (let i = 0; i < data.length; i++) {
    html += `<h1>${data[i].name.common}</h1>`;
}
output.innerHTML = html;