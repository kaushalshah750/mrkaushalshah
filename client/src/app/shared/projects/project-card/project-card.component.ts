import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false

})
export class ProjectCardComponent {
  @Input() project!: any;
  @Input() expanded: string | null = null;
  @Output() toggle = new EventEmitter<string>();

  techTypes = ['frontend', 'backend', 'database', 'deployment', 'authentication'];

  constructor(private router: Router) { }

  toggleExpanded(projectId: string) {
    this.toggle.emit(projectId);
  }

  navigateToProject(projectId: string) {
    // Replace with your routing logic
    console.log(projectId)
    this.router.navigate(['/projects', projectId]);
    // or
    // this.router.navigate(['/project-details', projectId]);
  }
}
