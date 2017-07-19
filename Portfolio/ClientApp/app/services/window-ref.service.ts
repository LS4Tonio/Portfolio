import { Injectable } from "@angular/core";

@Injectable()
export class WindowRefService {
    /**
     * Get window object as service
     * Code from: https://stackoverflow.com/a/37176929
     * @returns {object} window object
     */
    get nativeWindow(): any {
        return window;
    }
}