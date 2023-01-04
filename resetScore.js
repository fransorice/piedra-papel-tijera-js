score = document.getElementById('counterScore');
resetScore.addEventListener('click', () => {
    score.innerText = 'Puntaje: 0';
    localStorage.setItem("puntaje", 0)
});