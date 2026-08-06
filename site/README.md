# Portfolio site — Sudarshan Shorna Kumar

Plain HTML/CSS/JS, no build step, ready for GitHub Pages.

## Structure

```
index.html              Home
about.html               About / education / timeline
projects.html             Projects listing (grid of 5 cards)
projects/
  busss.html               Case study — BUSSS recovery system
  air-brakes.html          Case study — Air brakes
  spine.html                Case study — SPINE avionics bay
  avionics-tracker.html    Case study — Pi-HAT ground tracking
  business-lead.html      Case study — Sponsorship & outreach
assets/
  css/style.css            Shared stylesheet — edit colors/fonts here
  js/main.js                Mobile nav toggle + click-to-enlarge lightbox
  images/                    All images (currently placeholder SVGs)
  Sudarshan_Shorna_Kumar_Resume.pdf   Linked from every page footer
```

Every page repeats the same header and footer markup by design (no
templating system) — that's the trade-off for "just HTML, no build
step". If you outgrow copy-pasting header/footer changes across seven
files, look at introducing a static site generator like Eleventy or
Astro, or just a small script that injects a shared partial before
you commit.

## Replacing placeholder content

**Images** — every image in `assets/images/` is a generated SVG
placeholder with a label describing what should go there (e.g. "CAD
isometric — full assembly"). To replace one:
1. Export/save your real photo, render, or plot as `.jpg`, `.png` or
   `.webp`.
2. Give it the same filename as the placeholder it replaces (or
   update the `src=` in the HTML if you rename it).
3. Drop it into the matching folder under `assets/images/projects/`.

**Text placeholders** — anything in `[square brackets]` is a
placeholder for a real number or detail (e.g. `[X] N of retention
force`, `[number] students`). Search each HTML file for `[` to find
them all, or use your editor's project-wide search.

**Design review slides** — if you want to embed an actual slide
rather than a photo of one, export the slide as an image (PNG/JPG)
the same way as any other figure. For a live embedded deck instead of
a static image, you'd need to host the deck (Google Slides / SpeakerDeck)
and swap the `<img>` for an `<iframe>` — ask if you want this wired up.

**Resume PDF** — replace
`assets/Sudarshan_Shorna_Kumar_Resume.pdf` with your latest resume,
keeping the same filename, and every "Download resume" link updates
automatically.

## Adding a new project page

1. Copy `projects/spine.html` (the shortest template) to
   `projects/your-project.html`.
2. Update the `<title>`, hero heading, stamps, and title-block meta
   row (System / Tools / Duration / Status).
3. Update the sections below with real content and images.
4. Add a matching `<article class="card">` block to `projects.html`
   and to the "All projects" grid in `index.html`.

## Running locally

No build step — just open `index.html` in a browser. For a closer
match to how it'll behave when hosted (relative links, etc.), serve
it locally instead of opening the file directly:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Hosting on GitHub Pages

1. Create a new GitHub repo (or use an existing one), e.g.
   `your-username.github.io` for a root-domain site, or any repo name
   for a project site.
2. Push this folder's contents to the repo's default branch:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment
   → Source: Deploy from a branch → Branch: main / (root)**.
4. Wait a minute or two, then your site is live at
   `https://your-username.github.io/your-repo/` (or
   `https://your-username.github.io/` if the repo is named
   `your-username.github.io`).

## Before you share the link

- [ ] Replace the GitHub/LinkedIn placeholder URLs in every footer
      (`[your-username]`)
- [ ] Fill in or remove every `[bracketed]` placeholder
- [ ] Swap all placeholder SVGs for real photos/renders
- [ ] Update "Last revised" date in the footer
- [ ] Check all internal links after adding/renaming any page
