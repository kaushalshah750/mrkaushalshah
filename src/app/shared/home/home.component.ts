import { Component } from '@angular/core';
import { supabase } from 'src/integration/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  skills: any[] = [];

  ngOnInit() {
    this.getSkills()
  }

  openurl(url: string) {
    window.open(url, "_blank")
  }

  async getSkills() {

    let { data: skills, error } = await supabase.from('skills').select('*');
    if (skills) {
      this.skills = skills;
    } else {
      this.skills = [];
    }
  }

}
