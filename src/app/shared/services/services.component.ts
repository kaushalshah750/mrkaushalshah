import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  standalone: false,
})
export class ServicesComponent {

  ScrollIntoView(elem: string) {
    document.querySelector(elem)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
