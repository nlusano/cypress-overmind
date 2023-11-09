export const decrement = ({ state }) => state.count--;
export const increment = ({ state }) => state.count++;
export const setFNameValue = ({ state }, val) => (state.form.fname = val);
export const setLNameValue = ({ state }, val) => (state.form.lname = val);
export const validateForm = ({ state }) => {
  if (!state.form.fname || !state.form.lname) {
    console.log("Cannot submit");
    state.form.isValid = false;
  }
};
