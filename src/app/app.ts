import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChatUI } from './chat-ui/chat-ui';

@Component({
  imports: [RouterOutlet, ChatUI],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Chat-UI');
}
