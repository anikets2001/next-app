"use client";
import React from "react";

const StudentDetail = ({ params }) => {
  const { student } = React.use(params);

  const transformName = (name) => {
    let firstChar = name[0].toUpperCase();
    let remainingChars = name.slice(1);

    let fullName = firstChar + remainingChars;
    return fullName;
  };

  return <div>Welcome {transformName(student)}</div>;
};

export default StudentDetail;
