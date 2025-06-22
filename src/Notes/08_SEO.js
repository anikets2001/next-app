/*---

🧠 What is SEO?
SEO (Search Engine Optimization) is the process of improving your website so it ranks higher on search engines like Google.

Search engines primarily care about:

Meaningful HTML content
Page load speed
Meta tags and accessibility
Crawlability (can bots read the page?)


Problem with Traditional react apps

HTML is almost empty (<div id="root"></div>)
Content is rendered after JavaScript runs on the client
🕷 Search engine bots may miss or skip important content


✅ How SSG & SSR Improve SEO
Both Static Site Generation (SSG) and Server-Side Rendering (SSR) solve this by pre-rendering HTML with real content before it reaches the browser.
To see this content open inspect on a next js app, and click on localhost request and then on preview, you will see the complete content over there

🔍 SEO Problem Solved
| Problem (CSR)          | Solution (SSG/SSR)                      |
| ---------------------- | --------------------------------------- |
| Empty HTML on load     | Fully rendered HTML available instantly |
| Bots don’t wait for JS | Bots get content directly               |
| Poor performance       | Faster load times = better rankings     |
| JS-heavy SPA           | SEO-friendly server-rendered pages      |

---*/