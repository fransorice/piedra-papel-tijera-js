const callApi = fetch('./personajes.json');
const namePj = document.querySelector('#characters');
const re1 = document.getElementById('resultado');
const formCharacters = document.querySelector('.chooseCharacters');

callApi.then((response) => {
    return response.json();
}).then((response) => {
    const item = response.map((i) => `<option value=${i.nombre}>${i.nombre}</option>`);
    const item1 = response.map((i) => `<option value=${i.edad}>${i.edad}</option>`);
    const item2 = response.map((i) => i.img);
    namePj.innerHTML = item;
    formCharacters.addEventListener('change', (e) => {
        switch(e.target.value) {
            case '':
                re1.innerHTML = `<div class="charactersInfo"></div>`;
                break;
            case 'Franco':
                re1.innerHTML = `<div class="charactersInfo"><img src=${item2[1]}></img><h3>Nombre: ${item[1]}</h3>
                                <h3>Edad: ${item1[1]}</h3></div>`;
                break;
            case 'Eugenia':
                re1.innerHTML = `<div class="charactersInfo"><img src=${item2[2]}></img><h3>Nombre: ${item[2]}</h3>
                                <h3>Edad: ${item1[2]}</h3></div>`;
                break;
            case 'Cristopher':
                re1.innerHTML = `<div class="charactersInfo"><img src=${item2[3]}></img><h3>Nombre: ${item[3]}</h3>
                                <h3>Edad: ${item1[3]}</h3></div>`;
                break;
        }
    });
});