import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-voting-system',
  templateUrl: './voting-system.component.html',
  standalone: false
})
export class VotingSystemComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    // 1. Page Title (Browser Tab & Google Search Title)
    this.title.setTitle('Secure Voting System Case Study | Kaushal Shah - Freelance Developer');

    // 2. Meta Description (Google Search ke niche wali line)
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Case Study: How I built a secure, real-time voting system for 200+ users using Angular 19, Node.js, and AWS. Zero downtime, 100% data integrity.' 
    });

    // 3. Keywords (For SEO bots)
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'Angular Developer, Node.js Freelancer, Secure Voting System, Web App Development, AWS Deployment, Case Study' 
    });

    // 4. Open Graph Tags (Jab koi link WhatsApp/LinkedIn pe share karega)
    this.meta.updateTag({ property: 'og:title', content: 'Building a Secure Voting System on AWS' });
    this.meta.updateTag({ property: 'og:description', content: 'See how I handled 200+ concurrent voters with zero crashes.' });
    // Yahan apni image ka full URL daalna
    this.meta.updateTag({ property: 'og:image', content: 'https://mrkaushalshah.com/assets/voting-screenshot.png' });
  }
}