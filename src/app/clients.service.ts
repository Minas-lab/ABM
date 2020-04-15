import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }
  clients:Client[]=[
    new Client("","","","", "10/10/1991"),
  ]
}

class Client{
  email:string
  name:string
  surname:string
  mobile:string
  date:string
  constructor(b:string,c:string,d:string,e:string,f:string){
    this.email=b
    this.name=c
    this.surname=d
    this.mobile=e
    this.date=f

  }

}

