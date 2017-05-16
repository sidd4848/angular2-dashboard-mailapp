import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InboxComponent }   from './inbox.component';
import { OutboxComponent }      from './outbox.component';
import { SentboxComponent }      from './sentbox.component';
import { SpamComponent }      from './spam.component';
import { messageDetailComponent }  from './message-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'inbox',  component: InboxComponent },
  { path: 'detail/:id', component: messageDetailComponent },
  { path: 'outbox',     component: OutboxComponent },
  { path: 'sentbox',     component: SentboxComponent },
  { path: 'spam',     component: SpamComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
