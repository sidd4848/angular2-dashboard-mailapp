import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { InboxComponent }   from './inbox.component';
import { messageDetailComponent }  from './message-detail.component';
import { OutboxComponent }      from './outbox.component';
import { SpamComponent }      from './spam.component';
import { SentboxComponent }      from './sentbox.component';
import { messageService }          from './message.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    InboxComponent,
    messageDetailComponent,
    OutboxComponent,
    SentboxComponent,
    SpamComponent
  ],
  providers: [ messageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
