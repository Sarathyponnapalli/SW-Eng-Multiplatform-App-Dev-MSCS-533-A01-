# Assignment 2 – UC Bio Sketch App

Hands-On Assignment 2 for MSCS 533 (Software Engineering for Multiplatform App Development):
a React Native app, built and run in the [Expo Snack](https://snack.expo.dev/) simulator, that
displays a personal bio sketch.

## Project

- **Course:** MSCS 533
- **Student:** Parthasarathi Ponnapalli
- **Snack project name:** Hands-On Assignment 2 _Ponnapalli
- **Snack shareable link:** <https://snack.expo.dev/@partha_ponnapalli/hands-on-assignment-2-_ponnapalli>

## What it does

- Displays a welcome header: "WELCOME TO THE UNIVERSITY of the CUMBERLANDS" with the course ID
  on a new line
- Shows a profile photo (`assets/profile.jpg`)
- Displays a bio sketch built from the student's professional background and education
- Uses `#e60026` as the app's background color

## Running it

### Option 1 — Expo Snack (no install required)

Open [snack.expo.dev](https://snack.expo.dev/), paste in [App.js](App.js) and
[components/AssetExample.js](components/AssetExample.js), and drag the `assets/` folder in.

### Option 2 — locally with Expo CLI

```bash
npm install
npm start        # then press w for web, a for Android, i for iOS
```

## Live web build

The web export of this app is built and deployed automatically to GitHub Pages by
[.github/workflows/deploy-assignment2-web.yml](../.github/workflows/deploy-assignment2-web.yml)
on every push to `main` that touches this folder.

Live app: <https://sarathyponnapalli.github.io/SW-Eng-Multiplatform-App-Dev-MSCS-533-A01/>

> **One-time setup:** in the repo's GitHub Settings → Pages, set "Build and deployment" → Source to
> **GitHub Actions**. After that, every push to `main` touching this folder redeploys automatically.

## Project structure

```
Assignment_2/
├── App.js                  # root component
├── components/
│   └── AssetExample.js     # bio sketch UI (photo, welcome text, bio)
├── assets/                 # app icons + profile photo
├── app.json                # Expo app config
├── package.json
```
