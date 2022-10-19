import React from "react";

const ReviewInfo = ({ inputs }) => {
  return (
    <div>
      <h3>review You Info</h3>
      <ol>
        {Object.keys(inputs).map((key) => (
          <li key={key}> {key + " " + inputs[key]} </li>
        ))}
      </ol>
    </div>
  );
};

export default ReviewInfo;
