import React from "react";
import Timer from "../Timer/Timer";

const Scorecard = () => {
  return (
    <div className="scorecard">
      <p>There are 8 questons</p>
      <p>Please answer yes or no for each question</p>
      <Timer />
    </div>
  );
};

export default Scorecard;
