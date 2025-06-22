/*---

layout.js is a special file that renders persistent UI like headers, footers, sidebars ets


🎯 Why is it used?
DRY principle (Don’t Repeat Yourself)
Shared design or behavior across multiple pages
Persistent layout components (like navbars that don’t re-render on route change)


folder structure:
src/app/login/layout.js

import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1>Login Common part</h1>
        {children}
    </div>
  )
}

export default Layout

it will render a common layout to all the children pages of this page
imp: this common layout will not remount on navigation (persistent by default)

conditional layout:

to conditionally rendering the layout we can use a hook usePathname 
as in the below component

"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <div>
      conditional layout (showing layout only for student login)
      {pathName.includes("loginStudent") ? (
        <h1>Welcome to the login section, choose student/teacher login</h1>
      ) : null}

      {children}
    </div>
  );
};

export default Layout;

---*/