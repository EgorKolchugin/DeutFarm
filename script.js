document.addEventListener('DOMContentLoaded', function() {
    // Получаем элемент с классом navbar
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');

    // Находим элементы
    const contactForm = document.getElementById("contactForm");

    // Создаём всплывающее окно и затемнение
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
    <p><b>Спасибо за ваше обращение!</b></p>
    <p>Пожалуйста, проверьте вашу почту для получения дополнительной информации.</p>
    <p>Ждём вас снова!</p>
    `;
    popup.style.display = "none"; // По умолчанию скрыто

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.style.display = "none"; // По умолчанию скрыто

    // Добавляем всплывающее окно и затемнение в DOM
    document.body.appendChild(popup);
    document.body.appendChild(overlay);

    // Обработчик отправки формы
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        
        // Показываем всплывающее окно
        popup.style.display = "block";
        overlay.style.display = "block";
                        
        // Скрываем окно через 3 секунды
        setTimeout(() => {
            popup.style.display = "none";
            overlay.style.display = "none";
        }, 5000);

        // Очищаем форму
        contactForm.reset();
    });
    
    // Проверяем, что меню существует
    if (navbar) {
        const stickyOffset = navbar.offsetTop;  // Получаем начальную позицию меню относительно верха страницы

        window.addEventListener('scroll', function() {
            // При прокрутке страницы, проверяем условие
            if (window.scrollY >= stickyOffset) {
                header.classList.add('down');
                navbar.classList.add('sticky');  // Добавляем класс sticky, чтобы зафиксировать меню
            } else {
                header.classList.remove('down')
                navbar.classList.remove('sticky');  // Убираем класс sticky, если меню не нужно фиксировать
            }
        });
    } else {
        console.error('Элемент с классом navbar не найден на странице.');
    }
});



