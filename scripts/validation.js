function validateFullname() {
    // 1. Проверка ФИО (не пустое, минимум 2 слова)
    const fullname = document.getElementById('fullname');
    const fullnameValue = fullname.value.trim();

    fullname.classList.remove('is-danger');
    const parent = fullname.parentNode;
    const errors = parent.querySelectorAll('.help.is-danger');
    errors.forEach(el => el.remove());

    if (fullnameValue === '') {
        showError(fullname, 'Введите фамилию и имя');
        return false;
    } else if (fullnameValue.split(' ').length < 2) {
        showError(fullname, 'Введите фамилию и имя');
        return false;
    }
    return true;
}

function validateEmail() {
    // 2. Проверка email (не пустой, содержит @ и .)
    const email = document.getElementById('email');
    const emailValue = email.value.trim();

    email.classList.remove('is-danger');
    const parent = email.parentNode;
    const errors = parent.querySelectorAll('.help.is-danger');
    errors.forEach(el => el.remove());

    if (emailValue === '') {
        showError(email, 'Введите email');
        return false;
    } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
        showError(email, 'Введите корректный email');
        return false;
    }
    return true;
}

function validatePhone() {
    // 3. Проверка телефона (не пустой, 10 цифр)
    const phone = document.getElementById('phone');
    const phoneValue = phone.value.trim();

    phone.classList.remove('is-danger');
    const parent = phone.parentNode;
    const errors = parent.querySelectorAll('.help.is-danger');
    errors.forEach(el => el.remove());

    if (phoneValue === '') {
        showError(phone, 'Введите номер телефона');
        return false;
    } else if (!/^[\d+\-\s()]+$/.test(phoneValue) || phoneValue.replace(/\D/g, '').length < 10) {
        showError(phone, 'Введите корректный номер телефона');
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');
    if (!form) return;

    const fullname = document.getElementById('fullname');
    const fullnameValue = fullname.value.trim();
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    const phone = document.getElementById('phone');
    const phoneValue = phone.value.trim();

    // Валидация при отправке формы
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // отменяет перезагрузку страницы

        if (validateFullname() && validateEmail() && validatePhone()) {
            const formData = {
                fullname: fullnameValue,
                phone: phoneValue,
                email: emailValue,
                message: document.getElementById('message').value.trim() || '(незаполнено)'
            };

            const event = new CustomEvent('formValid', { detail: formData });
            document.dispatchEvent(event);

            alert('Форма отправлена! Данные в консоли.');
        }
    });

    // Проверка на лету
    fullname.addEventListener('blur', function () {
        validateFullname();
    });

    email.addEventListener('blur', function () {
        validateEmail();
    });

    phone.addEventListener('blur', function () {
        validatePhone();
    });
})