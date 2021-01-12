import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 isLoggedIn = false
  userid : string; 
  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',res.user.uid)
      this.userid= res.user.uid;
    })
  }

  async signup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      this.userid= res.user.uid;
    })
  }

  async logout(){
    await this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    
  }

}
