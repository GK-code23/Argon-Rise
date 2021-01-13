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
    private db: AngularFirestore,private storage: AngularFireStorage) { 

      if(localStorage.getItem('user')==null)
      {
      this.router.navigateByUrl("/login")
      console.log("1")
      }
    }
  
    
    files: File[] = [];
          userid : string;
          User_info = []
          ngOnInit() {
          

          
          this.db.firestore.collection("Web_user").doc(localStorage.getItem('user')).get().then((variable)=>{
          this.User_info.push(variable.data())
          })

          

          console.log(this.User_info)


          }


          updateData(username:string,email:string,firstname:string,lastname:string){
          
              this.db.firestore.collection("Web_user").doc(localStorage.getItem('user')).update({
                "Email":email,
                "First_Name":firstname,
                "Last_Name":lastname,
                "Username":username
              })
    
              


              Swal.fire({
                title: 'Profile Updated Successfully',
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



          onDrop(files: FileList) {
            for (let i = 0; i < files.length; i++) {
              this.files.push(files.item(i));
            }
            
            
          }

          
}
