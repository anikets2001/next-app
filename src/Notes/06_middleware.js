/*---

 middleware is a piece of code that executes just before the request 
 It can modify request, redirect, rewrite, or block access

 to create a middleware
 step1: create a file middleware.js in src folder
 step2: create middleware
 Example:
import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/about/:path*",
};

This middleware is used to redirect all the requests to the about page to login page

 ---*/

/*----
🎯 Why Middleware is Useful
Middleware lets you:

Use Case	What It Does
✅ Auth Guard / Protected Routes	Redirect users who are not logged in
✅ A/B Testing	Serve different versions of pages
✅ Localization	Redirect users based on language/country
✅ Feature Flags	Enable/disable features for specific users
✅ Analytics	Log user/device info before response
 ---*/
