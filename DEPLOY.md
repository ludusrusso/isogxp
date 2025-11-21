# Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Configure Base Path (if needed)

If your repository is **NOT** a user/organization page (e.g., `username.github.io`), you need to set the base path:

1. Open `next.config.ts`
2. Uncomment and update the `basePath` line:
   ```typescript
   basePath: '/your-repo-name',
   ```
   Replace `your-repo-name` with your actual repository name (e.g., `/isogxp`)

**Note:** If your repo is `username.github.io`, leave `basePath` commented out.

### 3. Push to GitHub

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 4. Wait for Deployment

- Go to the **Actions** tab in your repository
- Wait for the workflow to complete (usually takes 1-2 minutes)
- Your site will be available at:
  - User/Org repo: `https://username.github.io/`
  - Project repo: `https://username.github.io/repo-name/`

## Manual Build

To test the static export locally:

```bash
pnpm run build
```

The output will be in the `out` directory. You can serve it locally with:

```bash
npx serve out
```

## Troubleshooting

### Styles not loading
- Make sure you've set the correct `basePath` in `next.config.ts`

### 404 errors
- Ensure GitHub Pages is set to deploy from **GitHub Actions** (not from a branch)

### Build fails
- Check the Actions tab for error logs
- Ensure all dependencies are properly listed in `package.json`
