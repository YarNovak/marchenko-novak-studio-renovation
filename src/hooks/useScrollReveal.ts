import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        // ЗМІНИ ТУТ:
        // threshold: 0.05 означає, що достатньо лише 5% картинки, щоб вона почала з'являтися
        threshold: 0.05,

        // rootMargin з додатнім значенням (50px) означає, що браузер почне
        // анімацію ще ЗА 50 пікселів до того, як картинка взагалі з'явиться на екрані!
        rootMargin: "0px 0px 100px 0px",
      }
    );

    const hiddenElements = document.querySelectorAll(".reveal, .reveal-scale");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
