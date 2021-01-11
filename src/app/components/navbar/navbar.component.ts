import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {FirebaseService} from '../../services/firebase.service'
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  User_info = []
  constructor(location: Location,  private element: ElementRef, private router: Router,public firebaseService : FirebaseService,
              public firebaseAuth : AngularFireAuth,public firebaseservice : FirebaseService,
              private db: AngularFirestore) {
              this.location = location;
              }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.firebaseAuth.currentUser.then((res)=>{
      var id = res.uid;
      this.db.firestore.collection("Web_user").doc(id).get().then((variable)=>{
        this.User_info.push(variable.data())
      })

  })
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }


  Logout(){
    this.firebaseService.logout();
    this.router.navigateByUrl("/login")
  }
}
