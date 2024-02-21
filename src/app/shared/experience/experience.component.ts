import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  ngOnInit(){
  }

  calculateYearAndMonthDifference(): { years: number, months: number } {
    var startDate = new Date('2022-12-19')
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
