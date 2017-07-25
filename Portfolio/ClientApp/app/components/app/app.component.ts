import { Component, OnInit } from "@angular/core";
import { Location, PopStateEvent } from "@angular/common";
import { NavigationEnd, Router } from "@angular/router";

import { isBrowser } from "../../services/environment";

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
    private _lastPoppedUrl: string;

    constructor(private _location: Location, private _router: Router) { }

    /**
     * Scrolls page to top when navigation change
     * Code from: https://stackoverflow.com/a/44372167
     */
    public ngOnInit(): void {
        this.subscribeToPageChange();
    }

    private subscribeToPageChange() {
        if (!isBrowser) {
            return; // We're not on the client side
        }

        // Subscribe to the last url
        this._location.subscribe((event: PopStateEvent) => {
            this._lastPoppedUrl = event.url;
        });

        // Scroll to top when url change
        this._router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (event.url === this._lastPoppedUrl) {
                    this._lastPoppedUrl = null;
                } else {
                    window.scrollTo(0, 0);
                }
            }
        });
    }
}