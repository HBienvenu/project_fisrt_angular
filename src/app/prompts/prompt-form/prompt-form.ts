import { PromptService } from './../prompt-service';
import { CategoryService } from './../category-service';
import { Component, inject } from '@angular/core';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-prompt-form',
  imports: [Card, InputText, Textarea, Select, ReactiveFormsModule, Button, RouterLink],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.css',
})
export class PromptForm {
  router = inject(Router);
  promptService = inject(PromptService);
  CategoryService = inject(CategoryService);

  categories = toSignal(this.CategoryService.getCategories());

  form = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.max(30)],
      nonNullable: true,
    }),
    content: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    categoryId: new FormControl(-1, {
      validators: [Validators.required, Validators.min(0)],
      nonNullable: true,
    }),
  });

  submit() {
    if (this.form.invalid) return;

    const prompt = this.form.getRawValue();
    this.promptService.createPrompt(prompt).subscribe(() => {
      void this.router.navigate(['/']);
    });
  }
}
