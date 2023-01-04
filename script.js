const atack = ['Rock', 'Paper', 'Scissors'];
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
let sp = 0;
let puntaje = localStorage.getItem("puntaje");
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

if (puntaje !== null) {
    score.innerText = 'Puntaje: ' + puntaje;
} 

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
            showConfirmButton: false,
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
            Swal.fire({
                title: "Empataste",
                width: "300px",
                icon: "info",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                allowOutsideClick: true,
            });
            break;
        case win:
            setTimeout(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Tu puntaje ha aumentado'
                });
            }, 2000);
            Swal.fire({
                title: "¡Ganaste!",
                width: "300px",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                allowOutsideClick: true,
            });
            puntaje = JSON.parse(puntaje) + 1;
            score.innerText = 'Puntaje: ' + puntaje;
            break;
        case lost:
            Swal.fire({
                title: "Perdiste",
                width: "300px",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                allowOutsideClick: true,
            });
            break;
    }
    localStorage.setItem("puntaje", puntaje);
    if (JSON.parse(puntaje) === 5) {
        setTimeout (() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Felicidades, acabas de ganar, puedes seguir jugando.',
                showConfirmButton: false,
                timer: 3000
              })
        }, 3100);
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


