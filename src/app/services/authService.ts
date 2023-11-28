import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token!: string | any;

  constructor(private router: Router) {}

  async signupUser(email: string, username: string, password: string) {
    (await firebase.auth().createUserWithEmailAndPassword(email, password)).user
      ?.updateProfile({ displayName: username })
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((token) => (this.token = token));
      });
  }

  signinUser(email: string, password: string) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((token) => (this.token = token));
      });
  }

  getUsername() {
    return firebase.auth().currentUser?.displayName;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getToken() {
    firebase
      .auth()
      .currentUser?.getIdToken()
      .then((token) => {
        this.token = token;
      })
      .catch((err) => console.log(err));

    return this.token;
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = null;
      })
      .catch((error) => console.log(error));
  }
}
