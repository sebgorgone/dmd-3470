document.addEventListener("DOMContentLoaded", () => {
  const pages = Array.from(document.querySelectorAll(".page"));
  let currentIndex = 0;
  let isScrolling = false;

  console.log(pages);

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function scrollToPage(index, duration = 600) {
    if (isScrolling) return;
    if (index < 0 || index >= pages.length) return;

    const startY = window.scrollY;

    let targetY;
    if (index === pages.length - 1) {
      targetY = document.body.scrollHeight - window.innerHeight;
    } else {
      targetY = pages[index].offsetTop;
    }

    const distance = targetY - startY;
    let startTime = null;
    isScrolling = true;

    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        currentIndex = index;
        isScrolling = false;
        document.body.setAttribute("data-current-page", `page${currentIndex}`);
        console.log("[DONE] Scrolled to page index:", currentIndex);
      }
    }

    requestAnimationFrame(animate);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") scrollToPage(currentIndex + 1);
    if (e.key === "ArrowLeft") scrollToPage(currentIndex - 1);
  });

  scrollToPage(0, 0);
});
