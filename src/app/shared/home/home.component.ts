import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { CommonService } from 'src/app/services/common.service';
import { supabase } from 'src/integration/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  skills: any[] = [];
  experience: any = {}

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private analytics: AnalyticsService,
    private commonService: CommonService
  ) {
    console.log(this.commonService.getExperience(new Date()));
    this.experience = this.commonService.getExperience(new Date())
    console.log(this.experience)
    this.titleService.setTitle('Kaushal Shah | Senior Software Developer – .NET Core & Angular Specialist');
    this.metaService.updateTag({
      name: 'description',
      content: 'Kaushal Shah is a Senior Software Developer experienced in building scalable, high-performance web applications using .NET Core, Angular, and Azure DevOps. Explore projects, skills, and engineering insights.'
    });
  }

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
