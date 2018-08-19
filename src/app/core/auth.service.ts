import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";

import { Observable, of } from "rxjs";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/empty'
import AuthProvider = firebase.auth.AuthProvider;

interface User {
  uid: string
  email: string
  photoURL?: string
  displayName?: string
  favouriteColour?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState
      .switchMap(user => {
        if(user) {
          return this.afs.doc(`users/${user.uid}`).valueChanges()
        } else {
          return of(null);
        }
      })
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  anonLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then(cred => {
        console.log(cred);
      })
  }

  private oAuthLogin(provider: AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true })

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

}
