import { Component, input } from '@angular/core';
import { Prompt } from '../prompt.model';
import { Button } from 'primeng/button';
import { Textarea } from 'primeng/textarea';
import { Tab, Tabs, TabList } from 'primeng/tabs';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-prompt-card',
  imports: [Button, Textarea, Card, Tag],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.css',
})
export class PromptCard {
  prompt = input.required<Prompt>();

  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content);
  }
}
