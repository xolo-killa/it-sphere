// Скрипт для переключения между вкладками и отображения информации
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content .job-info");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");

        // Переключаем класс .active для вкладок
        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        // Скрыть все секции с информацией о профессиях
        tabContents.forEach((content) => {
            content.style.opacity = 0;
            content.style.maxHeight = "0";
        });

        // Показать только выбранную секцию
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.opacity = 1;
            targetContent.style.maxHeight = "1000px";
        }
    });
});

// Изначально показать первую вкладку при загрузке страницы
if (tabContents.length > 0) {
    tabContents[0].style.opacity = 1;
    tabContents[0].style.maxHeight = "1000px";
}
