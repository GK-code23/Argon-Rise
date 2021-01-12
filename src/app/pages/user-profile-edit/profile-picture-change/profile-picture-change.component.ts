import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import {UserProfileEditComponent} from '../user-profile-edit.component'

@Component({
  selector: 'app-profile-picture-change',
  templateUrl: './profile-picture-change.component.html',
  styleUrls: ['./profile-picture-change.component.css']
})
export class ProfilePictureChangeComponent implements OnInit {

  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  path_address : string;
 

  constructor(private storage: AngularFireStorage, private db: AngularFirestore,public firebaseAuth : AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    const path = `Profile_Pictures/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    console.log(this.percentage)

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.firebaseAuth.currentUser.then((res)=>{
          var id = res.uid;
          this.db.firestore.collection('Profile_Pictures').doc(id).collection("pictures").add( { downloadURL: this.downloadURL, path ,name: this.file.name})
          this.db.firestore.collection('Web_user').doc(id).update({
            "Profile_Picture":this.downloadURL
          })
         })
        Swal.fire({
          title: 'Picture Successfully Changed',
          text: "",
          icon: 'success',
          
          confirmButtonColor: '#3085d6',
         
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            
            this.router.navigateByUrl("/user-profile")
          }
        })
        
         
      }),
    );
    
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
