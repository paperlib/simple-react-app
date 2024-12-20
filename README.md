# A simple React App
As Ricky Gervais once put it "_The best advice I've ever received is, '**No one else knows what they're doing either**._'" and tbh that's how I felt whenever I ran yet again one of those `create-react-app` (or `next.js` app, `remix` or `vite` app, via `npx`, `yarn`, or preferably `bun`) commands: "I don't know wtf am doing, but no one knows what they're doing either."

So those `rails` infected commands would dump millions of files out of nowhere for my newly minted fancy app, and I would have next to no clue why all of that was needed or what it was doing (yes that [xkcd dependecy joke](https://imgs.xkcd.com/comics/dependency.png) is the real state of webdev today.)  I would then candidly proceed to modify the slightest subset of the whole castle in the hopes that it wouldn't all come crumbling down.

And once that was miraculously done, another nightmare would ensue trying make it all tie in on production.
> Thankfully nowadays we have `docker`<br> so whatever mess we have in dev can be nicely packaged into an image and deployed to production. :sunglasses:

Anyway ... **what if we knew wtf?** Wouldn't that be a superpower? :muscle:<br>
That's what this repo is all about.

### :gift_heart: A quick & simple React App from scratch
Ultra brief:
- create a directory for your app
- add the two essential react libs, `react`and `react-dom`
- include `vite` as your local development server and build tool

That means, you create your app's directory, and in that directory run the following:

```sh
npm install react react-dom
npm install -D vite
```
This will create the usual `node_modules` directory, a `lock` file and the `package.json`.
- Edit `package.json` to include<br>
  a `"type"` property (more about it later) and<br>
  a `"scripts"` section (which will start a dev server to preview your app)
- Include a `vite.config.js` to configure some properties of `vite` (more on that as well later here under)
<table>
<tr>
<th>package.json</th>
<th>vite.config.js</th>
</tr>
<tr>
<td valign="top">

```diff
{
+  "type": "module",
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "vite": "^5.4.11"
  },
+  "scripts": {
+    "dev": "vite"
+  }
}
```

</td>
<td valign="top">

```js
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'automatic', // Enables automatic JSX runtime
  },
});
```

</td>
</tr>
</table>

