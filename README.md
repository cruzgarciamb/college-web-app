# CollegeWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# First steps
## setup libraries
```shell
ng new college-web-app
ng serve --o

# npm i uikit
ng add @angular/material
npm install rxjs
npm i awesome-notifications
```

## crete components
1. run ng g c
```shell
ng g c components/alumnos/alumnos --flat --skip-tests
```
2. add path to the app.routes.ts file
3. add <router-outlet> to the app.component.html
4. Create models, services, components, list, actions, forms
```shell
ng g class models/Generic --skip-tests
ng g service services/Common --skip-tests
```
