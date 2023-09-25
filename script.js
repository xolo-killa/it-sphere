const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content .job-info");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");

        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        tabContents.forEach((content) => {
            content.style.opacity = 0;
            content.style.maxHeight = "0";
        });

        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.opacity = 1;
            targetContent.style.maxHeight = "1000px";
        }
    });
});

if (tabContents.length > 0) {
    tabContents[0].style.opacity = 1;
    tabContents[0].style.maxHeight = "1000px";
}
