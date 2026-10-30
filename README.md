# Product Management (Angular)

Small Angular 14 practice app that lists products in a Bootstrap table, built on the "Angular: Getting Started" course starter files.

![Angular](https://img.shields.io/badge/Angular-14-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7-3178C6?logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)

## Features

- **Product list** (`pm-products`) rendered as a Bootstrap table from an `IProduct[]` array: name, code, release date, price and star rating.
- **Show / hide product images** with a toggle button (`*ngIf` + style bindings for width and margin).
- **Two-way binding** on the "Filter by" input with `[(ngModel)]`; the current filter text is echoed under the input (filtering of the list itself is not implemented yet).
- **Pipes**: built-in `lowercase` and `currency`, plus a custom `ConverToSpace` pipe (`ConvertToSpacePipe`) that replaces a character in the product code with a space.
- **Typed model**: `IProduct` interface for product data.
- Global styling with Bootstrap 5 and Font Awesome 4.

## Tech stack

| Tool | Version (package.json) |
| --- | --- |
| Angular | ^14.0.0 |
| Angular CLI / build-angular | ~14.0.3 |
| TypeScript | ~4.7.2 |
| RxJS | ~7.5.0 |
| Bootstrap | ^5.2.0 |
| Font Awesome | ^4.7.0 |
| Karma + Jasmine | ~6.3 / ~4.1 |

## Project structure

```text
src/
├── api/products/products.json        # Sample product data (not loaded by the app yet)
├── assets/images/                    # Product images and logo
├── styles.css                        # Imports Bootstrap and Font Awesome
└── app/
    ├── app.module.ts                 # Root NgModule (BrowserModule, FormsModule)
    ├── app.component.ts              # Root component, selector pm-root
    ├── products/
    │   ├── product.ts                # IProduct interface
    │   └── product-list.component.*  # Product table, image toggle, filter input
    ├── shared/
    │   ├── convert-to-spcaces.pipe.ts  # ConvertToSpacePipe
    │   └── star.component.{html,css}   # Star rating template (component class not written yet)
    └── home/
        └── welcome.component.*       # Welcome page from the starter files (not declared in AppModule)
```

## Getting started

### Prerequisites

- Node.js 16 or 18 is the officially supported range for Angular 14. The build also completed with Node 22.14 during testing.
- npm

### Install and run

```bash
npm ci               # install the exact versions from package-lock.json
npm start            # ng serve -o, opens http://localhost:4200/
```

### Build

```bash
npm run build        # production build into dist/apm
npm run watch        # development build in watch mode
```

### Test

```bash
npm test             # Karma + Jasmine in Chrome (watch mode)
npx ng test --watch=false --browsers=ChromeHeadless   # single headless run
```

## Roadmap / ideas

- Filter the product list using `listFilter`
- Finish the star rating component and use it in the rating column
- Load products from `src/api/products/products.json` through a service and `HttpClient`
- Add routing between the welcome page and the product list
