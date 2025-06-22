"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <div>
      {/* conditional layout (showing layout only for student login) */}
      {pathName.includes("loginStudent") ? (
        <h1>Welcome to the login section, choose student/teacher login</h1>
      ) : null}

      {children}
    </div>
  );
};

export default Layout;
