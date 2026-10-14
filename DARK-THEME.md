# Optional dark-theme variation

The current design is the primary warm-light luxury theme. For a quick dark editorial variant, change the root tokens in `styles.css`:

```css
:root {
  --paper: #24251f;
  --paper-deep: #303128;
  --cream: #f7f3ed;
  --ink: #f4efe7;
  --muted: #c1bcb2;
  --line: #4a4a40;
  --taupe: #b8a99a;
  --blush: #d7b7a9;
  --olive: #8d927a;
}
```

Then review sections with fixed backgrounds (`.offer-section`, `.booking-section`, `.contact-section`, `.site-footer`, `.map-placeholder`) and adjust their foreground/background pairings for sufficient contrast. This is a starting point, not a fully audited dark theme. Test all states and mobile breakpoints after modifying tokens.
