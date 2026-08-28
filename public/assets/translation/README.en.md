<div align="center">
  <img src="../../assets/proteger.png" alt="Red Violeta" width="96" />
</div>

<div align="right">
  <img src="https://img.shields.io/badge/Angular-22.1-DD0031?logo=angular&logoColor=white" alt="Angular 22" />
  &nbsp;
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  &nbsp;
  <img src="https://img.shields.io/badge/Bootstrap-4.5-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap 4.5" />
  &nbsp;
  <img src="https://img.shields.io/badge/Node.js-22+-339933?logo=nodedotjs&logoColor=white" alt="Node.js 22+" />
  &nbsp;
  <img src="https://img.shields.io/badge/Netlify-deploy-00C7B7?logo=netlify&logoColor=white" alt="Netlify" />
</div>

<br>

<div align="right">
  <a href="../../../README.md">
    <img src="https://flagcdn.com/w40/ar.png" width="40" height="30" alt="Español" />
  </a>
  &nbsp;
  <a href="./README.en.md">
    <img src="https://flagcdn.com/w40/us.png" width="40" height="30" alt="English" />
  </a>
</div>

<div align="center">

# Red Violeta ![status](https://img.shields.io/badge/status-UI_migration-b45c7e)

</div>

Web app for **support, helplines, news and official resources** on gender-based violence, discrimination and human trafficking. **Angular 22** frontend, no backend of its own. The complaint form is a **demo**: it does **not** email official 144 / 137 / 145 inboxes.

* [**App (production):**](https://web-app-denuncias.netlify.app/)
* [**App (local):**](http://localhost:4200/)
* [**Repository:**](https://github.com/andresWeitzel/Red_Violeta_Website)
* [**Full README (Spanish):**](../../../README.md)

<br>

## Index 📜

<details>
  <summary>View details</summary>

<br>

<div align="right">

`Latest update: 28/08/26`

</div>

### Section 1) Description, setup and technologies

* [1.0) Description.](#10-description-)
* [1.1) Run the project.](#11-run-the-project-)
* [1.2) Technologies.](#12-technologies-)

### Section 2) Pages and routes

* [2.0) Routes.](#20-routes-)
* [2.1) Product notes.](#21-product-notes-)

### Section 3) Deploy and references

* [3.0) Deploy.](#30-deploy-)
* [3.1) References.](#31-references-)

</details>

<br>

## Section 1) Description, setup and technologies

### 1.0) Description [🔝](#index-)

<details>
  <summary>View details</summary>

**Red Violeta** is a containment-first site (not “online complaint”). It surfaces 24/7 helplines, agencies, a map and a catalog of notes, reports, programmes and regulations.

**Migration (`feature-02-update-interfaces`):** Angular 22 standalone, rebrand from *Denuncia Online*, mobile-first layout (nav drawer, compact form, footer columns, news search + selects), scroll-to-top on navigation.

The form never dispatches mail to official inboxes (spam / nuisance risk).

</details>

### 1.1) Run the project [🔝](#index-)

<details>
  <summary>View details</summary>

Node.js **22.22.3+** (`package.json` → `engines`).

```bash
git clone https://github.com/andresWeitzel/Red_Violeta_Website.git
cd Red_Violeta_Website
npm install
npm start
```

App: [http://localhost:4200/](http://localhost:4200/) (`/` → `/inicio`).

| Script | Description |
|--------|-------------|
| `npm start` | Dev server |
| `npm run build` | Production build (`dist/proyecto01/browser/`) |
| `npm test` | Vitest |

</details>

### 1.2) Technologies [🔝](#index-)

<details>
  <summary>View details</summary>

| Tech | Version | Role |
|------|---------|------|
| [Angular](https://angular.dev/) | 22.1.x | SPA |
| TypeScript | ~6.0 | Typing |
| Bootstrap | 4.5.3 (CDN) | Carousel / grid |
| Netlify | — | Static hosting |
| Vitest | 4.x | Unit tests |

Component CSS budget in production: **8 kB** (`anyComponentStyle`). Shared UI lives in `src/styles.css`.

</details>

<br>

## Section 2) Pages and routes

### 2.0) Routes [🔝](#index-)

<details>
  <summary>View details</summary>

| Path | Page |
|------|------|
| `/` | Redirect to `/inicio` |
| `/inicio` | Home: helplines, map, official sites |
| `/novedades` | News catalog, search, type/year filters |
| `/formulario-denuncias` | Demo form |
| `/lineas-de-atencion` | 144, 137, 145 |
| `**` | 404 |

</details>

### 2.1) Product notes [🔝](#index-)

<details>
  <summary>View details</summary>

* Home official sites: 3 cards on mobile; **6** on desktop (≥992 px) so “See more” sits on the **second** row.
* News filters: search + two `<select>`s (same logic as the old chips).
* Form: identity or anonymous, email, kind, account ≥30 chars, ≥1 file, consent. Valid submit → demo dialog → helplines page.

</details>

<br>

## Section 3) Deploy and references

### 3.0) Deploy [🔝](#index-)

<details>
  <summary>View details</summary>

```bash
npm run build
```

Publish `dist/proyecto01/browser/`. Live: [web-app-denuncias.netlify.app](https://web-app-denuncias.netlify.app/).

</details>

### 3.1) References [🔝](#index-)

<details>
  <summary>View details</summary>

* [Spanish README](../../../README.md)
* [GitHub repo](https://github.com/andresWeitzel/Red_Violeta_Website)
* Doc template: [ApiRest Electronic Devices ExpressJS](https://github.com/andresWeitzel/ApiRest_Electronic_Devices_ExpressJS)

By [Andrés Weitzel](https://github.com/andresWeitzel).

</details>
