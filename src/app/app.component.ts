import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./pages/profile/profile.component";
import { BodyComponent } from "./pages/body/body.component";
import { ListComponent } from "./pages/list/list.component";

@Component({
  selector: 'app-root',
  imports: [ProfileComponent, BodyComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
