/*---
🔧 1. What is a Development Build?

🧪 Development Build
This is the environment used while you’re developing the app.

It includes:
Fast refresh / hot reloading
Detailed error messages
Source maps for debugging
No optimization for performance

🧠 Characteristics
| Feature           | Dev Build           |
| ----------------- | ------------------- |
| Performance       | Slow                |
| Error info        | Very detailed       |
| Bundle size       | Large & unoptimized |
| Code minification | ❌ No                |
| Caching           | ❌ Disabled          |
| Suitable for      | Development only    |



▶️ How to Run Dev Build:
npm run dev

Runs the app at: http://localhost:3000


🚀 2. What is a Production Build?
🏁 Production Build
This is the final, optimized version of your app for deployment.

It includes:
Code minification
Image and font optimization
Static generation (SSG) or server rendering (SSR)
Pre-rendered HTML
Smaller bundle size

🧠 Characteristics


| Feature      | Prod Build            |
| ------------ | --------------------- |
| Performance  | Fast                  |
| Error info   | Hidden in browser     |
| Bundle size  | Optimized             |
| Minification | ✅ Yes                 |
| Caching      | ✅ Yes                 |
| Suitable for | Production deployment |


⚙️ How to Create a Production Build
✅ Step 1: Build

npm run build

This does 3 things:

Compiles your app
Optimizes it
Prepares static/SSR pages

✅ Step 2: Start the Production Server
npm start




How to deploy you next app on vercel

run command npm run build

step1: go to vercel.com, login with github
step2: go to projects
step3: import you repo 
step4: click deploy
step5: you can also choose the domain here
step6: you will get a production url
step7: go to that url, you will see the app 
step8: you don't have to manually deploy latest features again and again you just push the code 
       on github and it will automatically be deployed
---*/

