import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectSService } from '../../service/project-s.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  project = signal<any | null>(null);
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectSService);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const projectId = Number(params.get('id'));
      this.project.set(this.projectService.getProjectById(projectId));
    });
  }
}
