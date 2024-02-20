import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  typewriter_text: string = "Kaushal Shah";
  typewriter_display: string = "";

  ngOnInit() {
    this.typingCallback(this);
  }

  typingCallback(that: any) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
  
    // Typing effect: adding characters
    if (current_length < total_length) {
      that.typewriter_display = that.typewriter_text.substring(0, current_length + 1);
    }
    // Clearing the string
    else {
      setTimeout(() => {
        that.typewriter_display = "";
        that.typingCallback(that);
      }, 2000); // Change 1000 to the desired delay before clearing the string (in milliseconds)
      return;
    }
  
    setTimeout(that.typingCallback, 100, that);
  }
}
