import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  // private messages = signal<string[]>([]);

  messages$ = new BehaviorSubject<string[]>([]);

  private messages: string[] = [];
  // allMessages = this.messages.asReadonly();
  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    // this.messages.update((prevMessages) => [...prevMessages, message]);
    this.messages = [...this.messages, message];
    this.messages$.next([...this.messages]);
  }
}
