# holaluz 

## Description

This project has been created with Vue CLI.

### Added plugins and libraries

- `Vuex` to manage state
- `VueRouter` to manage the routing
- `VueI18n` for internationalization messages
- `TailwindCSS` as UI library with a lot of predefined classes

### Folder structure

- `public/fakes` contains the api mocks.
- `src/components` contains all the shared components of the app.
- `src/plugins` contains the custom plugins created for the app. 
`hl-components` installs the global components in the app, as you 
can see in `src/main.js` with `Vue.use(hlComponents)`. 
The correct way is having these components in an external project and added via `npm`.
- `src/store` contains the state. There are two modules, as we have 
two different services to get the clients and the supply points.
- `src/utils` contains useful functions used in the rest of the app.
- `src/views` contains the pages of the app.
- `tests/e2e` contains automated tests (with Cypress)
- `tests/unit` contains unit tests (with Jest)

## Commands

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```
