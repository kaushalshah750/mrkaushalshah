import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
    providedIn: 'root',
})
export class AnalyticsService {
    constructor() { }

    sendPageView(url: string) {
        gtag('event', 'page_view', {
            page_path: url,
        });
    }

    sendEvent(action: string, params: { [key: string]: any }) {
        gtag('event', action, params);
    }
}
