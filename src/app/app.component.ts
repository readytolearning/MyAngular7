import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularEx7';
  display= 'none';

  constructor(private http:HttpClient) {
  }
 
  // Form Object
  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    gender: new FormControl(''),
    age: new FormControl('')
    });

  get name() {
    return this.profileForm.get('name');
  }
 
  openModalDialog(){
 
      this.display='block'; //Set block css
   }
   updateProfile(){
     console.log(this.profileForm.value);
     this.http.post("http://localhost:8080/rest/saveUser",this.profileForm.value).subscribe(val => {
      
      console.log(val);
     });


   }
   closeModel(){
    this.display='none';
   }
}
