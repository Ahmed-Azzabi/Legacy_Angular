import { Component, OnInit } from '@angular/core';
import { SupportService } from '../services/support.service';

@Component({
  selector: 'app-support-tickets',
  templateUrl: './support-tickets.component.html',
  styleUrls: ['./support-tickets.component.css'],
})
export class SupportTicketsComponent implements OnInit {
  allTickets: any;
  constructor(private supportService: SupportService) {}

  ngOnInit() {
    this.supportService.getAllTickets().subscribe((data) => {
      this.allTickets = data;
      console.log(data, 'tickets');
    });
  }
}
