import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: Observable<firebase.User>;
  registerEmail: string;
  registerPassword: string;
  registerErrorMessage: string;
  loginEmail = 'demo@example.com';
  loginPassword = 'Demo1234';
  loginErrorMessage: string;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(err => {
        this.loginErrorMessage = err.message;
      });
  }

  loginAccount(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(err => {
      this.loginErrorMessage = err.message;
    });
  }

  registerAccount(email: string, password: string) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        this.registerErrorMessage = err.message;
      });
  }
}
