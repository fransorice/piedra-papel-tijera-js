const callApi = fetch('./personajes.json');
const namePj = document.querySelector('#characters');
const re = document.getElementById('resultado');
const formCharacters = document.querySelector('.chooseCharacters');
let sco = localStorage.getItem("score");
const toastCh = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

function francoSelected () {
    localStorage.setItem("score", "franco");
}
function eugeniaSelected () {
    localStorage.setItem("score", "eugenia");
}
function cristopherSelected() {
    localStorage.setItem("score", "cristopher");
}


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
                re.innerHTML = `<div class="charactersInfo"></div>`;
                localStorage.setItem("score", "noCharacter");
                break;
                case 'Franco':
                re.innerHTML = `<div class="charactersInfo"><img src=${item2[1]}></img><div class="charactersNameAndAge"><h3>Nombre: ${item[1]}</h3>
                                <h3>Edad: ${item1[1]}</h3></div></div>`;
                francoSelected();
                toastCh.fire({
                    icon: 'success',
                    title: 'Elegiste a Franco'
                });
                break;
            case 'Eugenia':
                re.innerHTML = `<div class="charactersInfo"><img src=${item2[2]}></img><div class="charactersNameAndAge"><h3>Nombre: ${item[2]}</h3>
                                <h3>Edad: ${item1[2]}</h3></div></div>`;
                eugeniaSelected();
                toastCh.fire({
                    icon: 'success',
                    title: 'Elegiste a Eugenia'
                });                
                break;
            case 'Cristopher':
                re.innerHTML = `<div class="charactersInfo"><img src=${item2[3]}></img><div class="charactersNameAndAge"><h3>Nombre: ${item[3]}</h3>
                <h3>Edad: ${item1[3]}</h3></div></div>`;
                cristopherSelected();
                toastCh.fire({
                    icon: 'success',
                    title: 'Elegiste a Cristopher'
                });                
                break;
            }
    });
    if (sco === "franco") {
        francoSelected();
        formCharacters.value = "Franco";
        re.innerHTML = `<div class="charactersInfo"><img src=${item2[1]}></img><div class="charactersNameAndAge"><h3>Nombre: ${item[1]}</h3>
                        <h3>Edad: ${item1[1]}</h3></div></div>`;
    } else if (sco === "eugenia") {
        eugeniaSelected();
        formCharacters.value = "Eugenia";
        re.innerHTML = `<div class="charactersInfo"><img src=${item2[2]}></img><div class="charactersNameAndAge"><h3>Nombre: ${item[2]}</h3>
                        <h3>Edad: ${item1[2]}</h3></div></div>`;
    } else if (sco === "cristopher") {
        cristopherSelected();
        formCharacters.value = "Cristopher";
        re.innerHTML = `<div class="charactersInfo"><img src=${item2[3]}></img><div class="charactersNameAndAge"><h3>Nombre: ${item[3]}</h3>
                        <h3>Edad: ${item1[3]}</h3></div></div>`;
    } else {
        localStorage.setItem("score", "noCharacter");
        formCharacters.value = "";
        re.innerHTML = `<div class="charactersInfo"></div>`;
    }
});

