import data from './countries.json' assert { type: 'json' };
const output = document.getElementById("output");

console.log(data);

console.log('---- Arlin is testing some things ----');

console.log(data[0].name.common);

let html = "";
for (let i = 0; i < data.length; i++) {

    html += `<div>`;
    html += `<h1>${data[i].name.common}</h1>`;

    if (data[i].capitalInfo.latlng !== undefined) {
        for (let j = 0; j < data[i].capitalInfo.latlng.length; j++) {
            html += `<h2>${data[i].capitalInfo.latlng[j]}</h2>`;
        }
    } else {
        html += `<h2>No lat long defined...</h2>`;
    }

    html += `<div>`;
}
output.innerHTML = html;
