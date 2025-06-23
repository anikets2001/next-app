/*---
<Script src=""/>
It is used to load the third party library just inside a component rather than loading it in the whole app with <script> tag
The <Script /> tag in Next.js is a special component used to load third-party scripts or custom JavaScript with full control over loading behavior and performance.

It's imported from next/script and provides more control than the regular HTML <script> tag.


✅ Why Use <Script /> in Next.js?
Because:

It lets you control when and how the script is loaded.
It helps prevent blocking rendering.
It's optimized automatically by Next.js for performance.


Example:
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <h1>My Page</h1>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_TRACKING_ID');
        `}
      </Script>
    </>
  );
}


⚙️ strategy Prop: When the Script Loads
| Strategy                     | When it loads                  | Use case                                 |
| ---------------------------- | ------------------------------ | ---------------------------------------- |
| `beforeInteractive`          | Before hydration (very early)  | Required for critical scripts            |
| `afterInteractive` (default) | After page becomes interactive | Most common (e.g. analytics)             |
| `lazyOnload`                 | After the page has loaded      | Lowest priority, for ads or chat widgets |
| `worker` (experimental)      | Loads in a web worker          | Used with Partytown to offload scripts   |


🎯 Benefits Over <script> Tag
| Feature                   | `<script>` | `<Script />`           |
| ------------------------- | ---------- | ---------------------- |
| Loading control           | ❌ No       | ✅ Yes (via `strategy`) |
| Automatic deduplication   | ❌ No       | ✅ Yes                  |
| Avoids render-blocking    | ❌ No       | ✅ Yes                  |
| SSR-aware                 | ❌ No       | ✅ Yes                  |
| Works well with hydration | ❌ No       | ✅ Yes                  |



---*/