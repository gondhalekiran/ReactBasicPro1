import React from "react";

import Header from "../Components/Header";
import DestruredPropsObject from "../Components/Props/DestruredPropsObject";
import PropsObject from "../Components/Props/PropsObject";
const PropsObjectOrDestructured = () => {
  const cars = ["TATA"];
  return (
    <div>
      <Header></Header>
      <PropsObject brand={cars[0]} /> 
      <DestruredPropsObject brand={cars[0]} />
    </div>
  );
};

export default PropsObjectOrDestructured;
