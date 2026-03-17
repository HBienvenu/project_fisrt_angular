import { Component, inject, signal } from '@angular/core';
import { Prompt } from '../prompt.model';
import { PromptCard } from '../prompt-card/prompt-card';
import { PromptService } from '../prompt-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-prompt-list',
  imports: [PromptCard, AsyncPipe],
  templateUrl: './prompt-list.html',
  styleUrl: './prompt-list.css',
})
export class PromptList {
  promptService = inject(PromptService);

  prompts$ = this.promptService.getPrompts();
}
