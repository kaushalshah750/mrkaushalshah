import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { supabase } from 'src/integration/client';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent {
    projects: any;

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private analytics: AnalyticsService
    ) {
        this.titleService.setTitle('Projects | Kaushal Shah');
        this.metaService.updateTag({
            name: 'description',
            content: 'Showcasing freelance and professional projects by Kaushal Shah, including custom-built websites, full-stack apps, and client solutions.'
        });
    }

    async ngOnInit() {
        await this.getProjectTechnologies()
    }

    async getProjects() {
        this.projects = await supabase.from('projects').select('*');

        if (this.projects.data) {
            this.projects = this.projects.data;
        }
        else {
            this.projects = [];
        }
    }

    async getProjectTechnologies() {

        let { data: projects, error } = await supabase
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
        `);

        if (error) {
            console.error('Error fetching projects:', error);
        } else {
            if (projects) {
                // Transforming the fetched data
                const transformedProjects = projects.map(project => {
                    const techTypeMap: any = {};

                    project.project_technology.forEach(pt => {
                        const tech = pt.technology;
                        if (tech) {
                            if (!techTypeMap[tech.type]) {
                                techTypeMap[tech.type] = [];
                            }
                            techTypeMap[tech.type].push(tech.name);
                        }
                    });

                    const technology = Object.entries(techTypeMap).map(([type, names]) => ({
                        type,
                        name: names
                    }));

                    return {
                        id: project.id,
                        name: project.name,
                        description: project.description,
                        img: project.img,
                        github: project.github,
                        demo: project.demo,
                        technology
                    };
                });
                this.projects = transformedProjects;
            }

        }
    }

    trackDemoClick(name: string) {
        this.analytics.sendEvent('button_click', {
            button_name: name + ' Demo',
            location: 'Projects Page',
        });
    }

    trackGithubClick(name: string) {
        this.analytics.sendEvent('button_click', {
            button_name: name + ' GitHub',
            location: 'Projects Page',
        });
    }
}
