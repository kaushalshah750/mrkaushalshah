import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    standalone: false
})
export class BodyComponent {

  openurl(url:string){
    window.open(url, "_blank")
  }

}
