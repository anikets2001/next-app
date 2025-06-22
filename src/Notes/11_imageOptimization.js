/*---

🧠 What is Image Optimization?
Image Optimization in Next.js means:

Automatically serving images in the most efficient format, size, and resolution based on the user's device and browser.
This is done through the special <Image> component from next/image.


Key benefits:
| Feature              | What It Does                                                             |
| -------------------- | ------------------------------------------------------------------------ |
| ✅ Automatic resizing | Next.js creates multiple sizes of your image for different screen widths |
| ✅ Modern formats     | Serves images as **WebP or AVIF** if the browser supports them           |
| ✅ Lazy loading       | Only loads images **as they appear on screen** (improves initial load)   |
| ✅ Optimized delivery | Reduces image size, improves Lighthouse & Core Web Vitals                |
| ✅ Responsive         | Automatically adjusts image size for mobile, tablet, desktop             |


Example:
import Image from 'next/image';

export default function Profile() {
  return (
    <Image
      src="/profile.jpg"      // Must be in /public or imported
      alt="Profile Picture"
      width={300}
      height={300}
      priority                // Optional: loads image eagerly for important images
    />
  );
}


🧰 How It Works Behind the Scenes

When you build your app or request the image:
Next.js uses its built-in Image Optimization API
It processes the image into multiple sizes
It serves the optimal one based on:
Device screen width
Pixel density (retina or not)
Browser format support (e.g., WebP over JPEG)
---*/