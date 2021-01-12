import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private db: AngularFirestore,private router: Router) { }
  id : string
  Values =[]
  Options = []
  public answer: any[]=[]

  ngOnInit(): void {
      if(localStorage.getItem('user')==null)
      {
      this.router.navigateByUrl("/login")
      console.log("1")
      }
      this.id =  this._Activatedroute.snapshot.paramMap.get("id");
      console.log(this.id)
      this.db.firestore.collection('Questions').doc(this.id).get().then((querySnap) =>{
        var variable = querySnap.data()
        this.Values.push(variable)
        
        for( var j = 0; j < variable['Options'].length; j++)
        {
          this.Options.push(variable['Options'][j])
        }
        console.log(this.Options)
      }) 
    } 

    removeAddress(i: number) {
      this.Options.splice(i, 1);
      this.answer.splice(i,1);
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
      console.log("data",this.answer)
    }
    

    addAddress() {
      this.Options.push({
        option:''
      });
    }

    async onAddData(domain:string,Level:string,question:string){
      if(this.answer.length == 0){
        Swal.fire("Please Select Answer","You need to chose at least one answer","warning")
      }
      else{
      let data = {
        'Domain':domain,
        'Level':Level,
        'Question':question,
        'Options':this.Options,
        'Answer':this.answer,
        'id':this.id
      }
      console.log(data)
      console.log(this.answer)
      this.db.collection('Questions').doc(this.id).delete()
      this.db.collection('Questions').doc(this.id).set(data)
      
      Swal.fire({
        title: 'Question Saved Successfully',
        text: "",
        icon: 'success',
        
        confirmButtonColor: '#3085d6',
       
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl("/question_list")
        }
      })
      }
    }

}
