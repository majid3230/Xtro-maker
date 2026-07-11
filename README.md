# SaaS Frontend Template

A complete production-ready frontend for a SaaS web application using React + Vite.

## Tech Stack
- React (Latest)
- Vite
- JavaScript (No TypeScript)
- React Router DOM
- CSS Modules & Plain CSS
- Mobile-first responsive design

## Features
- Modern premium design
- Fully responsive layout
- Dark Mode & Light Mode
- Lazy-loaded routing
- Reusable API service with error handling
- Skeleton loading and Toast notifications
- No page reloads

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Copy `.env.example` to `.env` and update the values.
   ```bash
   cp .env.example .env
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment on Netlify

This project is pre-configured for Netlify deployment via the `netlify.toml` file, solving common SPA routing issues.

1. Push your code to a GitHub repository.
2. Go to [Netlify](https://app.netlify.com/) and click "Add new site" -> "Import an existing project".
3. Connect your GitHub account and select the repository.
4. Netlify will automatically detect the build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.
6. (Optional) Set up Environment Variables like `VITE_API_URL` in the Netlify Site settings under "Site configuration" -> "Environment variables".

### Troubleshooting

- **Blank Screen / Routing Errors:** This is resolved by the `netlify.toml` file using the redirect rule to `index.html`.
- **Missing APIs:** Make sure to set `VITE_API_URL` in the environment variables on Netlify.
