import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseService} from '../../services/firebase.service'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public firebaseAuth : AngularFireAuth,public firebaseservice : FirebaseService,private router: Router,
              private db: AngularFirestore) {
                if(localStorage.getItem('user')==null)
                {
                  this.router.navigateByUrl("/login");
                  console.log("1");
                }
               }
  userid : string;
  User_info = []
  ngOnInit() {
    
    
    this.db.firestore.collection("Web_user").doc(localStorage.getItem('user')).get().then((variable)=>{
      this.User_info.push(variable.data())
    })

    
    
    
  }

}
