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
              private db: AngularFirestore) { }
  userid : string;
  User_info = []
  ngOnInit() {
    if(localStorage.getItem('user')==null)
    {
      this.router.navigateByUrl("/login")
      console.log("1")
    }
    
    this.firebaseAuth.currentUser.then((res)=>{
        var id = res.uid;
        this.db.firestore.collection("Web_user").doc(id).get().then((variable)=>{
          this.User_info.push(variable.data())
        })

    })

    console.log(this.User_info)
    
    
  }

}
