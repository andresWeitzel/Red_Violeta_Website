<div align="center">
<img src="./public/assets/repository/01-cover-inicio.png" alt="Red Violeta" />
<div align="right">
<img width="16" height="16" src="./public/assets/icons/frontend/png/angular.png" alt="Angular" />
<img width="16" height="16" src="./public/assets/icons/devops/png/npm.png" alt="npm" />
<img width="16" height="16" src="./public/assets/icons/devops/png/git.png" alt="Git" />
<img width="16" height="16" src="./public/assets/icons/frontend/png/bootstrap.png" alt="Bootstrap" />
<img width="16" height="16" src="./public/assets/icons/backend/javascript-typescript/png/typescript.png" alt="TypeScript" />
<img width="18" height="18" src="./public/assets/icons/frontend/png/jquery.png" alt="jQuery" />
<img width="16" height="16" src="./public/assets/icons/backend/javascript-typescript/png/nodejs.png" alt="Node.js" />
</div>
</div>

<br>

<br>

<div align="right">
  <a href="./README.md" title="Español">
    <img src="./public/assets/translation/arg-flag.png" width="65" height="40" alt="Español" title="Español" />
  </a>
  <a href="./public/assets/translation/README.en.md" title="Inglés">
    <img src="./public/assets/translation/eeuu-flag.png" width="65" height="40" alt="Inglés" title="Inglés" />
  </a>
</div>

<div align="center">

# Red Violeta ![(status-completed)](./public/assets/icons/badges/status-completed.svg)

</div>

**Red Violeta** es una red de contención para quien enfrenta **violencias de género, discriminación o trata** en Argentina. Junta en un solo lugar lo que suele estar disperso: **líneas 24 h**, un **mapa de organismos**, **novedades** y **sitios oficiales** de Nación, CABA y Provincia de Buenos Aires.

En Inicio está la ayuda inmediata: 144, 137 y 145 (llamar, WhatsApp o email), la guía *Cómo pedir ayuda* (911 si hay peligro ahora, orientación o dejar constancia) y el mapa para llegar a un organismo. También hay un catálogo de novedades, un formulario para registrar la situación y acceso a trámites y asistencia del Estado. Pensada para desktop y celular, con un aviso si el dispositivo es compartido.

<a href="https://red-violeta.vercel.app/inicio" target="_blank" rel="noopener noreferrer" title="Ver en vivo"><img src="./public/assets/icons/detail-actions/live-pill.png" alt="Live" height="30" border="0" /></a>

<br>

## Índice 📜

<details>
  <summary>Ver detalle</summary>

<br>

<div align="right">

`Última actualización: 28/08/26`

</div>

### Sección 1) Descripción, configuración y tecnologías

