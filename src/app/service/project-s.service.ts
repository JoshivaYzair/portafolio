import { projectsList } from './../pages/list/projects';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectSService {
  getProjectById(id: number): any | undefined {
    return projectsList.find((project) => project.id === id);
  }
}
