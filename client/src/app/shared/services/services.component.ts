import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  standalone: false,
})
export class ServicesComponent {
  
  // High-Ticket Plans Configuration
  plans = [
    {
      title: 'Growth',
      tag: 'AUTOMATION',
      description: 'For businesses wanting to automate sales & lead gen.',
      features: [
        'AI Sales Agent (GPT-5)',
        'Automated Lead Scraping',
        'Cold Email Systems',
        'WhatsApp Bot Integration',
        'CRM Setup & Sync'
      ],
      type: 'growth',
      featured: false
    },
    {
      title: 'Scale',
      tag: 'MOST POPULAR',
      description: 'For startups needing a custom software product.',
      features: [
        'Custom SaaS Development',
        'React/Angular Dashboard',
        'Secure Node.js/.NET Backend',
        'Payment Gateway (Stripe/Razorpay)',
        '3 Months Maintenance'
      ],
      type: 'scale',
      featured: true
    },
    {
      title: 'Enterprise',
      tag: 'FULL SERVICE',
      description: 'Complete digital transformation for established companies.',
      features: [
        'Legacy System Modernization',
        'Cloud Infrastructure (Azure/AWS)',
        'CI/CD Pipeline Setup',
        'Advanced Analytics & Reporting',
        'Dedicated Support Team'
      ],
      type: 'enterprise',
      featured: false
    }
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private analytics: AnalyticsService
  ) {
    this.titleService.setTitle('Enterprise Automation Services | Kaushal Shah');
    this.metaService.updateTag({
      name: 'description',
      content: 'High-performance software development services: AI Automation, Custom SaaS, and Enterprise Legacy Modernization.'
    });
  }

  trackConsultationClick(name: string) {
    this.analytics.sendEvent('button_click', {
      button_name: name + ' Consultation',
      location: 'Services Page',
    });
  }

  ScrollIntoView(elem: string) {
    const element = document.querySelector(elem);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openCalendly(type: string, title: string) {
    // Directing all to a general consultation link for now to qualify leads personally
    window.open('https://calendly.com/kaushalshah750/consultation', '_blank');
    this.trackConsultationClick(title);
  }
}