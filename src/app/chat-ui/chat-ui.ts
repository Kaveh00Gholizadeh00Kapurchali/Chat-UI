import { Component, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-chat-ui',
  styleUrl: './chat-ui.css',
  templateUrl: './chat-ui.html',
})
export class ChatUI {

  messages= signal<string[]>([]);

  send(msg:string){
    if(!msg.trim()) return;
    this.messages.update(list => [...list , msg])
  }
}