* [1.0) Descripción.](#10-descripción-)
* [1.1) Ejecución.](#11-ejecución-)
* [1.2) Estructura.](#12-estructura-)
* [1.3) Tecnologías.](#13-tecnologías-)
* [1.4) Capturas de pantalla.](#14-capturas-de-pantalla-)

### Sección 2) Páginas, rutas y comportamiento

* [2.0) Flujo de la app.](#20-flujo-de-la-app-)
* [2.1) Rutas.](#21-rutas-)
* [2.2) Inicio.](#22-inicio-)
* [2.3) Novedades.](#23-novedades-)
* [2.4) Formulario y líneas de atención.](#24-formulario-y-líneas-de-atención-)

### Sección 3) Pruebas y calidad

* [3.0) Pruebas.](#30-pruebas-)
* [3.1) Presupuestos de estilos.](#31-presupuestos-de-estilos-)

### Sección 4) Deploy, contribuir y referencias

* [4.0) Deploy (Vercel).](#40-deploy-vercel-)
* [4.1) Contribuir.](#41-contribuir-)
* [4.2) Referencias.](#42-referencias-)

</details>

<br>

## Sección 1) Descripción, configuración y tecnologías

### 1.0) Descripción [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

<br>

**Red Violeta** está pensada para el momento en que alguien necesita **saber qué hacer y a quién llamar**. No reemplaza a las líneas ni a los organismos: los acerca, con lenguaje claro, en una interfaz usable en desktop y en el celular.

**Qué hay en el sitio**

* **Líneas de ayuda 24 h:** 144 (violencia de género), 137 (víctimas de violencia familiar y sexual) y 145 (trata). Teléfono, WhatsApp y email, más el 911 si hay peligro inmediato.
* **Guía Cómo pedir ayuda:** tres caminos según lo que haga falta ahora — resguardo, orientación o dejar constancia.
* **Mapa Dónde pedir ayuda:** organismos (La Plata, INADI, OVD y más) con llamar, cómo llegar y sitio oficial.
* **Sitios oficiales:** Nación, CABA y Provincia de Buenos Aires — derechos, denuncias y asistencia del Estado, con “Ver más sitios”.
* **Novedades:** destacadas en carrusel y una biblioteca con buscador y filtros por tipo y año (notas, informes, programas, normativa).
* **Registrar denuncia:** formulario para dejar constancia y seguir hacia las **líneas de atención**.
* **Cuidado en el uso:** aviso para preferir una llamada y borrar el historial si la computadora o el celular son compartidos.

Un frontend **Angular 22**, listo para consultar: la ayuda se ve primero y el trámite, después.

</details>

### 1.1) Ejecución [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

<br>

#### Requisitos

* **Node.js** 22.22.3+ (o 24.15+ / 26+), ver `package.json` → `engines`
* **npm**
* **Git**
* IDE (Cursor / VS Code)

#### Paso a paso

```bash
git clone https://github.com/andresWeitzel/Red_Violeta_Website.git
cd Red_Violeta_Website
npm install
npm start
```

Queda en [http://localhost:4200/](http://localhost:4200/). La raíz redirige a `/inicio`.

| Script | Descripción |
|--------|-------------|
| `npm start` | Servidor de desarrollo (`ng serve`) |
| `npm run build` | Build de producción |
| `npm run watch` | Build en watch (development) |
| `npm test` | Tests unitarios (Vitest) |

No hace falta `.env`: no hay claves de API ni ORM.

</details>

### 1.2) Estructura [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

```
Red_Violeta_Website/
├── public/assets/                 # Logo, fotos, íconos y traducción del README
│   ├── proteger.png               # Marca y favicon
│   ├── icons/                     # Íconos locales (mismo set que el repo de referencia)
│   │   ├── badges/                # status-completed (activo en el README)
│   │   ├── detail-actions/        # live-pill (app en producción)
│   │   ├── frontend/png/          # Angular, Bootstrap, HTML, CSS, jQuery
│   │   ├── backend/javascript-typescript/png/  # Node.js, TypeScript
│   │   └── devops/png/            # Git, GitHub, npm
│   ├── repository/                # Capturas del README (ver 1.4)
│   │   ├── 01-cover-inicio.png    # Portada del repositorio (hero de Inicio)
│   │   ├── 02-inicio-mapa.png
│   │   ├── 03-ayuda-guia.png
│   │   ├── 04-novedades.png
│   │   └── 05-inicio-sitios.png
│   └── translation/               # README.en.md, banderas AR / US
├── src/
│   ├── index.html                 # Título Red Violeta, Bootstrap 4.5 CDN
│   ├── styles.css                 # Tokens, navbar drawer, toolbar de novedades, pie
│   ├── main.ts
│   └── app/
│       ├── app.config.ts          # Router + scroll al tope + anclas
│       ├── app.routes.ts
│       ├── app.component.*
│       ├── navbar/
│       ├── footer/
│       ├── inicio/                # Guía, sitios oficiales
│       ├── carrousel/
│       ├── card/                  # Líneas 144 / 137 / 145
│       ├── map/                   # Organismos (La Plata, INADI, OVD)
│       ├── novedades/             # Catálogo, buscador, filtros
│       ├── formulario-denuncias/
│       ├── formulario-denuncias-respuesta/   # /lineas-de-atencion
│       └── page-not-found/
├── angular.json                   # Presupuesto anyComponentStyle 8 kB
├── package.json
└── README.md
```

</details>

### 1.3) Tecnologías [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

<br>

| **Tecnología** | **Versión** | **Propósito** |
| -------------- | ----------- | ------------- |
| [Angular](https://angular.dev/) | **22.1.x** | SPA, componentes standalone |
| [TypeScript](https://www.typescriptlang.org/) | **~6.0** | Tipado |
| [RxJS](https://rxjs.dev/) | **7.8** | Eventos del router |
| [Bootstrap](https://getbootstrap.com/docs/4.5/) | **4.5.3** | Grid del carrusel y columnas (CDN) |
| [Manrope](https://fonts.google.com/specimen/Manrope) | **Google Fonts** | Tipografía |
| [Vercel](https://vercel.com/) | — | Hosting estático |
| [Node.js](https://nodejs.org/) | **≥ 22.22.3** | Tooling |
| [Vitest](https://vitest.dev/) | **4.x** | Tests unitarios |
| [Prettier](https://prettier.io/) | **3.8** | Formato |

**CDN (index.html):** Bootstrap CSS/JS, jQuery slim y Popper (carrusel `data-ride`).

**Docs oficiales**

* Angular: https://angular.dev/
* Angular CLI: https://angular.dev/tools/cli
* Bootstrap 4.5: https://getbootstrap.com/docs/4.5/getting-started/introduction/
* Vercel: https://vercel.com/docs

</details>

### 1.4) Capturas de pantalla [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

<br>

Capturas de la app en desktop. Están en `public/assets/repository/`. **`01-cover-inicio.png`** es también el banner de este README.

| Archivo | Qué es |
|---------|--------|
| `01-cover-inicio.png` | **Inicio (hero).** Dos mujeres, mensaje *No más violencia. Contención y asistencia*, líneas 144 / 137 y CTA *Ver líneas de ayuda*. |
| `02-inicio-mapa.png` | **Inicio — mapa.** Sección *Dónde pedir ayuda*: pestañas de organismos (La Plata, INADI, OVD, etc.) y ficha con llamar / cómo llegar / sitio. |
| `03-ayuda-guia.png` | **Inicio — guía.** Modal *Cómo pedir ayuda*: peligro ahora (911), orientación (144 / 137 / 145) y dejar constancia. |
| `04-novedades.png` | **Novedades.** Buscador, filtros Tipo / Año y carrusel de destacadas. |
| `05-inicio-sitios.png` | **Inicio — sitios oficiales y pie.** Grilla Nación / CABA / PBA, aviso de seguridad y footer (marca, líneas, sitio). |

<p align="center"><img src="./public/assets/repository/01-cover-inicio.png" alt="Inicio: hero de contención" width="100%" /></p>

<p align="center"><em>01 — Portada de Inicio</em></p>

<p align="center"><img src="./public/assets/repository/02-inicio-mapa.png" alt="Inicio: mapa Dónde pedir ayuda" width="100%" /></p>

<p align="center"><em>02 — Mapa de organismos</em></p>

<p align="center"><img src="./public/assets/repository/03-ayuda-guia.png" alt="Inicio: guía Cómo pedir ayuda" width="100%" /></p>

<p align="center"><em>03 — Guía Cómo pedir ayuda</em></p>

<p align="center"><img src="./public/assets/repository/04-novedades.png" alt="Novedades: buscador, filtros y carrusel" width="100%" /></p>

<p align="center"><em>04 — Novedades</em></p>

<p align="center"><img src="./public/assets/repository/05-inicio-sitios.png" alt="Inicio: sitios oficiales y pie" width="100%" /></p>

<p align="center"><em>05 — Sitios oficiales y pie</em></p>

</details>

<br>

## Sección 2) Páginas, rutas y comportamiento

### 2.0) Flujo de la app [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

<br>

| Entorno | Base URL |
|---------|----------|
| **Local** | `http://localhost:4200` |
| **Producción** | [red-violeta.vercel.app](https://red-violeta.vercel.app/inicio) |

1. Entra a `/` → redirect a `/inicio`.
2. Ve líneas de ayuda, mapa y sitios oficiales.
3. Puede ir a **Novedades** (buscar / filtrar) o **Registrar denuncia** (demo).
4. El formulario válido abre un diálogo: no hay despacho de correo; Sí y No van a `/lineas-de-atencion`.
5. Cada navegación hace **scroll al tope**. Un fragmento (`#lineas-de-ayuda`) mueve a esa sección.

En mobile: menú hamburguesa (drawer a la derecha). En desktop: links en la barra.

</details>

### 2.1) Rutas [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

| Path | Componente | Qué es |
|------|------------|--------|
| `/` | redirect | → `/inicio` |
| `/inicio` | `InicioComponent` | Home: carrusel, líneas, guía, mapa, sitios |
| `/novedades` | `NovedadesComponent` | Catálogo + buscador + tipo/año |
| `/formulario-denuncias` | `FormularioDenunciasComponent` | Demo de registro |
| `/lineas-de-atencion` | `FormularioDenunciasRespuestaComponent` | 144, 137, 145 |
| `**` | `PageNotFoundComponent` | 404 |

</details>

### 2.2) Inicio [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

* Carrusel: mensajes de contención; CTA **Ver líneas de ayuda** (`#lineas-de-ayuda`).
* Tarjetas 144 / 137 / 145: llamar, WhatsApp, email.
* Guía: peligro ahora (911) → orientación → dejar constancia.
* Mapa: pestañas de organismos (nombres compactos en mobile); ficha con llamar / cómo llegar / sitio / email.
* Sitios oficiales: **3** tarjetas en mobile; **6** (dos filas) en desktop ≥992 px, con “Ver más sitios” sobre la segunda fila.

</details>

### 2.3) Novedades [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

* Barra: **Buscar** (título, organismo, tema), **Tipo**, **Año**.
* En mobile: buscador arriba; Tipo y Año en la misma fila (el año es un poco más ancho para que no se corte “Antes de 2020”).
* En desktop: Buscar · Tipo · Año alineados, con etiqueta arriba de cada campo.
* Destacadas: carrusel (hasta 6). Biblioteca: de a 4 con “Ver más novedades”.
* Misma búsqueda/filtro para destacadas y biblioteca. El recuento muestra los ítems filtrados.

</details>

### 2.4) Formulario y líneas de atención [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

**Formulario (demo)**

* Datos (o anónimo), email obligatorio, tipo, comentario (≥ 10 caracteres), archivos opcionales, consentimiento.
* Mobile: campos de a dos columnas, comentario más bajo, menos padding.
* Enviar válido → diálogo de demostración. **No** se manda correo a líneas reales.
* Sí / No → `/lineas-de-atencion`.

**Líneas de atención:** 144, Programa Las Víctimas (137), 145 — teléfono y email de contacto institucional (solo para mostrar, no para spam).

</details>

<br>

## Sección 3) Pruebas y calidad

### 3.0) Pruebas [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

```bash
npm test
```

Vitest + jsdom (`angular.json` → `unit-test`). Spec de humo: `src/app/app.component.spec.ts`.

Chequeo manual sugerido: Inicio (líneas, mapa, ver más sitios), Novedades (buscador y filtros en mobile/desktop), formulario (validación y diálogo), navegación desde el pie (scroll al tope), menú mobile.

</details>

### 3.1) Presupuestos de estilos [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

Producción (`angular.json`):

* Bundle inicial: warning 500 kB / error 1 MB.
* **anyComponentStyle:** warning 4 kB / **error 8 kB**.

Estilos compartidos (toolbar de novedades, fade de biblioteca, drawer) van en `src/styles.css` para no pasar el tope por componente.

</details>

<br>

## Sección 4) Deploy, contribuir y referencias

### 4.0) Deploy (Vercel) [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

```bash
npm run build
```

Salida: `dist/proyecto01/browser/` (builder `application` de Angular 22).

En Vercel: raíz del repo, build `npm run build`, output `dist/proyecto01/browser`. La SPA reescribe rutas a `index.html`.

App en producción: [https://red-violeta.vercel.app/inicio](https://red-violeta.vercel.app/inicio)

</details>

### 4.1) Contribuir [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

1. Fork.
2. Rama (`git checkout -b feature/mi-mejora`).
3. Commit con mensaje claro.
4. Push y Pull Request hacia la rama que indiquen.

No subas secretos. Esta app no usa `.env` en el cliente.

</details>

### 4.2) Referencias [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

* **Repositorio:** [github.com/andresWeitzel/Red_Violeta_Website](https://github.com/andresWeitzel/Red_Violeta_Website)
* **Producción:** [red-violeta.vercel.app](https://red-violeta.vercel.app/inicio)
* **Capturas:** [public/assets/repository/](./public/assets/repository/)
* **README (EN):** [public/assets/translation/README.en.md](./public/assets/translation/README.en.md)
* Plantilla de documentación: [ApiRest Electronic Devices ExpressJS](https://github.com/andresWeitzel/ApiRest_Electronic_Devices_ExpressJS)
* Línea 144 Nación: https://www.argentina.gob.ar/linea-144
* OVD: https://www.ovd.gob.ar/ovd/

Desarrollado por [Andrés Weitzel](https://github.com/andresWeitzel).

</details>
