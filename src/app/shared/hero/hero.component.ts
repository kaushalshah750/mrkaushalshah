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
  index: number = 0

  ngOnInit() {
    this.typingCallback(this);
  }

  typingCallback(that: any) {
    let total_length = that.typewriter_text[that.index].length;
    let current_length = that.typewriter_display.length;

    if (current_length < total_length) {
      that.typewriter_display = that.typewriter_text[that.index].substring(0, current_length + 1);
    } else {
      if (this.index >= 1) {
        this.index = 0
      } else {
        this.index = this.index + 1
      }
      setTimeout(() => {
        that.typewriter_display = "";
        that.typingCallback(that);
      }, 2000);
      return;
    }

    if (this.index >= 1) {
      this.index = 0
    } else {
      this.index = this.index + 1
    }

    setTimeout(that.typingCallback, 100, that);
  }

  scrollIntoView(elem: string) {
    document.querySelector(elem)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openUrl(url: string) {
    window.open(url, "_blank")
  }
}
