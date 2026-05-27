document.addEventListener("DOMContentLoaded", function () {

    const registryObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });


    const animatedElements = document.querySelectorAll(".scroll-fade");
    animatedElements.forEach(element => registryObserver.observe(element));


  //Atualiza o ano do copyright automaticamente no footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});
