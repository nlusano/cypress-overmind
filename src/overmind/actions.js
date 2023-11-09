export const decrement = ({ state }) => state.count--;
export const increment = ({ state }) => state.count++;
export const setFNameValue = ({ state }, val) => (state.form.fname = val);
export const setLNameValue = ({ state }, val) => (state.form.lname = val);
export const validateForm = ({ state }) => {
  if (!state.form.fname && !state.form.lname) {
    state.form.isValid = false;
    state.form.validationErr = "Form is empty";
  } else {
    if (!state.form.fname) {
      state.form.isValid = false;
      state.form.validationErr = "Enter first name";
    }
    if (!state.form.lname) {
      state.form.isValid = false;
      state.form.validationErr = "Enter last name";
    }
  }

  return null;
};

export const toggleFilter = ({ state }) => {
  state.showAllTodos = !state.showAllTodos;
};
