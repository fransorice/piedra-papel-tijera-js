const chFranc = document.querySelector('.franco');
const chEugenia = document.querySelector('.eugenia');
const chCristopher = document.querySelector('.cristopher');
const chVioleta = document.querySelector('.violeta');
const chAjno = document.querySelector('.ajno');
const formCharacters = document.querySelector('.chooseCharacters');
const resultado = document.querySelector('.resultado');
const pj1 = document.createElement('img');
const pj2 = document.createElement('img');
const pj3 = document.createElement('img');
const pj4 = document.createElement('img');
const pj5 = document.createElement('img');

formCharacters.addEventListener('change', (e) => {
    if (e.target.value == 'franco') {
        pj1.src = "./media/franco.png";
        resultado.append(pj1);
    }
    if (e.target.value == 'eugenia') {
        pj1.src="./media/eugenia.png";
        resultado.append(pj1);
    }
    if (e.target.value == 'cristopher') {
        pj1.src="./media/cristopher.png";
        resultado.append(pj1);
    }
    if (e.target.value == 'violeta') {
        pj1.src="./media/violeta.png";
        resultado.append(pj1);
    }
    if (e.target.value == 'ajno') {
        pj1.src="./media/ajno.png";
        resultado.append(pj1);
    }
    if (e.target.value == '') {
        pj1.src="";
        resultado.append();
    }
});
