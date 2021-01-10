# FlairHire Admin

## Based on [Argon Dashboard Angular](https://demos.creative-tim.com/argon-dashboard-angular/?ref=ada-github-readme)


 ![version](https://img.shields.io/badge/version-1.2.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/argon-dashboard-angular.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-dashboard-angular/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/argon-dashboard-angular.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-dashboard-angular/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)


![Product Gif](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-angular/argon-dashboard-angular.gif)

**Fully Coded Components**

Argon Dashboard Angular is built with over 100 individual components, giving you the freedom of choosing and combining. All components can take variations in color, that you can easily modify using SASS files.
You will save a lot of time going from prototyping to full-functional code, because all elements are implemented. This Dashboard is coming with pre-built examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.
Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.

**Complex Documentation**

Each element is well presented in a very complex documentation. You can read more about the idea behind this [dashboard here](https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial?ref=ada-github-readme). You can check the [components here](https://demos.creative-tim.com/argon-dashboard-angular/documentation/alerts?ref=ada-github-readme) and the [foundation here](https://demos.creative-tim.com/argon-dashboard-angular/documentation/colors?ref=ada-github-readme).

**Example Pages**

If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages. You will be able to quickly set up the basic structure for your web project.


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Quick start

- [Download from Github](https://github.com/creativetimofficial/argon-dashboard-angular/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/argon-dashboard-angular?ref=ada-github-readme).
- Clone the repo: `git clone https://github.com/creativetimofficial/argon-dashboard-angular.git`.


## Documentation
The documentation for the Argon Dashboard Angular is hosted at our [website](https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial?ref=ada-github-readme).


## File Structure
Within the download you'll find the following directories and files:

```
argon-dashboard-angular
├── CHANGELOG.md
├── README.md
├── angular.json
├── e2e
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── components
│   │   │   ├── components.module.spec.ts
│   │   │   ├── components.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.scss
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.html
│   │   │       ├── sidebar.component.scss
│   │   │       ├── sidebar.component.spec.ts
│   │   │       └── sidebar.component.ts
│   │   ├── layouts
│   │   │   ├── admin-layout
│   │   │   │   ├── admin-layout.component.html
│   │   │   │   ├── admin-layout.component.scss
│   │   │   │   ├── admin-layout.component.spec.ts
│   │   │   │   ├── admin-layout.component.ts
│   │   │   │   ├── admin-layout.module.ts
│   │   │   │   └── admin-layout.routing.ts
│   │   │   └── auth-layout
│   │   │       ├── auth-layout.component.html
│   │   │       ├── auth-layout.component.scss
│   │   │       ├── auth-layout.component.spec.ts
│   │   │       ├── auth-layout.component.ts
│   │   │       ├── auth-layout.module.ts
│   │   │       └── auth-layout.routing.ts
│   │   ├── pages
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.scss
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── icons
│   │   │   │   ├── icons.component.html
│   │   │   │   ├── icons.component.scss
│   │   │   │   ├── icons.component.spec.ts
│   │   │   │   └── icons.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   ├── maps
│   │   │   │   ├── maps.component.html
│   │   │   │   ├── maps.component.scss
│   │   │   │   ├── maps.component.spec.ts
│   │   │   │   └── maps.component.ts
│   │   │   ├── register
│   │   │   │   ├── register.component.html
│   │   │   │   ├── register.component.scss
│   │   │   │   ├── register.component.spec.ts
│   │   │   │   └── register.component.ts
│   │   │   ├── tables
│   │   │   │   ├── tables.component.html
│   │   │   │   ├── tables.component.scss
│   │   │   │   ├── tables.component.spec.ts
│   │   │   │   └── tables.component.ts
│   │   │   └── user-profile
│   │   │       ├── user-profile.component.html
│   │   │       ├── user-profile.component.scss
│   │   │       ├── user-profile.component.spec.ts
│   │   │       └── user-profile.component.ts
│   │   └── variables
│   │       └── charts.ts
│   ├── assets
│   │   ├── fonts
│   │   ├── img
│   │   ├── scss
│   │   │   ├── angular-differences
│   │   │   ├── argon.scss
│   │   │   ├── core
│   │   │   └── custom
│   │   └── vendor
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">

## Resources
- Demo: <https://demos.creative-tim.com/argon-dashboard-angular/dashboard?ref=ada-github-readme>
- Download Page: <https://www.creative-tim.com/product/argon-dashboard-angular?ref=ada-github-readme>
- Documentation: <https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial?ref=ada-github-readme>
- License Agreement: <https://www.creative-tim.com/license?ref=ada-github-readme>
- Support: <https://www.creative-tim.com/contact-us?ref=ada-github-readme>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/argon-dashboard-angular/issues?ref=ada-github-readme)