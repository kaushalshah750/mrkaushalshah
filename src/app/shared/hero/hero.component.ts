import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    standalone: false
})
export class HeroComponent {
  typewriter_text: string[] = ["Kaushal Shah", "Software Developer"];
  typewriter_display: string = "";
  index:number = 0

  ngOnInit() {
    this.typingCallback(this);
  }

  typingCallback(that: any) {
    console.log("typingCallback")
    console.log(that.index)

    let total_length = that.typewriter_text[that.index].length;
    let current_length = that.typewriter_display.length;

    console.log("let worked")
    console.log(that.index)
    
    if (current_length < total_length) {
      console.log("if works")
      console.log(that.index)
      that.typewriter_display = that.typewriter_text[that.index].substring(0, current_length + 1);
    }else {
      console.log("else works")
      console.log(that.index)
      if(this.index >= 1){
        this.index = 0
      }else{
        this.index = this.index + 1
      }
        setTimeout(() => {
        that.typewriter_display = "";
        that.typingCallback(that);
      }, 2000);
      return;
    }
    

    if(this.index >= 1){
      console.log("index if")
      this.index = 0
    }else{
      console.log("index else")
      this.index = this.index + 1
      console.log(this.index)
    }
  
    setTimeout(that.typingCallback, 100, that);
  }
}
