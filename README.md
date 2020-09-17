# Vue Material Kickstart

[![CircleCI](https://circleci.com/gh/shrinathprabhu/vue-material-kickstart.svg?style=svg)](https://circleci.com/gh/circleci/circleci-docs)
[![Coverage Status](https://coveralls.io/repos/github/shrinathprabhu/vue-material-kickstart/badge.svg?branch=master)](https://coveralls.io/github/shrinathprabhu/vue-material-kickstart?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/18f32c6434407224ede9/maintainability)](https://codeclimate.com/github/shrinathprabhu/vue-material-kickstart/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/shrinathprabhu/vue-material-kickstart)
![Code Climate issues](https://img.shields.io/codeclimate/issues/shrinathprabhu/vue-material-kickstart)
![GitHub top language](https://img.shields.io/github/languages/top/shrinathprabhu/vue-material-kickstart)
![GitHub](https://img.shields.io/github/license/shrinathprabhu/vue-material-kickstart)
![Gitter](https://img.shields.io/gitter/room/shrinathprabhu/vue-material-kickstart)

[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/contains-technical-debt.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/0-percent-optimized.svg)](https://forthebadge.com)

A simple vue kickstarter with pre-installed **[Vuetify](https://vuetifyjs.com/en/)** for material design components, **[Vue-Router](https://router.vuejs.org/)** for routing between different components, **[Vuex](https://vuex.vuejs.org/)** for state management through multiple components, **[Vue-Meta](https://www.npmjs.com/package/vue-cli-plugin-meta)** for dynamically handling meta tags for different components, **[Axios](https://www.npmjs.com/package/vue-cli-plugin-axios)** for handling ajax requests or fetching data from API endpoints, **[E2E-Cypress](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress)** for end to end testing of UI and **[Jest](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest)** for unit testing and integration testing.

This kickstarter is compatible with vue-cli and you can add or remove plugins and dependencies using the same. Also there is fade transition added to router-view by default in src/App.vue for smooth transition between different pages

### Install dependencies (Project Setup)*
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and launches in browser + hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Run e2e (End to End) tests in Chrome browser with UI (With e2e-cypress)
```
npm run test:e2e
```

### Run e2e tests in headless Electron browser (With e2e-cypress. Videos of tests are stored in tests/e2e/videos)
```
npm run test:e2e:headless
```

### Run e2e tests in headless Chrome browser (With e2e-cypress. Videos of tests are stored in tests/e2e/videos)
```
npm run test:e2e:headless:chrome
```

### Run unit tests (With jest)
```
npm run test:unit
```

### Report coverage
```
npm run coverage:report
```

### Lints and fixes files
```
npm run lint
```

## Vue-cli
If you want to use vue-cli for this project, make sure vue-cli is installed in your system. Steps for installing and upgrading vue-cli can be found [here](https://cli.vuejs.org/guide/installation.html). Check if vue-cli is properly installed using `vue --version`

### Add a plugin/ dependency (package) using vue-cli
```
vue add <package-name>
```
**Note**: Packages can also be added using vue-ui

### Launch vue ui for configuration of app and installation of packages
```
vue ui
```

## Other Stuffs

### 1) [Better Practices](https://github.com/shrinathprabhu/vue-material-kickstart/blob/master/Better-practices.md)

### 2) [Customize configuration](https://cli.vuejs.org/config/).

### 3) Consider contributing and improving this kickstarter