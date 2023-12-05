const table = document.createElement('table');

const slova = ['table', 'computer','chair','pencil']

for (let i = 1; i < 11; i++) {
    let tr = document.createElement('tr');
    for (let j = 1; j < 4; j++) {
        let td = document.createElement("td");
        td.innerText = i * j;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

const div = document.createElement('div');
div.classList.add('divik');
div.appendChild(table);

document.body.appendChild(div);