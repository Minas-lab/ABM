import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }
  clients:Client[]=[
    new Client(1,"example@gmail.com","test1","test2","077-878-835", "10/10/1991"),
  ]
}

class Client{
  id:number
  email:string
  name:string
  surname:string
  mobile:string
  date:string
  constructor(a:number,b:string,c:string,d:string,e:string,f:string){
    this.id=a
    this.email=b
    this.name=c
    this.surname=d
    this.mobile=e
    this.date=f

  }

}

