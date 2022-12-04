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
let sumaPuntaje = 0;


rockOption.addEventListener("click", () => {
    rockOption.classList.add("optionSelected");
    paperOption.classList.remove("optionSelected");
    scissorsOption.classList.remove("optionSelected");
    confirmButton.classList.add("showButton");
    play(rock);
});

paperOption.addEventListener("click", () => {
    rockOption.classList.remove("optionSelected");
    paperOption.classList.add("optionSelected");
    scissorsOption.classList.remove("optionSelected");
    confirmButton.classList.add("showButton");
    play(paper);
});

scissorsOption.addEventListener("click", () => {
    rockOption.classList.remove("optionSelected");
    paperOption.classList.remove("optionSelected");
    scissorsOption.classList.add("optionSelected");
    confirmButton.classList.add("showButton");
    play(scissors);
});

confirmButton.addEventListener('click', () => {
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
            alert("Puntaje: " + (sumaPuntaje = sumaPuntaje + 1));
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

