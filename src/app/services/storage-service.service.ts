import { Injectable } from '@angular/core';
import {User} from '../login-component/user.interface';

@Injectable()
export class StorageServiceService {
  public user: User;
 values: string[] = [];


  constructor() { }

 storeUser1(user :User)
 {
  this.user.name=user.name;
  this.user.password=user.password;
 }

storeUser2(value:string)
{
this.values.push(value);
}
 
 getUser2()
 {
   return this.values;
 }

getUser1()
{
  return this.user;
}
}
