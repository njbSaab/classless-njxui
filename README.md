# Classless njxui

**njX Classless** (ships in the [`njx-ui`](https://www.npmjs.com/package/njx-ui) npm package) is a classless CSS stylesheet: it styles **plain semantic HTML** — headings, buttons, forms, tables, dialogs, `<details>` — with **zero class names, zero dependencies, zero build step**. 48 KB minified, **~7 KB gzip**, 9 built-in themes.

One link — done:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/njx-ui@1/css/classless.min.css">
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

---

## Why classless?

You write semantic HTML; the stylesheet does the rest. Perfect for docs, blogs, prototypes, Markdown-rendered content, admin tools — anywhere adding class names is busywork.

- **Zero class names** — every native element is styled via element selectors.
- **9 themes, one attribute** — `<html data-theme="dark">`: dark (default), light, red, blue, green, cyan, yellow, pink, purple. Switch at runtime, no JS framework needed.
- **Variants via `data-variant`** — accents and states without inventing classes.
- **Scoped by design** — styles activate only inside class-free `<main>`, `<article>`, `<section>` and `<form>` elements, so the file coexists safely with any other CSS.
- **Zero dependencies, zero build** — CDN or npm, works in any HTML file today.

## Install

```html
<!-- CDN, major version (recommended) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/njx-ui@1/css/classless.min.css">
```

```bash
npm install njx-ui
# → node_modules/njx-ui/css/classless.min.css
```

## Themes

```html
<html data-theme="dark">    <!-- default -->
<html data-theme="light">
<html data-theme="purple">  <!-- red · blue · green · cyan · yellow · pink · purple -->
```

```js
document.documentElement.setAttribute('data-theme', 'purple')
```

## Comparison

Honest numbers — pick the right tool:

| | Water.css | Simple.css | MVP.css | Pico CSS | **njX Classless** |
|---|:---:|:---:|:---:|:---:|:---:|
| Size (gzip) | **~3 KB** | ~4 KB | ~5 KB | ~10 KB | ~7 KB |
| Built-in themes | 2 (auto) | 2 (auto) | ❌ | 2 + palettes | **9** |
| Runtime theme switch | ❌ | ❌ | ❌ | attribute | **1 attribute** |
| Variants (`data-variant`) | ❌ | ❌ | ❌ | ❌ | **✅** |
| Scoped (safe next to other CSS) | ❌ | ❌ | ❌ | ❌ | **✅** |
| Upgrade path to full component library | ❌ | ❌ | ❌ | ❌ | **✅ [njX UI](https://njxui.dev)** |
| Ecosystem & community | large | large | mid | large | **young** — growing |

**Where njX Classless loses:** it's a young project, and Water/Simple are smaller if all you need is a readable page. **Where it wins:** 9 switchable themes, data-variant accents, scoping that lets it coexist with existing styles — and when you outgrow classless, the same package ships a full component library.

## Part of the njX UI family

Need component classes, utilities, gradients and 30+ components? The same `njx-ui` package ships the full library — **[njxui.dev](https://njxui.dev)**. One stylesheet at a time: `classless.min.css` and `style.min.css` are standalone builds.

## License

[MIT](LICENSE) — free for personal and commercial use.

---

<div align="center">

**njX Classless** · npm [`njx-ui`](https://www.npmjs.com/package/njx-ui) · [classless.njxui.dev](https://classless.njxui.dev) · Made by [njbSaab](https://github.com/njbSaab)

</div>
