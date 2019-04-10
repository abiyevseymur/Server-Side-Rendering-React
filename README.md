## The problem
You’re managing a web application built with React and served from a Node server. You have many routes on your application, such as an /about page, or /post/:id pages where each post has different content. For each route, you want to set different meta tags, like the title, description, OG image, and other such things.

You might have used something like React Helmet to manage your meta tags within your React code. But the problem is that when a page or post gets shared to Facebook or Twitter, the crawlers don’t run the the JavaScript on your site; they simply take the metatags from the initial bundle.

This won’t do, because you obviously don’t want to have the same metatags for every page on the entire application. So, you need to dynamically set the meta tags server side, so that the correct previews get shown.

Does this sound like you? Then keep reading!
