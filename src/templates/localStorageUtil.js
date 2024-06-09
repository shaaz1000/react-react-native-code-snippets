export const localStorageUtil = {
  setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  getItem: (key) => JSON.parse(localStorage.getItem(key)),
  removeItem: (key) => localStorage.removeItem(key),
};
