import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { supabase } from 'src/integration/client';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent {
    projects: any[] = [];
    expandedId: string | null = null;

    // Isko use karke hum descriptions upgrade karenge (Database change karne ki zarurat nahi)
    descriptionOverrides: any = {
        'Savoré': 'An automated reservation engine designed to optimize table turnover and reduce manual booking errors by 40%.',
        'SyncAI': 'A high-conversion SaaS landing page engineered with modern UI/UX principles to maximize lead capture.',
        'SkillNest': 'A scalable Learning Management System (LMS) architecture built to handle concurrent user sessions.',
        'Pay Your Share': 'A secure fintech prototype for real-time expense splitting and transaction tracking.',
        'Orien System Solution': 'Corporate digital identity platform focused on brand authority and SEO optimization.'
    };

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private api: ApiService,
        private analytics: AnalyticsService
    ) {
        this.titleService.setTitle('Case Studies | Kaushal Shah');
        this.metaService.updateTag({
            name: 'description',
            content: 'Explore how I solve complex business problems using AI, Automation, and Full-Stack Engineering.'
        });
    }

    async ngOnInit() {
        await this.getProjectTechnologies()
    }

    async getProjectTechnologies() {
        this.api.getProjects().subscribe({
            next: (data) => {
                // 2. INJECT THE HUNTER BOT (Manually)
                const hunterBot = {
                    id: 999,
                    project_id: 'hunter-bot-ai', // Special ID
                    name: 'The Hunter Bot (AI Agent)',
                    description: 'A fully autonomous Sales Agent that scrapes Google Maps, identifies decision-makers, and uses GPT-5 to write personalized cold emails 24/7.',
                    img: '../assets/bot-preview.png', // <--- Bhai, ek screenshot leke 'assets' folder mein daal dena
                    github: 'https://github.com/mrkaushalshah/agency-lead-hunter', // Tera repo link
                    demo: null,
                    technology: {
                        'backend': ['Node.js', 'Puppeteer', 'OpenAI API (GPT-5)'],
                        'automation': ['Google Sheets API', 'Cloudflare Bypass'],
                        'deployment': ['Vercel / VPS']
                    }
                };
                this.projects = [hunterBot, ...data];
            },
            error: (err) => console.error('API Error:', err)
          });
    }
}