---
title: MDSveX test
datestr: 0
description: for experimentation and testing
---

## Playground to test MDSVeX features

### KaTeX

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

### Code block & highlighting

HTML

```html
<!DOCTYPE html>
<html>
    <head>
        ...
        <link href="themes/prism-ghcolors.css" rel="stylesheet" />
    </head>
    <body>
        ...
        <script src="prism.js"></script>
    </body>
</html>
```

JavaScript

```js
export async function load({ params }) {
    const posts = await import.meta.glob('$lib/posts/kreideprinz/blog/*.md');
    let title, date, content;
    for (const path in posts) {
        await posts[path]().then((post) => {
            const link: string = path.split('/').at(-1).replace('.md', '');
            if (link == params.post) {
                title = post.metadata.title;
                date = new Date(post.metadata.datestr);
                content = post.default;
            }
        });
    }
    return {
        title,
        date,
        content
    };
}
```

Python

```py
print('hello world')
```

C#

```cs
using System;

namespace GetLastName
{
    class Program
    {
        static void Main()
        {
            // Full name
            string name = "John Doe";

            // Location of the letter D
            int charPos = name.IndexOf("D");

            // Get last name
            string lastName = name.Substring(charPos);

            // Print the result
            Console.WriteLine(lastName);
        }
    }
}
```
