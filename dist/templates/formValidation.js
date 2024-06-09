const validateRequired = (value) => {
  return value !== undefined && value !== null && value !== "";
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  // Password must be at least 8 characters, including one letter and one number
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};

const validatePhoneNumber = (phoneNumber) => {
  const re = /^[0-9]{10}$/;
  return re.test(phoneNumber);
};

const validateMinLength = (value, minLength) => {
  return value.length >= minLength;
};

export {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateMinLength,
};
