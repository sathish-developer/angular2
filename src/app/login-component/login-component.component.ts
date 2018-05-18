import { Component, OnInit } from '@angular/core';
import {User} from './user.interface';
import { Router } from "@angular/router";
import {Http,Headers,Response} from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { StorageService } from "../home-component/StorageService";
import {Address} from './address';




@Component({
  selector: 'loginPage',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']  
   
})
export class LoginComponentComponent implements OnInit{
  title = 'app works!';
  Old_data:any;
  userForm=new FormGroup({
      name:new FormControl(),
       password:new FormControl(''),
       on:new FormControl(''),
       off:new FormControl(''),
       address:new FormGroup({
          area:new FormControl(''),
         postalcode:new FormControl('')
       })
    });
    
    
  constructor(private http:Http,private router:Router,public container:StorageService)
  {
    console.log("inside constructor get method"+JSON.stringify(this.container.get("customer")));
    this.Old_data = this.container.get("customer");
  }

  ngOnInit()
 {
   
if(this.Old_data != undefined)
{
//(<FormControl>this.userForm.controls['name']).setValue(this.Old_data != undefined?this.Old_data['name']:'',{onlySelf:true});
//(<FormGroup>this.userForm.controls['area']).setValue(this.Old_data.address != undefined?this.Old_data.address['area']:'',{onlySelf:true});
//this.userForm.patchValue(Object.assign(this.userForm.value, this.Old_data.address != undefined?this.Old_data['area']:''));
this.userForm.patchValue(this.Old_data);
}
    
 }

  save(user:User)
  {
    
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    console.log(JSON.stringify(this.userForm.value));
//  this.http.post("http://localhost:3000/save",JSON.stringify(User),{headers:headers}).map((res: Response) => res.json()).subscribe((res:any)=>{
//    this.test=res;
//    console.log("from node server::::::::"+JSON.stringify(this.test));
//  });
//this.storage.storeUser1(User);
user=this.userForm.value;


console.log("inside user data"+JSON.stringify(user));
this.container.set("customer",user);


 this.router.navigateByUrl('/homePage');
  }
}

