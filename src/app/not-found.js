"use client"
import { useRouter } from "next/navigation";
import React from "react";

const NoTFound = () => {
  const router = useRouter();
  return (
    <div className="not-found-wrapper">
      <h1>Page Not Found</h1>
      <button onClick={() => router.push("/")}>Home Page</button>
    </div>
  );
};

export default NoTFound;
