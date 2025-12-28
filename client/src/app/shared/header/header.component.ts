import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false; // Mobile menu band kar do

    // CHECK: Kya hum Home page ('/') par hain?
    if (this.router.url === '/') {
      // Agar haan, toh seedha scroll karo
      this.scrollSmoothly(sectionId);
    } else {
      // Agar nahi (e.g., Case Study page pe hain), toh pehle Home pe jao
      this.router.navigate(['/']).then(() => {
        // Page load hone ka thoda wait karo (100ms), phir scroll karo
        setTimeout(() => {
          this.scrollSmoothly(sectionId);
        }, 100);
      });
    }
  }

  // Helper function taaki code clean rahe
  private scrollSmoothly(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openWhatsApp(): void {
    window.open('https://wa.me/919974442525', '_blank');
  }
}