const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,100}$/;

const passwordRegex = /^.{2,}$/;

// const nameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{2,100}$/;

// const usernameRegex = /^.{6,50}$/;

// const phoneRegex = /^(?:[0-9] ?){6,14}[0-9]$/;

export const isValidLogin = (payload, error, setError) => {
  let tempErrors = {};
  let isValid = true;

  if (payload.email === "") {
    tempErrors.email = "Please enter your email address";
    isValid = false;
  } else if (!emailRegex.test(payload.email)) {
    tempErrors.email = "Invalid email address";
    isValid = false;
  }
  if (payload.password === "") {
    tempErrors.password = "Please enter your password";
    isValid = false;
  } else if (!passwordRegex.test(payload.password)) {
    tempErrors.password = "Password must be at least 2 characters";
    isValid = false;
  }
  setError({
    ...error,
    ...tempErrors,
  });
  return isValid;
};
