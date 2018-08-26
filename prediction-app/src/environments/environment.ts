// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:44303/',
  firebase: {
    apiKey: 'AIzaSyAZqd6eoMPZAE7lPHV58g8JdPCqwMCVkRU',
    authDomain: 'religion-prediction.firebaseapp.com',
    databaseURL: 'https://religion-prediction.firebaseio.com',
    projectId: 'religion-prediction',
    storageBucket: 'religion-prediction.appspot.com',
    messagingSenderId: '1051766420013'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
