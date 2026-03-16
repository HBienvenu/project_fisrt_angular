import { Component, input } from '@angular/core';
import { Prompt } from '../prompt.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prompt-card',
  imports: [ButtonModule],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.css',
})
export class PromptCard {
  prompt = input.required<Prompt>();

  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content);
  }
}
