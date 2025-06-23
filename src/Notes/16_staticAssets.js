/*---

In Next.js, static assets refer to any files that are not part of your JavaScript or React code but are still needed by your application — 
like images, fonts, documents, or videos — and can be served directly to the client without any server processing.


📦 What Counts as a Static Asset?

| Asset Type  | Example Files                           |
| ----------- | --------------------------------------- |
| Images      | `.jpg`, `.png`, `.webp`, `.svg`, `.gif` |
| Fonts       | `.woff`, `.woff2`, `.ttf`, `.otf`       |
| Documents   | `.pdf`, `.docx`, `.txt`                 |
| Videos      | `.mp4`, `.webm`, `.mov`                 |
| Other Files | `.ico`, `.json`, `.xml`, `.csv`         |


📁 Where to Put Static Assets in Next.js?
You place them inside the /public folder at the root of your project.

my-app/
├── app/
├── public/
│   ├── logo.png
│   ├── resume.pdf
│   └── fonts/
│       └── Roboto.woff2

🧠 How to Use Static Assets
You reference them using relative URLs starting from the /public root.

✅ Example Usage in Code:

<img src="/logo.png" alt="Logo" />
<a href="/resume.pdf" download>Download Resume</a>
<link rel="stylesheet" href="/fonts/Roboto.woff2" />


import logo from '/public/logo.png'; // ❌ WRONG

<img src="/logo.png" alt="Logo" /> // ✅ CORRECT


Summary:
| Topic        | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| Static Asset | A non-code file like an image, PDF, or font                       |
| Location     | Stored in `/public/` folder                                       |
| Usage        | Accessed via root-relative URL (`/file-name.ext`)                 |
| Optimization | Files in `/public` are not processed by Webpack — served directly |

---*/