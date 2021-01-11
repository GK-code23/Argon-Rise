import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

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

      this.db.firestore.collection('Questions').get().then((querySnap) =>{
        querySnap.forEach((doc) =>{
          
          this.storages.push(doc.data())
          
        })
      })
  }
  
  EditData(address:[],i:number){
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
          
          this.db.firestore.collection('Questions').doc(address['id']).delete()
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
