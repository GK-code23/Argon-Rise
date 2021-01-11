import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  constructor(private router: Router,private storage: AngularFireStorage, private db: AngularFirestore) { }

  files: File[] = [];
  storages = [];
  array1 = []

  ngOnInit(): void {
    if(localStorage.getItem('user')==null)
    {
      this.router.navigateByUrl("/login")
      console.log("1")
    }

      this.db.firestore.collection('files').get().then((querySnap) =>{
        querySnap.forEach((doc) =>{
          
          this.storages.push(doc.data())
          
        })
      })
  }
  
  ViewData(address:[],i:number){
    window.open(address['downloadURL'])
  }


  deleteData(address : [],i:number){
    

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.storage.storage.refFromURL(address['downloadURL']).delete()
          this.db.firestore.collection('files').doc(address['id']).delete()
          this.storages.splice(i,1)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    
  }
}
