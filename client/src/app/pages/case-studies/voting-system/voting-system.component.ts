import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-voting-system',
  templateUrl: './voting-system.component.html',
  standalone: false
})
export class VotingSystemComponent implements OnInit {

  constructor(
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.updateSeoData({
      title: 'Case Study: Secure Voting System on AWS | Kaushal Shah',
      description: 'How I built a tamper-proof election system handling 200+ concurrent users using Angular 19, Node.js, and AWS VPS. Zero downtime, 100% security.',
      keywords: 'Secure Voting App, Angular Case Study, Node.js Scalability, AWS VPS Hosting, Real-time Election System, High Performance Web App',
      url: 'https://mrkaushalshah.com/case-studies/secure-voting-system',
      image: 'https://mrkaushalshah.com/assets/projects/Voting/voting.png' // Wahi screenshot jo lagaya tha
    });
  }
}