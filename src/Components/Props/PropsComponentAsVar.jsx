import React from "react";

export const PropsObject = (props) => {
  return (
    <>
      <h1>Props Object</h1>
      <p>My car Name is {props.brand} Nexon EV</p>
    </>
  );
};

export const DestruredPropsObject = ({ brand }) => {
  return (
    <>
      <h1>Destrured Props Object</h1>
      <p>My car Name is {brand} Nexon EV</p>
    </>
  );
};
