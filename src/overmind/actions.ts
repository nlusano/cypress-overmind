import { Context } from ".";

export const decrement = ({ state }: Context) => state.count--;
export const increment = ({ state }: Context) => state.count++;
export const setFNameValue = ({ state }: Context, { val }: { val: string }) => {
  state.form.fname = val;
};
export const setLNameValue = ({ state }: Context, { val }: { val: string }) => {
  state.form.lname = val;
};
export const validateForm = ({ state }: Context) => {
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

export const toggleFilter = ({ state }: Context) => {
  state.showAllTodos = !state.showAllTodos;
};
