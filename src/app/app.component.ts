import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'ProductApp';

  firebaseConfig = {
    apiKey: 'AIzaSyC-dBsubC8q1o68FJF6xRthoXG_GuVDxTw',
    authDomain: 'products-app-422ca.firebaseapp.com',
    databaseURL:
      'https://products-app-422ca-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'products-app-422ca',
    storageBucket: 'products-app-422ca.appspot.com',
    messagingSenderId: '339729348998',
    appId: '1:339729348998:web:3383b26f4d419db2249407',
  };

  ngOnInit(): void {
    firebase.initializeApp(this.firebaseConfig);
  }
}
