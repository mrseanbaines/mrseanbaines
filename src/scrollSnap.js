document.addEventListener('DOMContentLoaded', () => {
  const targets = Array.from(document.querySelectorAll('.scroll-snap-element'));
  const container = document.getElementById('scroll-snap-container');

  const findNearestTarget = pos => {
    return targets.reduce((prev, cur) => {
      return Math.abs(cur.offsetTop - pos) < Math.abs(prev.offsetTop - pos)
        ? cur
        : prev;
    });
  };

  let isScrolling;

  container.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
      const nearestTarget = findNearestTarget(container.scrollTop);

      container.scrollTo({
        top: nearestTarget.offsetTop,
        behavior: 'smooth',
      });
    }, 50);
  });
});
