import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prediction-app';
  user: Observable<firebase.User>;
  isLoggedIn: boolean;

  navLinks = [
    {
      label: 'Predict',
      path: 'predict',
      icon: 'remove_red_eye'
    },
    {
      label: 'My predictions',
      path: 'my-predictions',
      icon: 'person'
    },
    {
      label: 'Statistics',
      path: 'stats',
      icon: 'bar_chart'
    }
  ];

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
    this.afAuth.authState.subscribe(auth => {
      if (auth == null) {
        console.log('Not Logged in.');
        this.router.navigate(['login']);
        this.isLoggedIn = false;
      } else {
        console.log('Successfully Logged in.');
        auth.getIdToken().then(token => {});
        this.isLoggedIn = true;
        this.router.navigate(['']);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isRouteActive(route: string) {
    return this.router.isActive(route, true);
  }
}
