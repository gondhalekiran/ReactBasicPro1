import React from "react";
import Header from "../Components/Header";


const Home = () => {
  const vehicle ="Car";
  const brand=["Audi","BMW","TATA"];
  const feature={"model":"Nexon EV"};
  return (
    <><Header></Header>
      <div>
      <p>Home </p>
        <p>Hi I have {vehicle} </p>
        <p>Brand name is {brand[2]} </p>
        <p>Model name is {feature.model} </p>
      </div>
      
    </>
  );
};

export default Home;
