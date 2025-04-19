export default defineNuxtPlugin(() => {
  // Track current and previous path to determine navigation direction
  let previousPath:any = null;

  addRouteMiddleware('navigation-direction', (to, from) => {
    // Skip on initial page load
    if (!from.path) return;

    // Set the navigation direction
    const direction = previousPath === to.path ? 'backward' : 'forward';
    document.documentElement.setAttribute('data-direction', direction);

    // Store the current path for the next navigation
    previousPath = from.path;

    // Only applies for the duration of the transition - remove after animation completes
    setTimeout(() => {
      document.documentElement.removeAttribute('data-direction');
    }, 5000);
  }, { global: true });
});
