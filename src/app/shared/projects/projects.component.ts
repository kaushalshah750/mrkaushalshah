import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { supabase } from 'src/integration/client';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent {
    projects: any;
    expandedId: string | null = null; // <- Add this
    techTypes = ['frontend', 'backend', 'database', 'deployment', 'authentication'];
    showAllTech: { [projectId: string]: boolean } = {};

    toggleShowTech(projectId: string): void {
        this.showAllTech[projectId] = !this.showAllTech[projectId];
    }

    hasOverflowTech(technology: Record<string, string[]>): boolean {
        let count = 0;
        for (const key in technology) {
            count += technology[key].length;
        }
        return count > 6; // Arbitrary cutoff
    }

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

    async getProjectTechnologies() {
        let { data: projects, error } = await supabase
            .from('projects')
            .select(`
                id,
                project_id,
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
                    const techTypeMap: Record<string, string[]> = {};

                    project.project_technology.forEach(pt => {
                        const tech = pt.technology;
                        if (tech) {
                            const key = tech.type.toLowerCase(); // Normalize type to lowercase
                            if (!techTypeMap[key]) {
                                techTypeMap[key] = [];
                            }
                            techTypeMap[key].push(tech.name);
                        }
                    });

                    return {
                        id: project.id,
                        project_id: project.project_id,
                        name: project.name,
                        description: project.description,
                        img: project.img,
                        github: project.github,
                        demo: project.demo,
                        technology: techTypeMap // 👈 now a flat object
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
