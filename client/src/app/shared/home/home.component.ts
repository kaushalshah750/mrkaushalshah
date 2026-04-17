import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {

  constructor(
    private seo: SeoService,
    private analytics: AnalyticsService
  ) { }

  ngOnInit(): void {
    this.seo.updateSeoData({
      title: 'Kaushal Shah | Senior Full-Stack Developer | .NET 9 · Angular 19 · Agentic AI',
      description: 'Senior Full-Stack Developer with 4.5+ years of experience building enterprise-grade applications in FinTech, LegalTech, and SaaS. Expert in .NET 9, Angular 19, and Agentic AI.',
      keywords: 'Senior Full-Stack Developer, .NET 9, Angular 19, Agentic AI, Node.js, FinTech Developer, LegalTech Software Engineer, System Architecture, Kaushal Shah, Sparqal Systems',
      url: 'https://mrkaushalshah.com',
      image: 'https://mrkaushalshah.com/assets/dp.png'
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadResume(): void {
    this.analytics.sendEvent('button_click', {
      button_name: 'Download Resume',
      location: 'Hero Section'
    });
    window.open('https://drive.google.com/file/d/1Kn7SNEy8aLcydYLJteR2JSz3yR9tNVNq/view', '_blank');
  }

  openLinkedIn(): void {
    this.analytics.sendEvent('button_click', {
      button_name: 'LinkedIn Profile',
      location: 'Hero Section'
    });
    window.open('https://www.linkedin.com/in/mrkaushalshah/', '_blank');
  }

  openLiveSite(): void {
    window.open('https://voting.mrkaushalshah.com', '_blank');
  }
}
