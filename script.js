const rock = 0;
const paper = 1;
const scissors = 2;
const tie = 0;
const win = 1;
const lost = 2;

const rockOption = document.querySelector('.rock-op');
const paperOption = document.querySelector('.paper-op');
const scissorsOption = document.querySelector('.scissors-op');
const confirmButton = document.querySelector('.confirmButton');
let resetScore = document.querySelector('.counterReset');
let score = document.getElementById('counterScore');
let sumaPuntaje = 0;
let opcion = 0;


rockOption.addEventListener("click", () => {
    rockOption.classList.toggle("optionSelected");
    paperOption.classList.remove("optionSelected");
    scissorsOption.classList.remove("optionSelected");
    confirmButton.classList.add("showButton");
    opcion = 0;
});

paperOption.addEventListener("click", () => {
    rockOption.classList.remove("optionSelected");
    paperOption.classList.toggle("optionSelected");
    scissorsOption.classList.remove("optionSelected");
    confirmButton.classList.add("showButton");
    opcion = 1;
});

scissorsOption.addEventListener("click", () => {
    rockOption.classList.remove("optionSelected");
    paperOption.classList.remove("optionSelected");
    scissorsOption.classList.toggle("optionSelected");
    confirmButton.classList.add("showButton");
    opcion = 2;
});

confirmButton.addEventListener('click', () => {
    setTimeout(()=> {
        if (opcion === 0) {
            play(rock);
        } else if (opcion === 1) {
            play(paper);
        } else if(opcion === 2) {
            play(scissors);
        }
    }, 2000);
    Swal.fire({
        title: "Cargando...",
        width: "300px",
        timer: 2000,
        timerProgressBar: true,
        allowOutsideClick: false,
    });
});

function play(userOption) {
    const pcOption = Math.floor(Math.random() * 3);
    const result = calcResult(userOption, pcOption);
    switch(result) {
        case tie:
            alert(pcOption + "Empataste");
            break;
        case win:
            alert(pcOption + "Ganaste");
            sumaPuntaje = sumaPuntaje + 1;
            score.innerText = 'Puntaje: ' + sumaPuntaje;
            break;
        case lost:
            alert(pcOption + "Perdiste");
            break;
    }
}

function calcResult(userOption, pcOption) {
    if(userOption === pcOption) {
        return tie;
    } else if(userOption === rock) {
        if (pcOption === paper) return lost;
        if (pcOption === scissors) return win;
    } else if(userOption === paper) {
        if (pcOption === rock) return win;
        if (pcOption === scissors) return lost;
    } else if(userOption === scissors) {
        if (pcOption === rock) return lost;
        if (pcOption === scissors) return win;
    }
}


