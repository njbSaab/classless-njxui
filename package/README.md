# classless-njxui

**Classless CSS for plain semantic HTML** — zero class names, zero dependencies, zero build step. 48 KB minified, **~7 KB gzip**, 9 built-in themes switched with one `data-theme` attribute.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/classless-njxui@1/classless.min.css">
```

```html
<!-- Then just write HTML — no classes, no setup -->
<main>
  <h1>Hello World</h1>
  <p>No classes. No configuration. Just HTML.</p>
  <button>Get started</button>
  <input type="email" placeholder="your@email.com">
  <details><summary>FAQ</summary>Answer</details>
</main>
```

Docs & live demo: **[classless.njxui.dev](https://classless.njxui.dev)**

## Install

```bash
npm install classless-njxui
```

```js
// bundler / Astro / Vite
import 'classless-njxui';
```

## Highlights

- **Zero class names** — headings, buttons, forms, tables, dialogs, `<details>` styled via element selectors.
- **9 themes, one attribute** — `<html data-theme="dark">`: dark, light, red, blue, green, cyan, yellow, pink, purple. Runtime switch, no JS framework.
- **Variants via `data-variant`** — accents and states without inventing classes.
- **Scoped by design** — styles activate only inside class-free `<main>`, `<article>`, `<section>`, `<form>`; coexists safely with any other CSS.
- **Perfect for Markdown** — rendered Markdown is class-free by nature; docs and blogs look designed out of the box.

## Files

| File | Purpose |
|---|---|
| `classless.min.css` | Production build (default export) |
| `classless.css` | Readable source bundle — tokens + element styles |

## Part of the njX UI family

Need component classes and utilities? The full library is **[njX UI](https://njxui.dev)** (npm: [`njx-ui`](https://www.npmjs.com/package/njx-ui)). One stylesheet at a time — the builds are standalone.

## License

MIT
