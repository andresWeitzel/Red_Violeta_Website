<div align="center">
  <img src="./public/assets/proteger.png" alt="Red Violeta" width="96" />
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
  <a href="./README.md">
    <img src="https://flagcdn.com/w40/ar.png" width="40" height="30" alt="Español" />
  </a>
  &nbsp;
  <a href="./public/assets/translation/README.en.md">
    <img src="https://flagcdn.com/w40/us.png" width="40" height="30" alt="English" />
  </a>
</div>

<div align="center">

# Red Violeta ![status](https://img.shields.io/badge/status-migración_UI-b45c7e)

</div>

Sitio de **contención, líneas de ayuda, novedades y recursos oficiales** frente a violencias de género, discriminación y trata. Frontend en **Angular 22**, sin backend propio: la información se consulta en el cliente y las denuncias del formulario **no se despachan** a casillas oficiales (versión de demostración).

* [**App (producción):**](https://web-app-denuncias.netlify.app/)
* [**App (local):**](http://localhost:4200/)
* [**Repositorio:**](https://github.com/andresWeitzel/Red_Violeta_Website)

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

* [4.0) Deploy (Netlify).](#40-deploy-netlify-)
* [4.1) Contribuir.](#41-contribuir-)
* [4.2) Referencias.](#42-referencias-)

</details>

<br>

## Sección 1) Descripción, configuración y tecnologías

### 1.0) Descripción [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

<br>

**Red Violeta** es una aplicación web de orientación. El foco no es “denuncia online”: es acercar **líneas 24 h**, organismos, mapa de atención y un catálogo de notas, informes, programas y normativa.

**Qué entrega el producto**

* **Inicio:** carrusel, líneas 144 / 137 / 145 (teléfono, WhatsApp, email), guía de tres caminos, mapa de organismos y sitios oficiales con “Ver más”.
* **Novedades:** destacadas en carrusel, biblioteca con “Ver más”, buscador y filtros por tipo y año.
* **Formulario:** deja constancia en una demo; al confirmar, se navega a **líneas de atención**. No hay envío de correo a inboxes oficiales.
* **Navegación:** barra fija, menú lateral en mobile, pie compacto (marca, líneas, sitio).
* **Responsive:** desktop y mobile (filtros compactos, mapa en pestañas, pie en columnas).

**Migración (rama `feature-02-update-interfaces`)**

* Angular **22.1** (standalone, `application` builder).
* Rebrand **Denuncia Online → Red Violeta** (pestaña, navbar, footer).
* Scroll al tope en cada cambio de ruta; anclas `#lineas-de-ayuda` y `#sitios-oficiales`.
* UI de contención: líneas de ayuda primero; el formulario queda como camino secundario.

**Qué no es**

* No es un canal oficial de denuncia policial o judicial.
* No despacha mail a 144 / 137 / 145 (riesgo de spam y molestia a líneas reales).
* No hay API ni base de datos propia: el catálogo vive en el cliente.

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
├── public/assets/                 # Logo, fotos, traducción del README
│   ├── proteger.png               # Marca y favicon
│   └── translation/README.en.md
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
| [Netlify](https://www.netlify.com/) | — | Hosting estático |
| [Node.js](https://nodejs.org/) | **≥ 22.22.3** | Tooling |
| [Vitest](https://vitest.dev/) | **4.x** | Tests unitarios |
| [Prettier](https://prettier.io/) | **3.8** | Formato |

**CDN (index.html):** Bootstrap CSS/JS, jQuery slim y Popper (carrusel `data-ride`).

**Docs oficiales**

* Angular: https://angular.dev/
* Angular CLI: https://angular.dev/tools/cli
* Bootstrap 4.5: https://getbootstrap.com/docs/4.5/getting-started/introduction/
* Netlify: https://docs.netlify.com/

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
| **Producción** | [web-app-denuncias.netlify.app](https://web-app-denuncias.netlify.app/) |

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

* Datos (o anónimo), email obligatorio, tipo, relato (≥ 30 caracteres), al menos un archivo, consentimiento.
* Mobile: campos de a dos columnas, relato más bajo, menos padding.
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

### 4.0) Deploy (Netlify) [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

```bash
npm run build
```

Salida: `dist/proyecto01/browser/` (builder `application` de Angular 22).

En Netlify: publish directory = esa carpeta; redirects SPA → `index.html`. CLI:

```bash
npx netlify-cli login
npx netlify-cli deploy --prod
```

App actual: [https://web-app-denuncias.netlify.app/](https://web-app-denuncias.netlify.app/)

</details>

### 4.1) Contribuir [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

1. Fork.
2. Rama (`git checkout -b feature/mi-mejora`).
3. Commit con mensaje claro.
4. Push y Pull Request hacia `feature-02-update-interfaces` o la rama que indiquen.

No subas secretos. Esta app no usa `.env` en el cliente.

</details>

### 4.2) Referencias [🔝](#índice-)

<details>
  <summary>Ver detalle</summary>

* **Repositorio:** [github.com/andresWeitzel/Red_Violeta_Website](https://github.com/andresWeitzel/Red_Violeta_Website)
* **Producción:** [web-app-denuncias.netlify.app](https://web-app-denuncias.netlify.app/)
* **README (EN):** [public/assets/translation/README.en.md](./public/assets/translation/README.en.md)
* Plantilla de documentación: [ApiRest Electronic Devices ExpressJS](https://github.com/andresWeitzel/ApiRest_Electronic_Devices_ExpressJS)
* Línea 144 Nación: https://www.argentina.gob.ar/linea-144
* OVD: https://www.ovd.gob.ar/ovd/

Desarrollado por [Andrés Weitzel](https://github.com/andresWeitzel).

</details>
