---
title: Hello, World
datestr: 2023-06-13T10:15Z
---

After a few good years of making and scraping websites multiple times and learning a lot of things along the way, I finally established that I need _one single place_ to put all my thoughts in, permanently. The fact that my university days are approaching also means I need a place to journal all the learning materials that I would gather over the next few years.

At first, I made websites just for the fun of it. I've always loved making things <span class="text-xs">~~_even though I never really finished any of my projects, but we don't talk about that_~~</span> and I found the Lainchan Webring through [Lilibyte's site](https://lilibyte.net/) which I found through a random web seach and fell in love with the /cyb/ and old web aesthetic.

Ever since I then experimented with some technologies to make websites, however, I mostly focused on the front-end side. The sites usually look pretty but lack any content whatsoever. It's mostly due to me not having anything to say or write on those sites. I'm just unsure what purpose those sites I made serve, and end up abandoning them.

### About jxcb.xyz

This site was initially created as a portfolio for me, seeing that I not only do [web development](/icarus), but also a lot of [motion design, 3D animation, and VFX](/crystallize), also some [electronic music](/hikaru) from time to time.

But then, it hit me. I have a whole VPS as my server, why not make it my second brain database as well? I've always struggled to manage notes and schedules in Notion, and I'd like to try using Markdown + LaTeX to store notes.

>So I built this part of the site -- project-kreideprinz, inspired by Genshin Impact's Albedo -- to house my academic side.

This site was built with [Svelte](https://svelte.dev/) (I know, JavaScript is evil and all that, but it's the *lingua franca* of the web, and Svelte is just so nice to work in) so Markdown parsing is naturally handled by [MDSveX](https://mdsvex.com/). I tried a few ways of embedding LaTeX onto my site and eventually settled with [remark-math+rehype-katex](https://github.com/remarkjs/remark-math) because MDSveX supports remark plugins out of the box.
