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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProjectTechnologies();
  }

  goBack() {
    // this.location.back();
    // or use: 
    this.router.navigate(['/projects']);
  }

  async getProjectTechnologies() {
    var projectId = this.route.snapshot.paramMap.get('projectId');

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
        // Transforming the fetched data
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

        this.project = {
          id: project.id,
          name: project.name,
          description: project.description,
          img: project.img,
          github: project.github,
          demo: project.demo,
          technology: techTypeMap
        };;
      }

    }
  }

}
