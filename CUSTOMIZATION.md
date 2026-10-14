# Customization guide

## 1. Replace the demo brand
Open `index.html` and search for:
- `maison élise` — wordmark text
- `SKIN · BODY · WELLBEING` — tagline
- `Maison Élise` — brand story and page metadata
- `YOUR CITY`, `12 Rue des Fleurs`, `hello@example.com`, and the demo phone number — contact details

## 2. Connect real booking
Search for `https://example.com/booking` in `index.html` and replace it with your live scheduling URL (for example, your own booking provider's link). The template intentionally shows an alert while the placeholder remains. It does not pretend to take bookings.

## 3. Update services and prices
The service cards are inside `.service-grid` in `index.html`. Each card includes:
- Image URL and descriptive alt text
- Service title and summary
- Treatment category, duration, and starting price
- A booking CTA

Edit the `.price-list` rows to update the menu. Keep prices, currency, duration, and descriptions accurate for the real business.

## 4. Replace images
Images currently use remote Unsplash URLs as illustrative demo imagery. Replace each `src` in `index.html` with images you own or have licensed for commercial use. Keep alt text descriptive. The template does not bundle third-party image files or grant image rights.

## 5. Change the visual theme
At the top of `styles.css`, edit the CSS custom properties under `:root`.
- `--paper`, `--paper-deep`, `--cream`: background tones
- `--ink`, `--muted`, `--line`: text, secondary text, and borders
- `--taupe`, `--blush`, `--olive`: accents
- `--serif`, `--sans`: font stacks
- `--page`: global content width

A darker alternate theme can be made by changing these tokens and adjusting section backgrounds. Check contrast after edits.

## 6. Update reviews, credentials, and claims
The ratings, years of practice, testimonials, and promotional offer are explicitly labeled demo placeholders. Replace them with verified information and customer permission, or remove those elements. Do not publish fictional reviews, unverified credentials, or guaranteed treatment outcomes.

## 7. Contact and location
Update address, phone, email, hours, directions URL, social links, and map area. The map is currently a visual placeholder with an external Google Maps search link; no map embed is configured. If adding an iframe, use your own map embed URL and give it an accessible title.

## 8. Legal pages
`privacy.html` and `terms.html` are starter documents only, not legal advice. Customize them for your actual business, data practices, jurisdiction, booking provider, and applicable law.

## 9. Preview locally
Open `index.html` directly or run a static server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## 10. Marketplace packaging
Before listing the template:
- Replace all demo testimonials, contact details, hours, prices, promos, and credentials.
- Verify image licensing and replace placeholder photography as needed.
- Test at mobile, tablet, and desktop widths.
- Check all outbound URLs, social links, privacy/terms, and booking integration.
- Add your own screenshots and listing copy.
- If adapting to Webflow or Framer, recreate the structure and styles in the platform's native components; this package is a standalone HTML/CSS/JS implementation, not a native project file.
