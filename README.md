# Personal Portfolio

A modern personal portfolio built with Next.js, TypeScript and React. This project showcases projects, skills, education, and contact information using a clean, responsive design.

## Demo

Visit the deployed site (when available) or run locally to view the portfolio at [http://localhost:3000](http://localhost:3000).

## Features

- Clean, responsive layout with separate components for `Hero`, `Projects`, `Skills`, `Education`, and `Contact`.
- Theme toggle (light/dark) and accessible UI components.
- Easy-to-edit content driven by the `src` directory.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- PostCSS / plain CSS (see `src/app/globals.css`)

## Project structure

- `src/app` — application routes and global layout
- `src/components` — UI components (e.g., `Hero`, `Projects`, `Skills`, `Education`, `Contact`)
- `public` — static assets

## Getting started

Prerequisites: Node.js (16+ recommended) and npm/yarn/pnpm.

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm start
```

## Customize

- Edit content and layout in `src/app` and components in `src/components`.
- Update global styles in `src/app/globals.css`.
- Add projects by editing the `Projects` component or by adding a data file and mapping it into the component.

## Deployment

Recommended: Deploy to Vercel for seamless Next.js support. Connect your GitHub repository and push the `main` branch — Vercel will build and deploy automatically.

## Contributing

This is a personal portfolio — feel free to fork or adapt it for your own use. For suggestions or issues, open an issue on the repository.

## License

Add a license of your choice (for example, MIT) or leave as personal use.

## Contact

Add your preferred contact method or link to your social profiles (GitHub, LinkedIn, email).

---

If you'd like, I can update this file in the repo or make a more detailed README with screenshots and deployment badges. Let me know what you'd prefer.
