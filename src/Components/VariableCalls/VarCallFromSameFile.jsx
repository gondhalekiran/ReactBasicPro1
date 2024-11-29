import React from "react";

const VarCallFromSameFile = () => {
  const HeadLine = "Student Info";
  const Streams = ["Science", "Arts", "Commerce", "Vocational Cources"];
  const StudentInfo = {
    Name: "Kiran Patil",
    "College Name": "Garud College",
    Streams: "Science",
  };
  return (
    <>
      <h1>Var Call From Same File</h1>
      <h3>{HeadLine}</h3>
      <div>
        <ol type="1">
          <li> {Streams[0]}</li>
          <li> {Streams[1]}</li>
          <li> {Streams[2]}</li>
          <li> {Streams[3]}</li>
        </ol>
      </div>
      <div>
        <ul>
          <li> {Streams[0]}</li>
          <li> {Streams[1]}</li>
          <li> {Streams[2]}</li>
          <li> {Streams[3]}</li>
        </ul>
      </div>
      <div>
        <ul>
          {Streams.map((value,index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Student Name = {StudentInfo.Name}</p>
        <p>College = {StudentInfo["College Name"]}</p>
        <p>Stream = {StudentInfo.Streams}</p>
      </div>
    </>
  );
};

export default VarCallFromSameFile;
