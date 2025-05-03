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
  plans = [
    {
      title: 'Starter',
      tag: '🔥 Popular',
      priceIndia: '₹5,000',
      priceIntl: '$150',
      description: 'Perfect for small businesses or individuals needing a simple online presence.',
      features: [
        '1-page scrollable design',
        'Mobile responsive',
        'WhatsApp inquiry button',
        'Basic contact form integration',
        'Google Maps embedding'
      ],
      type: 'starter',
      featured: false,
      gradient: false,
    },
    {
      title: 'Pro',
      tag: '🚀 Recommended',
      priceIndia: '₹15,000',
      priceIntl: '$400',
      description: 'Ideal for businesses requiring a professional multi-page website.',
      features: [
        '3–5 page full website',
        'Custom design with images/icons',
        'Basic SEO setup',
        'Supabase backend for contact forms',
        'WhatsApp live chat integration'
      ],
      type: 'pro',
      featured: true,
      gradient: true,
    },
    {
      title: 'Premium',
      tag: '👑 Complete',
      priceIndia: '₹35,000 - ₹50,000',
      priceIntl: '$800 - $1,000',
      description: 'Full-featured solution for businesses requiring advanced functionality.',
      features: [
        'Full website + Admin panel (Node.js / Supabase)',
        'Real-time content editing (blogs, menus)',
        'Booking / inquiry management system',
        'Advanced SEO optimization',
        'Analytics + CRM integrations'
      ],
      type: 'premium',
      featured: false,
      gradient: false,
    },
    {
      title: 'Custom Plan',
      tag: '🛠️ Tailored',
      priceIndia: '₹30,000+',
      priceIntl: '$800+',
      description: 'Tailored solutions based on your unique needs.',
      features: [
        'Fully custom web application',
        'Advanced API integrations (payment gateways, CRMs)',
        'Custom backend/frontend development',
        'Performance optimization for scale',
        'Enterprise-grade security features'
      ],
      type: 'custom',
      featured: false,
      gradient: false,
    }
  ];

  isInIndia: boolean = true;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private geolocationService: GeolocationService,
    private analytics: AnalyticsService
  ) {
    this.titleService.setTitle('Web Development Services | Kaushal Shah');
    this.metaService.updateTag({
      name: 'description',
      content: 'Offering website development, landing pages, admin panels, and digital presence setup for startups and small businesses.'
    });
  }

  ngOnInit() {
    console.log('Services component initialized');
    this.geolocationService.isInIndia().subscribe((isInIndia) => {
      if (isInIndia) {
        this.isInIndia = true;
        console.log('User is in India');
      } else {
        this.isInIndia = false;
        console.log('User is not in India');
      }
    });
  }

  trackConsultationClick(name: string) {
    this.analytics.sendEvent('button_click', {
      button_name: name + ' Consultation',
      location: 'Services Page',
    });
  }

  ScrollIntoView(elem: string) {
    document.querySelector(elem)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openCalendly(type: string, title: string) {
    window.open('https://calendly.com/kaushalshah750/' + type, '_blank');
    this.trackConsultationClick(title);
  }
}
