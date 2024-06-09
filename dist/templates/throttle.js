export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
