import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:any[]
  constructor(private Clients:ClientsService ) {
    this.clients=this.Clients.clients
   }

  ngOnInit(): void {
  }

}
