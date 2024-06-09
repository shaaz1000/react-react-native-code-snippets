const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  // Password must be at least 8 characters, including one letter and one number
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};

const validateName = (name) => {
  return name.length > 0;
};

const validateAddress = (address) => {
  return address.length > 0;
};

const validatePhoneNumber = (phoneNumber) => {
  const re = /^[0-9]{10}$/;
  return re.test(phoneNumber);
};

export {
  validateEmail,
  validatePassword,
  validateName,
  validateAddress,
  validatePhoneNumber,
};
