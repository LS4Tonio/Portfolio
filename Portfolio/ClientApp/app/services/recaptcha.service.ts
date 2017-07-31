import { Injectable, NgZone, Optional, SkipSelf } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { isBrowser } from "./environment";

/*
 * Common service shared by all reCaptcha component instances
 * through dependency injection.
 * This service has the task of loading the reCaptcha API once for all.
 * Only the first instance of the component creates the service, subsequent
 * components will use the existing instance.
 *
 * As the language is passed to the <script>, the first component
 * determines the language of all subsequent components. This is a limitation
 * of the present Google API.
 */
@Injectable()
export class ReCaptchaService {
    private _librarySourceSrc = "https://www.google.com/recaptcha/api.js?onload=reCaptchaOnloadCallback&render=explicit";
    private _librarySourceId = "googleRecaptchaV2";

    private _scriptLoaded = false;
    private _readySubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

    /**
     * Binds reCaptcha event
     * @param zone
     */
    constructor(zone: NgZone) {
        if (isBrowser) {
            /* the callback needs to exist before the API is loaded */
            window[<any>"reCaptchaOnloadCallback"] = <any>(() => zone.run(this.onloadCallback.bind(this)));
        }
    }

    /**
     * Loads the reCaptcha library
     * @param language selected language
     */
    public getReady(language: string): Observable<boolean> {
        if (isBrowser) {
            const lang = language ? `&hl=${language}` : "";

            if (!this._scriptLoaded) {
                this._scriptLoaded = true;
                const doc = <HTMLDivElement>document.body;
                const script = document.createElement("script");
                const lang = language ? `&hl=${language}` : "";

                script.innerHTML = "";
                script.id = this._librarySourceId;
                script.src = `${this._librarySourceSrc}${lang}`;
                script.async = true;
                script.defer = true;
                doc.appendChild(script);
            } else {
                const script = document.getElementById(this._librarySourceId);
                script.setAttribute("src", `${this._librarySourceSrc}${lang}`);
            }
        }
        return this._readySubject.asObservable();
    }

    private onloadCallback() {
        this._readySubject.next(true);
    }
}

/* singleton pattern taken from https://github.com/angular/angular/issues/13854 */
export function recaptchaServiceProviderFactory(ngZone: NgZone, parentDispatcher: ReCaptchaService) {
    return parentDispatcher || new ReCaptchaService(ngZone);
}

export const recaptchaServiceProvider = {
    provide: ReCaptchaService,
    deps: [NgZone, [new Optional(), new SkipSelf(), ReCaptchaService]],
    useFactory: recaptchaServiceProviderFactory
};