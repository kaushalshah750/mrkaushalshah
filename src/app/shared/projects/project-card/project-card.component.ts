import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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

  toggleExpanded(projectId: string) {
    this.toggle.emit(projectId);
  }
}
