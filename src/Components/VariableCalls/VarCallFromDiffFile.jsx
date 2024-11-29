import React from "react";

import { HeadLine, Streams,StudentInfo} from "../../Utils/data";
const VarCallFromDiffFile = () => {

  return (
    <>
     <h1>Var Call From Diff File</h1>
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

export default VarCallFromDiffFile;
