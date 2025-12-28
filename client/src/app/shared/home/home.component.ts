import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeoData({
      title: 'Kaushal Shah | Senior Full-Stack Developer & Tech Consultant',
      description: 'I build secure web applications and automated systems for businesses. Senior Freelance Developer specializing in Angular, Node.js, and AWS.',
      keywords: 'Freelance Web Developer India, Angular Developer, Node.js Expert, Custom Software Development, Secure Voting System, Kaushal Shah, Sparqal Agency',
      url: 'https://mrkaushalshah.com',
      image: 'https://mrkaushalshah.com/assets/dp.png' // Ek badhiya banner bana lena baad mein
    });
  }

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