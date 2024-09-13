import React from "react";

function Note() {
  return (
    <div className="note">
      <form className="form-container">
        <input
          type="text"
          id="weather"
          name="weather"
          placeholder="Enter weather condition"
          required
        ></input>
        <input
          type="number"
          id="temperature"
          name="temperature"
          placeholder="Enter temperature"
          required
        ></input>
        <label for="political_stability">Political Stability:</label>
        <select id="political_stability" name="political_stability" required>
          <option value="" disabled selected>
            Select political stability level
          </option>
          <option value="stable">Stable</option>
          <option value="unstable">Unstable</option>
        </select>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Note;
