import { message } from './message';
import { messages } from './writing-messages';
import { Injectable } from '@angular/core';

@Injectable()
export class messageService {
  getmessages(): Promise<message[]> {
    return Promise.resolve(messages);
  }

  getmessagesSlowly(): Promise<message[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getmessages()), 2000);
    });
  }

  getmessage(id: number): Promise<message> {
    return this.getmessages()
               .then(messages => messages.find(message => message.id === id));
  }
}
