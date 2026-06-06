# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Full-stack MERN news portal. Users can browse news without an account; authenticated users can post, edit, delete, like news, follow other users, and manage their profile. Two separate npm projects: `client/` (React) and `server/` (Express).

## Development Commands

### Server (port 5000)
```bash
cd server
npm install
node index.js          # one-shot start
npx nodemon index.js   # with auto-reload
```

### Client (port 3000)
```bash
cd client
npm install
npm start              # development server
npm run build          # production build
npm test               # run tests
```

Both servers must run simultaneously during development.

## Environment Setup

**`server/.env`** (required):
```
NODE_ENV=development
MONGO_ATLAS_URL=<mongodb+srv connection string>
```

**`client/.env.local`** (required — all keys prefixed `REACT_APP_FIREBASE...`):
Firebase config keys: `REACT_APP_FIREBASEAPI`, `REACT_APP_FIREBASEauthDomain`, `REACT_APP_FIREBASEprojectId`, `REACT_APP_FIREBASEstorageBucket`, `REACT_APP_FIREBASEmessagingSenderId`, `REACT_APP_FIREBASEappId`, `REACT_APP_FIREBASEmeasurementId`

## Architecture

### Server (`server/`)

```
index.js              — Express app entry; mounts four route groups
db.js                 — Mongoose connection to MongoDB Atlas
Models/               — Mongoose schemas: NewsSchema, UserSchema
Routes/               — Route handlers: authetication.js, news.js, profile.js, getNews.js
MIddleWare/           — FetchUser.js, checkAuthenticity.js
```

**API routes:**
| Prefix | File | Purpose |
|--------|------|---------|
| `/api/auth` | `authetication.js` | Register, login, list all users |
| `/api/news` | `news.js` | Post, update, delete news; like/dislike |
| `/api/profile` | `profile.js` | User profile, follow/unfollow, edit/delete account |
| `/api/getnews` | `getNews.js` | Paginated news feed (15/page), "For You" feed |

**Auth middleware:**
- `FetchUser` — checks for `Token` header presence, then fetches user from DB by `:id` route param. Does **not** verify the JWT signature; used on routes that need `req.user`.
- `checkAuthenticity` — verifies JWT and checks it matches `:id` route param. Used on protected mutation routes.
- JWT secret is hardcoded in both middleware files (`#poe067ahbdhabdhag6bsheNewsAPPWEbAPP`), not in `.env`.
- Auth token is sent in a custom `Token` header (not `Authorization: Bearer`).

**Pagination:** `GET /api/getnews/fetchAllNews/:country/:Category/:pageNumber` — page 0-indexed, 15 items per page. `Category` uses literal string `"none"` to mean "all categories". Country `"World"` fetches all countries.

### Client (`client/src/`)

```
App.js                — Router setup (react-router-dom v6); all routes defined here
Api.js                — Centralized API URL constants (all point to localhost:5000)
Context/
  newscontext.js      — React context definition
  newsState.js        — Context provider; holds all global state and API call functions
component/
  Authentication/     — Login, Sign (signup), UploadImage, FireBase config
  Home/               — Landing page, Country selector
  News/               — News feed, NewsItem card, DetailedPage, ForYou, Query
  navigation/         — Navbar, Footer, Category bar
  Profile/            — ProfilePage, EditProfile (sub-pages for password/personal/photo), AllUserProfile
  AddNews.js          — Post news form
  UpdateNewsModal.js  — Edit news modal
utils/                — Small reusable components (LoginButton, ProfileLogo, Searchbar, ColorWheel)
```

**Global state (Context):** `NewsState` provides: `newsArr` (current news list), `profileInfo` (logged-in user's data), `country`/`newsTag` (filter state), `isLogin`, and all API functions (`FetchNews`, `PostNews`, `LikeThePost`, `DisLikeThePost`, `DeleteThePost`, `UpdateNews`, `getProfile`, `fetchfollowingNews`).

**localStorage keys used by client:** `Token` (JWT), `id` (user MongoDB `_id`), `country` (selected country), `profilePhoto` (profile image URL).

**Image storage:** Firebase Storage — images uploaded on signup and news creation; deleted from Firebase when a news post or account is deleted.

**Styling:** Tailwind CSS + Material UI (MUI v5) + Bootstrap 5 / react-bootstrap. Custom animated cursor rendered in `App.js`.

## Data Models

**User:** `name`, `email`, `password` (bcrypt), `profilePhoto` (Firebase URL), `Gender`, `DOB`, `following[]`, `followers[]` (ObjectId refs), `view`, `date`

**News:** `user` (ref), `userName`, `UserProfileImg`, `heading`, `Content`, `Category`, `Country`, `news_Image[]` (Firebase URLs), `likes[]` (user ObjectId refs), `report`, `date`
