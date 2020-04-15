import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';


@Component({
  selector: 'app-client-detals',
  templateUrl: './client-detals.component.html',
  styleUrls: ['./client-detals.component.css']
})
export class ClientDetalsComponent implements OnInit {

  clients:any[]
  constructor(private Clients:ClientsService) {
    this.clients=this.Clients.clients
   }
  ngOnInit(): void {
  }

}
