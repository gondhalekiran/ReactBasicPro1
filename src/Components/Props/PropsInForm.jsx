import React from "react";

const PropsInForm = ({ HeadLine1, Streams1, StudentInfo1 }) => {
  return (
    <>
      <h1>Props In Form</h1>
      <h3>{HeadLine1}</h3>
      <div>
        <ol type="1">
          <li> {Streams1[0]}</li>
          <li> {Streams1[1]}</li>
          <li> {Streams1[2]}</li>
          <li> {Streams1[3]}</li>
        </ol>
      </div>

      <div>
        <ul>
          {Streams1.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Student Name = {StudentInfo1.Name}</p>
        <p>College = {StudentInfo1["College Name"]}</p>
        <p>Stream = {StudentInfo1.Streams}</p>
      </div>
    </>
  );
};

export default PropsInForm;
