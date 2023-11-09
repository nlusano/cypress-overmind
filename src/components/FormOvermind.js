import React from "react";
import { useAppState, useActions } from "../overmind";

const FormOvermind = () => {
  const { form } = useAppState();
  const { setFNameValue, setLNameValue, validateForm } = useActions();

  return (
    <>
      <form>
        <label>First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={form.fname}
          required
          onChange={(e) => setFNameValue(e.target.value)}
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={form.lname}
          required
          onChange={(e) => setLNameValue(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={() => validateForm()} />
        <br />
        <br />
        {!form.isValid && (
          <>
            <label>Validation error:</label>
            <br />
            <div id="validation" name="validation">
              {form.validationErr}
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default FormOvermind;
