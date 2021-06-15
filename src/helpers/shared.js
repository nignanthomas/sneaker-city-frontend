export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const emitStorageEvent = () => window.dispatchEvent(new Event('storage'));
