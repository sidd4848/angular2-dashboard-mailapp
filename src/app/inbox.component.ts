import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { message } from './message';
import { messageService } from './message.service';

@Component({
  selector: 'my-inbox',
  templateUrl: './html/inbox.component.html',
  styleUrls: [ './css/outbox.component.css' ]
})
export class InboxComponent implements OnInit {
  messages: message[];
  selectedmessage: message;

  constructor(
    private router: Router,
    private messageService: messageService) { }

  getmessages(): void {
    this.messageService.getmessages().then(messages => this.messages = messages);
  }

  ngOnInit(): void {
    this.getmessages();
  }

  onSelect(message: message): void {
    this.selectedmessage = message;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedmessage.id]);
  }
}
