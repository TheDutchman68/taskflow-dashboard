import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
