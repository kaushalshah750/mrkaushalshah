import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getExperience(date: Date): { monthExperience: number, yearExperience: number } {
    const year = date.getFullYear();
    var yearExperience = year - 2021;
    const month = date.getMonth() + 1;
    var monthExperience = 12 - (10 - month);
    if( (month - 10) < 0) {
      yearExperience = yearExperience - 1;
    }

    return { monthExperience, yearExperience };
  }
}
