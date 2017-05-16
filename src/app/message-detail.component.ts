import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { message }         from './message';
import { messageService }  from './message.service';
@Component({
  selector: 'message-detail',
  templateUrl: './html/message-detail.component.html',
  styleUrls: [ './css/message-detail.component.css' ]
})
export class messageDetailComponent implements OnInit {
  message: message;

  constructor(
    private messageService: messageService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.messageService.getmessage(+params['id']))
      .subscribe(message => this.message = message);
  }

  goBack(): void {
    this.location.back();
  }
}
