const validateEmail = (email) => {
    const validEmail = typeof email === "string" && email.trim() !== "";
    // const validPassword =
    //   typeof password === "string" && password.trim().length >= 6;
  
    return validEmail;
  };
  
  module.exports = validateEmail;