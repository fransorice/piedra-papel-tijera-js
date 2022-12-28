const atack = ['Rock', 'Paper', 'Scissors'];
const tie = 0;
const win = 1;
const lost = 2;

const rockOption = document.querySelector('.rock-op');
const paperOption = document.querySelector('.paper-op');
const scissorsOption = document.querySelector('.scissors-op');
const confirmButton = document.querySelector('.confirmButton');
const resultGame = document.querySelector('.resultGame');
let resetScore = document.querySelector('.counterReset');
let score = document.getElementById('counterScore');
let sumaPuntaje = 0;
let opcion = 0;


rockOption.addEventListener("click", () => {
    rockOption.classList.toggle("optionSelected");
    paperOption.classList.remove("optionSelected");
    scissorsOption.classList.remove("optionSelected");
    if (rockOption.classList.contains('optionSelected') || paperOption.classList.contains('optionSelected') || scissorsOption.classList.contains('optionSelected')) {
        confirmButton.classList.add("showButton");
    } else {
        confirmButton.classList.remove("showButton");
    }
    opcion = 'Rock';
});

paperOption.addEventListener("click", () => {
    rockOption.classList.remove("optionSelected");
    paperOption.classList.toggle("optionSelected");
    scissorsOption.classList.remove("optionSelected");
    if (rockOption.classList.contains('optionSelected') || paperOption.classList.contains('optionSelected') || scissorsOption.classList.contains('optionSelected')) {
        confirmButton.classList.add("showButton");
    } else {
        confirmButton.classList.remove("showButton");
    }
    opcion = 'Paper';
});

scissorsOption.addEventListener("click", () => {
    rockOption.classList.remove("optionSelected");
    paperOption.classList.remove("optionSelected");
    scissorsOption.classList.toggle("optionSelected");
    if (rockOption.classList.contains('optionSelected') || paperOption.classList.contains('optionSelected') || scissorsOption.classList.contains('optionSelected')) {
        confirmButton.classList.add("showButton");
    } else {
        confirmButton.classList.remove("showButton");
    }
    opcion = 'Scissors';
});

confirmButton.addEventListener('click', () => {
    setTimeout(()=> {
        if (opcion === 'Rock') {
            play(atack[0]);
        } else if (opcion === 'Paper') {
            play(atack[1]);
        } else if(opcion === 'Scissors') {
            play(atack[2]);
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
    const numOption = Math.floor(Math.random() * 3);
    const pcOption = atack[numOption];
    const result = calcResult(userOption, pcOption);
    switch(result) {
        case tie:
            resultGame.innerHTML = `¡Han empatado!`
            setTimeout(()=> {
            resultGame.innerHTML = ``
            }, 3000);
            break;
        case win:
            resultGame.innerHTML = `¡Felicidades, ganaste!`
            setTimeout(()=> {
            resultGame.innerHTML = ``
            }, 3000);
            sumaPuntaje = sumaPuntaje + 1;
            score.innerText = 'Puntaje: ' + sumaPuntaje;
            break;
        case lost:
            resultGame.innerHTML = `¡Lo lamento, has perdido!`
            setTimeout(()=> {
            resultGame.innerHTML = ``
            }, 3000);
            break;
    }
}

function calcResult(userOption, pcOption) {
    if(userOption === pcOption) {
        return tie;
    } else if(userOption === 'Rock') {
        if (pcOption === 'Paper') return lost;
        if (pcOption === 'Scissors') return win;
    } else if(userOption === 'Paper') {
        if (pcOption === 'Rock') return win;
        if (pcOption === 'Scissors') return lost;
    } else if(userOption === 'Scissors') {
        if (pcOption === 'Rock') return lost;
        if (pcOption === 'Scissors') return win;
    }
}


