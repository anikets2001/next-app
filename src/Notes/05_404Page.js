/*---

To create a common (global) 404 page, 
step1: create a file not-found.js in app directory
step2: try to access a wrong url, you will see your page not found

Example:
import React from "react";

const NoTFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NoTFound;


To create a custom 404 page for each feature(route specific)
step1: create a folder using route segment inside a directory e.g. about
step2: [...not-found], this name can be any name not compulsory not-found, but [...etc] is important
step3: create not found page there 

Example:
import React from "react";

const NoTFound = () => {
  return (
    <div>
      <h1>About Page Not Found </h1>
    </div>
  );
};

export default NoTFound;

---*/