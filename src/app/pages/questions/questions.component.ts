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
    if(localStorage.getItem('user')==null)
    {
      this.router.navigateByUrl("/login")
      console.log("1")
    }
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
      const even = (element) => element === i;
      if(this.answer.some(even)){
        for( var j = 0; j < this.answer.length; j++){ 
    
          if ( this.answer[j] === i) { 
      
              this.answer.splice(j, 1); 
          }
      
        }
      }
      else{
      this.answer.push(i);
      this.answer = this.answer.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      })
      this.answer.sort()}
      console.log(this.answer)
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
