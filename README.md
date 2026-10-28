# SAEEf Portfolio

A responsive one-page portfolio for Abdulbasit Suleiman Bature (SAEEf), built with React and Vite.

## Run locally

```bash
pnpm install
pnpm dev
```

## Update content

Most portfolio copy lives in `src/main.jsx` near the top of the file:

- `services` controls the capability rows.
- `proof` controls the evidence cards.
- `ugcWork` controls the seven UGC concept boards.
- `xUrl` and `email` control the contact links.

The first UGC board uses `public/saeef-ugc-feature.mp4` as the featured motion sample. Replace that file and update the `video` path in `src/main.jsx` when a live client asset is ready.

Visual styling lives in `src/styles.css`.
