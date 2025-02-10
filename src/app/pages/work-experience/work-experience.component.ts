import { Component } from '@angular/core';
import { experienceList } from './experience';

@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  experience = experienceList;

}
