import { Component, OnInit, OnDestroy } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore'
import Swal from 'sweetalert2';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public firebaseService : FirebaseService,private router: Router,private fireStore : AngularFirestore) { }
  isSignedIn = false
  ngOnInit() {
    if(localStorage.getItem('user')!=null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async navigate(){
    this.router.navigateByUrl('/address');
  }

  async OnsignUp(firstname:string,lasttname:string,email:string,phone:string,password:string){
    await this.firebaseService.signup(email,password).catch((error)=>Swal.fire('Email Is Already Registered', " ",'warning'))
    
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn=true

    this.fireStore.collection("Web_user").doc(this.firebaseService.userid).set({
      "First_Name":firstname,
      "Last_Name":lasttname, 
      "Email" : email,
      "Phone" : phone,
      "Username": firstname.concat(".",lasttname),
      "Profile_Picture": "https://firebasestorage.googleapis.com/v0/b/rise-5eaa3.appspot.com/o/profile_unknown%2F1610437074020_Profile-unknown.jpg?alt=media&token=1ad9e277-8e2b-44e5-aa1d-08f99f0585c6",
    })

    Swal.fire(
      'You Registed Successfully',
      '',
      'success'
    )
    this.router.navigateByUrl("/login")
    }

  }

  

  handleLogout(){
    this.firebaseService.logout();
  }
  ngOnDestroy() {
  }

}
