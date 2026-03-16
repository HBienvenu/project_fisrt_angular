import { Component, inject } from '@angular/core';
import { Prompt } from '../prompt.model';
import { PromptCard } from '../prompt-card/prompt-card';
import { PromptService } from '../prompt-service';

@Component({
  selector: 'app-prompt-list',
  imports: [PromptCard],
  templateUrl: './prompt-list.html',
  styleUrl: './prompt-list.css',
})
export class PromptList {
  promptService = inject(PromptService);

  prompts = this.promptService.getPrompts();
}
