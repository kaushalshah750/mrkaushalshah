import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { supabase } from 'src/integration/client';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  project: any;

  // RICH HTML CASE STUDIES (The "High-Ticket" Content)
  descriptionOverrides: any = {
    'Savoré': `
      <h3 class="text-xl font-bold mb-2">The Challenge</h3>
      <p class="mb-4">Mid-sized restaurants lose 20% of revenue due to inefficient manual reservation management and table turnover delays.</p>
      
      <h3 class="text-xl font-bold mb-2">The Solution</h3>
      <p class="mb-4">I engineered <strong>Savoré</strong>, a digital reservation engine that streamlines the booking process. The system allows customers to book tables in real-time while providing managers with a dashboard to optimize seating arrangements.</p>
      
      <h3 class="text-xl font-bold mb-2">Key Engineering Features</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Real-time Availability:</strong> Implemented WebSocket connections to prevent double bookings.</li>
        <li><strong>WhatsApp Integration:</strong> Automated booking confirmations sent via WhatsApp Business API.</li>
        <li><strong>Performance:</strong> Optimized Angular frontend to load under 1.2s for better SEO and User Experience.</li>
      </ul>
    `,
    
    'SyncAI': `
      <h3 class="text-xl font-bold mb-2">The Concept</h3>
      <p class="mb-4">SaaS companies struggle to convert visitors because their landing pages lack interactive engagement.</p>
      
      <h3 class="text-xl font-bold mb-2">The Execution</h3>
      <p class="mb-4"><strong>SyncAI</strong> is a high-performance landing page architecture designed for conversion. Unlike standard templates, this project focuses on <strong>Predictive UI</strong> patterns that guide user attention to CTA buttons.</p>
      
      <h3 class="text-xl font-bold mb-2">Tech Stack Highlights</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Modern UI/UX:</strong> Built with Tailwind CSS for pixel-perfect responsiveness.</li>
        <li><strong>Animation Physics:</strong> Used subtle micro-interactions to increase time-on-page.</li>
        <li><strong>Lead Capture:</strong> Integrated with Supabase to store early-access signups securely.</li>
      </ul>
    `,

    'SkillNest': `
      <h3 class="text-xl font-bold mb-2">The Problem</h3>
      <p class="mb-4">Traditional LMS platforms are clunky and difficult to navigate, leading to high student drop-off rates.</p>
      
      <h3 class="text-xl font-bold mb-2">The Engineering</h3>
      <p class="mb-4"><strong>SkillNest</strong> redefines the learning experience with a minimalist, distraction-free interface. It features a custom video player wrapper and progress tracking system that motivates students to complete courses.</p>
      
      <h3 class="text-xl font-bold mb-2">Core Features</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Scalable Architecture:</strong> Designed to handle 10,000+ concurrent users using Node.js clustering.</li>
        <li><strong>Progress Tracking:</strong> Visual analytics dashboard for students and instructors.</li>
        <li><strong>Secure Content:</strong> Implemented DRM-like protection to prevent unauthorized video downloads.</li>
      </ul>
    `,

    'Pay Your Share': `
      <h3 class="text-xl font-bold mb-2">Overview</h3>
      <p class="mb-4">Splitting bills among large groups is often messy and lacks transparency.</p>
      
      <h3 class="text-xl font-bold mb-2">The Solution</h3>
      <p class="mb-4"><strong>Pay Your Share</strong> is a fintech prototype that simplifies expense splitting. It uses a graph algorithm to calculate the minimum number of transactions required to settle all debts in a group.</p>
      
      <h3 class="text-xl font-bold mb-2">Technical Depth</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Algorithm Optimization:</strong> Reduced transaction complexity by 60% using graph theory.</li>
        <li><strong>Security:</strong> JWT-based authentication to ensure financial data privacy.</li>
        <li><strong>Real-time Sync:</strong> Instant updates across devices using Firebase Realtime Database.</li>
      </ul>
    `,

    'Orien System Solution': `
      <h3 class="text-xl font-bold mb-2">Objective</h3>
      <p class="mb-4">To establish a dominant digital presence for a corporate entity competing in a saturated market.</p>
      
      <h3 class="text-xl font-bold mb-2">Delivery</h3>
      <p class="mb-4">I developed a corporate identity platform focused on <strong>SEO Dominance</strong> and <strong>Brand Authority</strong>. The site scores 100/100 on Google Lighthouse performance metrics.</p>
      
      <h3 class="text-xl font-bold mb-2">Results</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Performance:</strong> Zero cumulative layout shift (CLS) for rock-solid stability.</li>
        <li><strong>SEO Architecture:</strong> Semantic HTML5 structure optimized for crawler indexability.</li>
      </ul>
    `
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProjectTechnologies();
  }

  goBack() {
    this.router.navigate(['/projects']);
  }

  async getProjectTechnologies() {
    var projectId = this.route.snapshot.paramMap.get('projectId');

    // 1. HANDLE STATIC HUNTER BOT (Same as before)
    if (projectId === 'hunter-bot-ai') {
        this.project = {
            id: 999,
            name: 'The Hunter Bot (AI Agent)',
            description: `
                <h3 class="text-xl font-bold mb-2">The Problem</h3>
                <p class="mb-4">Manual lead generation is slow, boring, and inefficient.</p>
                <h3 class="text-xl font-bold mb-2">The Solution</h3>
                <p class="mb-4">I built an autonomous digital worker that functions as a full-time sales employee.</p>
                <h3 class="text-xl font-bold mb-2">Key Capabilities</h3>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Smart Scouting:</strong> Scrapes Google Maps for high-ticket agencies.</li>
                    <li><strong>Deep Research:</strong> Visits agency websites to extract CEO names and emails.</li>
                    <li><strong>AI Copywriting:</strong> Uses <strong>GPT-5</strong> to write hyper-personalized cold emails.</li>
                    <li><strong>CRM Sync:</strong> Automatically updates leads into Google Sheets.</li>
                </ul>
                <p class="font-bold text-green-600">Impact: Generates 40+ qualified leads per day on autopilot.</p>
            `,
            img: 'assets/bot-preview.png',
            github: 'https://github.com/mrkaushalshah/agency-lead-hunter',
            demo: null,
            technology: {
                'core': ['Node.js', 'Puppeteer'],
                'ai': ['OpenAI GPT-5', 'NLP'],
                'data': ['Google Sheets API', 'JSON']
            }
        };
        return;
    }

    // 2. HANDLE SUPABASE PROJECTS WITH OVERRIDES
    let { data: project, error } = await supabase
      .from('projects')
      .select(`
        id,
        name,
        description,
        img,
        github,
        demo,
        project_technology (
          technology (
            id,
            name,
            type
          )
        )
      `)
      .eq('project_id', projectId || '')
      .single();

    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      if (project) {
        const techTypeMap: Record<string, string[]> = {};

        project.project_technology.forEach((pt: any) => {
          const tech = pt.technology;
          if (tech) {
            const key = tech.type.toLowerCase();
            if (!techTypeMap[key]) {
              techTypeMap[key] = [];
            }
            techTypeMap[key].push(tech.name);
          }
        });

        // HERE IS THE FIX: Use the overrides map
        const smartDescription = this.descriptionOverrides[project.name] || project.description;

        this.project = {
          id: project.id,
          name: project.name,
          description: smartDescription, // <--- RICH HTML DESCRIPTION
          img: project.img,
          github: project.github,
          demo: project.demo,
          technology: techTypeMap
        };
      }
    }
  }
}