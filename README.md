# libdarkness
Auto dark mode library

For a demonstration, visit [my website](https://joekoop.com/).

## Installation (CDN)
### Dependencies:
+ jQuery

```html
<!-- Stylesheet -->
<link rel="preload, preconnect, dns-prefetch, stylesheet" href="https://static.joekoop.com/libdarkness/main.css" />

<!-- Script; should be first child of <body/> -->
<script rel="preload, preconnect, dns-prefetch" src="https://static.joekoop.com/libdarkness/main.js" type="module"></script>
```

## Installation (self-hosted)
### Dependencies:
+ jQuery

```html
<!-- Stylesheet -->
<link rel="preload, preconnect, dns-prefetch, stylesheet" href="path/to/main.css" />

<!-- Script; should be first child of <body/> -->
<script rel="preload, preconnect, dns-prefetch" src="path/to/main.js" type="module"></script>
```

## Usage

```html
<!-- Status and control; place where ever you like; prob'ly in the page footer -->
<span id="libdarkness-status">Auto dark mode</span> - <span id="libdarkness-control">Change</span>

```

For the dark mode, libdarkness adds the libdarkness class to `<body>`. You are free to customise and add styling to fit your needs.
