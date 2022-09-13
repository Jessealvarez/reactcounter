import React from "react";

const StarCounter = (props) => {
  let stars = "";
  for (let i = 0; i <= props.count; i++) {
    stars = stars + "⭐";
  }
  return <p>{stars}</p>;
};

export default StarCounter;
