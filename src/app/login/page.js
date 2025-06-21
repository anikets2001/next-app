"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleNavigation=(route)=> {
    router.push(route)
  }
  return (
    <div>
      <Link href="/about">Go to About page</Link>
      <button onClick={()=> handleNavigation('/about')}>Go to About Page</button>
    </div>
  );
};

export default page;
