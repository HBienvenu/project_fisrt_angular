import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [PromptList],
})

export class App {
  count = signal(10);

  constructor(){
    setTimeout(() => (this.count.set(30)), 2000);
  }
}import { PromptList } from './prompts/prompt-list/prompt-list';

