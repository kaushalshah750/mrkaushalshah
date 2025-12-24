import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: false
})
export class HeroComponent {

  constructor(
    private analytics: AnalyticsService
  ) { }

  scrollIntoView(elem: string) {
    const element = document.querySelector(elem);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openUrl(url: string) {
    window.open(url, "_blank")
    this.trackClick('CTA Button');
  }

  trackClick(name: string) {
    this.analytics.sendEvent('button_click', {
      button_name: name,
      location: 'Hero Section',
    });
  }
}