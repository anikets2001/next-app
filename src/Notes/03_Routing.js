/*---

Basic Routing:

- Next.js follow file based routing
- To create a new route we have to create a folder in src/app with the exact name we want the route
   and inside that folder create a page.js file
- go to that created route in browser and you will see that component

---*/

/*---

Navigation:

To Navigate between pages we use 
1. <Link href="/about">About</Link> Component and 
2. <button> with a hook useRouter

example below:
"use client"
import { useRouter } from "next/navigation";


inside component
  const router = useRouter();

   const handleNavigation = (route) => {
    router.push(route);
  };

   to navigate with button import useRouter hook 
//   <button onClick={() => handleNavigation("/login")}>Go to Login Page</button>
//   <button onClick={() => handleNavigation("/about")}>Go to About Page</button>

---*/

/*---

Nested Routing:

src/app/parentFolder/subFolder/page.js

When we have a page inside a page, we use nested routing
---*/

/*---

Dynamic Routing:
To create a dynamic route based on id,
step1: create a folder e.g. loginStudent
step2: create another dynamic folder inside it [id]
step3. create a page.js file inside [id] folder
step4: to access that id in page file you can destructor params from props
       and use params.id

import React from 'react'

const page = ({params}) => {
  return (
    <div>Student login {params.id}</div>
  )
}

export default page
---*/

/*---

route segments
If you want to access all the segments of a path, then 
step1: create a root folder e.g. study
step2: create a subfolder with three dot(.) in starting e.g. [...lecture]
step3: crate a page.js file inside this folder
step4: inside this page.js you can now access the array of segments

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


---*/