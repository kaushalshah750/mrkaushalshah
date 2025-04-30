import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { supabase } from 'src/integration/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  skills: any[] = [];

  constructor(
    private analytics: AnalyticsService
  ) { }

  ngOnInit() {
    this.getSkills()
  }

  openurl(url: string) {
    window.open(url, "_blank")
    this.trackClick("Download Resume");
  }

  async getSkills() {
    let { data: skills, error } = await supabase.from('skills').select('*');
    if (skills) {
      this.skills = skills;
    } else {
      this.skills = [];
    }
  }

  trackClick(name: string) {
    this.analytics.sendEvent('button_click', {
      button_name: name,
      location: 'Home Page',
    });
  }

}
