import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent {

    constructor(
        private analytics: AnalyticsService
    ) { }

    trackClick(name: string) {
        this.analytics.sendEvent('button_click', {
            button_name: name,
            location: 'Footer Section',
        });
    }
    openEmail(): void {
        window.location.href = 'mailto:kaushal@mrkaushalshah.com';
    }

    openWhatsApp(): void {
        window.open('https://wa.me/919974442525', '_blank');
      }
    
}
