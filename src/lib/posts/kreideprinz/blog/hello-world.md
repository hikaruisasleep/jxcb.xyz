---
title: Hello, World
datestr: 2023-06-13T10:15Z
---

After a few good years of making and scraping websites multiple times and learning a lot of things along the way, I finally established that I need _one single place_ to put all my thoughts in, permanently. The fact that my university days are approaching also means I need a place to journal all the learning materials that I would gather over the next few years.

>Hopefully my days of deleting websites are left behind, and I can finally stick to a single design.

At first, I made websites just for the fun of it. I've always loved making things <span class="text-xs">~~_even though I never really finished any of my projects, but we don't talk about that_~~</span> and I was exposed to the Lainchan Webring through [Lilibyte's site](https://lilibyte.net/) and fell in love with the /cyb/ and old web aesthetic.

Ever since I then experimented with some technologies to make websites, however, I mostly focused on the front-end side. The sites look pretty but lack any content whatsoever. My sense of online security and privacy, though, significantly increased after reading a lot of what those paranoids over at Lainchan had to say.

### About jxcb.xyz

This site was initially created as a portfolio for me, seeing that I not only do [web development](/icarus), but also a lot of [motion design, 3D animation, and VFX](/crystallize), also some [electronic music](/hikaru) from time to time.

But then, it hit me. I have a whole VPS as my server, why not make it my second brain database as well? I've always struggled to manage notes and schedules in Notion, and I'd like to try using Markdown + LaTeX to store notes.
So I tried building this part of the site -- project-kreideprinz, taken from Genshin's Albedo -- to house my academic side.

This site was coded with [Svelte](https://svelte.dev/) (I know, JavaScript is evil and all that, but hey, it gets the job done. Besides, the majority of people don't even disable JS) so Markdown parsing is naturally handled by [MDSveX](https://mdsvex.com/). I tried a few ways of embedding LaTeX onto my site and eventually settled with [remark-math + rehype-katex](https://github.com/remarkjs/remark-math) because MDSveX supports remark plugins out of the box.
