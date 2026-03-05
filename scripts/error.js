// Функция показа ошибки
function showError(input, message) {
    input.classList.add('is-danger');
    const help = document.createElement('p');
    help.classList.add('help', 'is-danger');
    help.textContent = message;
    input.parentNode.appendChild(help);
}

// Сброс ошибки при вводе
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function () {
        this.classList.remove('is-danger');
        const parent = this.parentNode;
        const errors = parent.querySelectorAll('.help.is-danger');
        errors.forEach(el => el.remove());
    });
});
