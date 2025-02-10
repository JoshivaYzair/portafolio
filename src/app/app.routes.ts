import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { Routes } from '@angular/router';
import { ProjectComponent } from './shared/project/project.component';
import { AboutComponent } from './pages/about/about.component';
export const routes: Routes = [
  { path: 'project/:id', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: WorkExperienceComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' }, 
];
