import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0G7MotvmcC9bk5wfy35IkBA6TBmiNQds",
  authDomain: "alleyes-c76bd.firebaseapp.com",
  databaseURL: "https://alleyes-c76bd-default-rtdb.firebaseio.com",
  projectId: "alleyes-c76bd",
  storageBucket: "alleyes-c76bd.appspot.com",
  messagingSenderId: "443359269309",
  appId: "1:443359269309:web:fd2ecf5382e911b6f802d4",
  measurementId: "G-XXSZ7Q3CDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'View', url: '/folder/view', icon: 'images' },
    { title: 'Chat', url: '/folder/chat', icon: 'chatbox-ellipses' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Downloads', url: '/folder/downloads', icon: 'download' },
    { title: 'Account', url: '/folder/account', icon: 'person'},
   
  ];
  constructor() {}
}
