# Appointment Interface (Angular and Firestore)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
Appointment App built Angular and Google Firestore

## Libraries Used
* Angular
* Google Firestore
* Bootstrap
* Fontawesome

## Getting Started
### Local Installation
1. [Go to Google Cloud Platform](https://console.cloud.google.com/) and create a Collection. The app stores documents to the collection 'appointments'.

2. Create the environment.ts files with the information from Google Console

```$xslt
export const environment = {
  production: false,
  firebase : {
    apiKey: '',
    authDomain: ' ',
    databaseURL: ' ',
    projectId: ' ',
    storageBucket: ' ',
    messagingSenderId: ' ',
    appId: ''
  }
};
``` 
3. Download the repo
```
git clone https://github.com/mpechjr/angular-firebase-appointment
```
4. Install packages and start the app. 
```
ng serve
```
Go to http://localhost:4200 to see your app. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
