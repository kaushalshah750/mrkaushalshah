import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: false
})
export class ExperienceComponent {

  ngOnInit() {
  }

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
    this.titleService.setTitle('Experience | Kaushal Shah');
    this.metaService.updateTag({
      name: 'description',
      content: 'A detailed timeline of Kaushal Shah’s professional journey, highlighting roles, skills, and technologies used at top companies in India.'
    });
  }


  calculateYearAndMonthDifference(start: string): { years: number, months: number } {
    var startDate = new Date(start)
    var endDate = new Date()
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    let yearDiff = endYear - startYear;
    let monthDiff = endMonth - startMonth;

    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    return { years: yearDiff, months: monthDiff };
  }
}
