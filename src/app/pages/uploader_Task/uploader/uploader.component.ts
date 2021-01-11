import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit{
  constructor(private router: Router,private storage: AngularFireStorage, private db: AngularFirestore){
    
  }
  isHovering: boolean;

  files: File[] = [];
  storages = [];
  array1 = []
  ngOnInit(){

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

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
    this.ngOnInit()
  }


  

  deleteData(address : [],i:number){
    this.storage.storage.refFromURL(address['downloadURL']).delete()
    this.db.firestore.collection('files').doc(address['id']).delete()
    this.storages.splice(i,1)
  }
}