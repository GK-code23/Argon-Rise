import { Component, OnInit, OnDestroy } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore'

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

  async OnsignUp(name:string,email:string,phone:string,password:string){
    await this.firebaseService.signup(email,password)
    
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn=true
    }
    const one = this.fireStore.collection("Web_user").doc(email).get()

    console.log(one)
    
    this.fireStore.collection("Web_user").doc(email).set({
      "Name":name,
      "Email" : email,
      "Phone" : phone
    })
  }

  

  handleLogout(){
    this.firebaseService.logout();
  }
  ngOnDestroy() {
  }

}
