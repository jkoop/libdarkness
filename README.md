# libdarkness
Auto dark mode library

For a demonstration, visit [my website](https://joekoop.com/).

## Contents
+ [Installation (CDN)](#installation-cdn)
+ [Installation (self-hosted)](#installation-self-hosted)
+ [Usage](#usage)
  + [Basic](#basic)
  + [Favicon](#favicon)

## Installation (CDN)
### Dependencies:
+ jQuery

```html
<!-- Stylesheet -->
<link rel="preconnect dns-prefetch stylesheet" href="https://static.joekoop.com/libdarkness/main.css" />

<!-- Script -->
<script rel="preconnect dns-prefetch" src="https://static.joekoop.com/libdarkness/main.js" type="module"></script>
```

## Installation (self-hosted)
### Dependencies:
+ jQuery

```html
<!-- Stylesheet -->
<link rel="preload preconnect dns-prefetch stylesheet" href="path/to/main.css" />

<!-- Script -->
<script rel="preload preconnect dns-prefetch" src="path/to/main.js" type="module"></script>
```

## Usage
### Basic

```html
<!-- Status and control; place where ever you like; prob'ly in the page footer -->
<span id="libdarkness-status">??? mode</span> - <span id="libdarkness-control">Change</span>
```

To enable dark mode, libdarkness adds the `libdarkness` class to `<body/>`.

To invert an `<img/>` or `<video/>` in dark mode, give it the `libdarkness` class.

### Favicon

To use separate favicons for the light and dark themes, you can use the `libdarkness-light` and `libdarkness-dark` classes on your favicon `<link/>` elements, like so: (icon links should prob'ly be above the script in the DOM)

```html
<!-- light mode favicon -->
<link rel="icon" type="image/png" href="favicon-light.png" class="libdarkness-light" />
```
```html
<!-- dark mode favicon -->
<link rel="icon" type="image/png" href="favicon-dark.png"  class="libdarkness-dark" />
```

When enabling dark mode, libdarkness removes all elements with class `libdarkness-light` from `<head/>`, and adds all elements with class `libdarkness-dark` to `<head/>`.

When _disabling_ dark mode, libdarkness removes all elements with class `libdarkness-dark` from `<head/>`, and adds all elements with class `libdarkness-light` to `<head/>`.
