# Teacher Toolkit

Small, practical web tools for foundation phase teachers. No build step —
plain HTML, CSS and JavaScript, so it can be hosted for free on GitHub Pages.

**Tools:**
- `report-comment-builder/` — pick a learner's strengths and areas to
  develop, choose a tone, and generate a varied, ready-to-use report comment.

## Putting this on GitHub (first time)

1. Go to [github.com/new](https://github.com/new) and create a new repository
   called `teacher-toolkit` (Public, no README/gitignore needed — leave it empty).
2. On your computer, open a terminal in this folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial Teacher Toolkit site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/teacher-toolkit.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your actual GitHub username.

3. On GitHub, open the repo → **Settings** → **Pages** (left sidebar).
4. Under "Build and deployment", set **Source** to **Deploy from a branch**,
   branch **main**, folder **/(root)**. Click **Save**.
5. Wait a minute or two, then your site will be live at:
   `https://YOUR-USERNAME.github.io/teacher-toolkit/`

## Making changes later

Edit the files, then from the same folder:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

GitHub Pages will redeploy automatically within a minute or two.

## Project structure

```
teacher-toolkit/
├── index.html                       Home page — lists all tools
├── assets/
│   ├── css/styles.css               Shared design system (light + dark)
│   └── js/
│       ├── theme.js                 Light/dark mode toggle
│       ├── commentBank.js           Word bank: traits, tones, lead-ins, closings
│       └── generateComment.js       Non-repeating comment generator
└── report-comment-builder/
    ├── index.html                   The tool's page
    └── app.js                       Page logic (chip selection, generate/reword/copy)
```

To add a new tool later, create a new folder next to
`report-comment-builder/` with its own `index.html`, add a card for it on
the home page, and reuse `assets/css/styles.css` for a consistent look.
