import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseService} from '../../services/firebase.service'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  constructor(public firebaseAuth : AngularFireAuth,public firebaseservice : FirebaseService,private router: Router,
    private db: AngularFirestore,private storage: AngularFireStorage) { }
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


          updateData(username:string,email:string,firstname:string,lastname:string){
            this.firebaseAuth.currentUser.then((res)=>{
              var id = res.uid;
              this.db.firestore.collection("Web_user").doc(id).update({
                "Email":email,
                "First_Name":firstname,
                "Last_Name":lastname,
                "Username":username
              })
    
              })


              Swal.fire({
                title: 'Question Updated Successfully',
                text: "",
                icon: 'success',
                
                confirmButtonColor: '#3085d6',
               
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigateByUrl("/user-profile")
                }
              })
          }



          onDrop(file:FileList){
              
          }

          
}