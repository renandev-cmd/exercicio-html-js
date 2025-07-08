const form = document.getElementById(`form-valida`);
const valorA = document.getElementById(`valor-a`);
const valorB = document.getElementById(`valor-b`);
const successContainer = document.querySelector(`.success-message`);
const errorContainer = document.querySelector(`.error-message`);


form.addEventListener(`submit`, function(e) {
    e.preventDefault();
})

form.addEventListener(`submit`, function(validacao) {

    const successMessage = `O Valor B (${valorB.value}) é maior que o Valor A (${valorA.value}), portanto, esta tudo certo!`

    if (Number(valorB.value) > Number(valorA.value)){
        document.querySelector(`.success-message`).innerHTML = successMessage;
        successContainer.style.display = `flex`;
        errorContainer.style.display = `none`;
    }
    else {
        document.querySelector(`.error-message`).innerHTML = `O valor B deve ser maior do que o Valor A.`
        successContainer.style.display = `none`;
        errorContainer.style.display = `flex`;
    }
})