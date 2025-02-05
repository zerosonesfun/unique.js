# 🦄 Unique.js

Say goodbye to generic, ambiguous class names! Unique.js is a lightweight, powerful JavaScript utility that automatically assigns stable, readable, and unique class names to HTML elements. Whether you’re debugging, styling, or dynamically modifying the DOM, this script ensures every targeted element has a clear and consistent class name—without interfering with your existing styles.
- Readable names in the DOM (unique-div-1, unique-p-3, unique-span-2
- Internal UID tracking for stability (ensures uniqueness even as the DOM changes)
- Lightweight & efficient (uses WeakMap, MutationObserver, and requestIdleCallback)
- Customizable (easily add or exclude tags from observation)

## 🔥 Features

✅ Automatically assigns unique class names to targeted HTML elements

✅ Readable class names (no weird encoded hashes)

✅ Works with dynamically added elements – updates in real time!

✅ Internal stability tracking – avoids class name duplication

✅ Customizable targeting – choose which elements to observe

✅ Exclude specific tags (e.g., script, style)

✅ Ultra-lightweight & fast – optimized with WeakMap & requestIdleCallback

## 📖 How to Use Unique.js

1️⃣ Load the Script

Simply include Unique.js in your project (inline or as a separate file).

<script src="unique.js"></script>

Or paste the script directly into a <script> tag in your HTML.

2️⃣ Let It Work Its Magic!

Once the script runs, it automatically assigns unique class names to the following elements by default:
<div>, <span>, <p>, <a>, <article>, <section>

Example Output in the DOM:
~~~
<div class="content unique-div-1"></div>
<p class="text unique-p-1"></p>
<div class="box unique-div-2"></div>
<section class="unique-section-1"></section>
~~~
These class names persist even if the DOM updates dynamically! 🎉

3️⃣ Customize the Behavior!

## 👉 Add More Tags to Observe
Want to track additional elements? No problem!

Unique.addTargetTags("ul", "li", "button");

Now <ul>, <li>, and <button> elements will also receive unique class names!

## 👉 Exclude Certain Tags from Being Observed
Want to ignore certain elements? Exclude them like this:

Unique.excludeTags("nav", "aside");

Now <nav> and <aside> elements won’t be affected!

## 👉 Reset to Defaults
If you need to reset your tag selections, just call:

Unique.resetTargetTags();   // Reset to default target tags  
Unique.resetExcludedTags(); // Reset excluded tags  

## 🔍 Real-World Use Cases

✅ Debugging: Quickly identify elements in the DOM without relying on ids.

✅ Styling: Create reliable CSS selectors without worrying about conflicts.

✅ Scripting: Target elements dynamically using JavaScript.

✅ Web Scraping & Automation: Easily reference elements programmatically.

## 🎯 Why Unique.js?

🚀 No more duplicate class names – everything is truly unique!

🎨 Readable & SEO-friendly – no cryptic hashes in your HTML.

⚡ Fast & lightweight – optimized for performance.

🔧 Completely customizable – choose what to track and what to ignore.

🔗 Get Started Today!

Drop Unique.js into your project and let it bring order to your DOM chaos! 🚀
