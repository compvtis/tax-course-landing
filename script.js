document.addEventListener("DOMContentLoaded", function () {
    const enrollButtons = document.querySelectorAll(".cta-btn");
    enrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Redirecting to payment page...");
        });
    });
});
