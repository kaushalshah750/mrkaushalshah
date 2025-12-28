import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openWhatsApp(): void {
    window.open('https://wa.me/919974442525', '_blank');
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/mrkaushalshah/', '_blank');
  }

  

  openLiveSite(): void {
    window.open('https://voting.mrkaushalshah.com', '_blank');
  }
}