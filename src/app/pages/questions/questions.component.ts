import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import {AngularFirestore} from '@angular/fire/firestore'
import { Router } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent{

  constructor(private firebaseService : FirebaseService,private fireStore : AngularFirestore,private router: Router) {
    
  }

  
  ngOnInit(): void { 
  } 

  public addresses: any[] = [{
    option : ''
  }];

  public answer: any[]=[]

  async onAddData(domain:string,Level:string,question:string){
    let data = {
      'Domain':domain,
      'Level':Level,
      'Question':question,
      'Options':this.addresses,
      'Answer':this.answer
    }
    console.log(data)
    console.log(this.answer)
    this.fireStore.collection('Questions').add(data)    
    
  }
  

    logValue(){
        console.log(this.addresses)
    }


    addAddress() {
      this.addresses.push({
        option:''
      });
    }

    Onpressed(i: number){
      this.answer.push(i+1);
      this.answer.sort()
    }


    removeAddress(i: number) {
      this.addresses.splice(i, 1);
      this.answer.splice(i,1);
    }

    async navigate(){
      this.router.navigateByUrl('/questions');
    }

    async navigate1(){
      this.router.navigateByUrl('/uploader');
    }
}
