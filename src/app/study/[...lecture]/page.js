"use client";
import React from "react";

const Lecture = ({ params }) => {
  // this segment will now give us an array of all segments of path
  const segment = React.use(params);
  console.log(segment.lecture[0]);

  return (
    <div>
      <ul>
        {segment.lecture.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lecture;
