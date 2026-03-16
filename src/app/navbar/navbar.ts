import { Component, signal, effect, inject } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { Button } from 'primeng/button';
import { PLATFORM_ID } from '@angular/core';

const DARK_KEY = 'theme-dark';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  isDark = signal<boolean>(false);

  constructor() {
    if (this.isBrowser) {
      this.isDark.set(localStorage.getItem(DARK_KEY) === 'true');

      effect(() => {
        const dark = this.isDark();
        document.documentElement.classList.toggle('app-dark', dark);
        localStorage.setItem(DARK_KEY, String(dark));
      });
    }
  }

  toggleDarkMode() {
    this.isDark.update((v) => !v);
  }
}
