import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProjectComponent } from "../../shared/project/project.component";

@Component({
  selector: 'app-body',
  imports: [RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
}
