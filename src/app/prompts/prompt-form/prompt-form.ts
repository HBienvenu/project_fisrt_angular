import { CategoryService } from './../category-service';
import { Component, inject } from '@angular/core';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt-form',
  imports: [Card, InputText, Textarea, Select, ReactiveFormsModule],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.css',
})
export class PromptForm {
  CategoryService = inject(CategoryService);

  categories = toSignal(this.CategoryService.getCategories());

  form = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    categoryId: new FormControl(-1),
  });

  submit() {}
}
