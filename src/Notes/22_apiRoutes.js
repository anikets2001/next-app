/*---
Nextjs is a full stack framework that means we can also go backend in next js,
we can create apis in next js

GET API:

steps to create a get api in next js
step1: inside app folder in src create a folder api inside that crate a folder with route name e.g users inside that crate a route.js file and write logic there for 
creating a get api

src > app > api > users > route.js

to create a dynamic route
create a route.js file in a dynamic folder

src > app > api > users > [userId] > route.js

Example:

import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, {status: 200});
}

here we are importing the user data(json) from db file in utils
src > app > util > db.js

export const user = [
  {
    id: 1,
    name: "Aniket",
    age: 25,
    email: "aniketsingh90126@gmail.com",
  },
  {
    id: 2,
    name: "Anik",
    age: 23,
    email: "anik@gmail.com",
  },
  {
    id: 3,
    name: "Hemant",
    age: 25,
    email: "hemant@gmail.com",
  },
  {
    id: 4,
    name: "Nikhil",
    age: 26,
    email: "nikhil@gmail.com",
  },
  {
    id: 5,
    name: "Aryan",
    age: 22,
    email: "aryan@gmail.com",
  },
  {
    id: 6,
    name: "Dushyant",
    age: 23,
    email: "dushyant@gmail.com",
  },
];


To implement this api in front-end follow the steps
step1: create a page.js file in src > app > users > page.js
step2: 
---*/

/*---
POST API:

create a put api in:
src > app > api > users > route.js

export async function POST(request) {
  const payload = await request.json();
  console.log("body:", payload);

  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Require field not found", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result: "new user created" }, { status: 201 });
}
---*/