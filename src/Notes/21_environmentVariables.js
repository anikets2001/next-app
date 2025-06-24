/*---
Environment variables are config values stored outside your source code.

They are typically used to store:

API URLs
Secrets and keys
Deployment settings
Feature flags

you can check the environment you are currently working in by using 
process.eng.NODE_ENV

{process.env.NODE_ENV === "development" ? (
        <h1>You are in development mode</h1>
      ) : (
        <h1>You are in production mode</h1>
    )
}

to start a production build 
step1: npm run build
step2: npm start

npm start - production server start
npm run dev - development server start

---*/