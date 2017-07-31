import { Component, OnInit, Input, Output, EventEmitter, NgZone, ViewChild, ElementRef, forwardRef, OnChanges, SimpleChanges } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

import { isBrowser } from "../../services/environment";
import { ReCaptchaService } from "../../services/recaptcha.service";

@Component({
    selector: "recaptcha",
    templateUrl: "./recaptcha.component.html",
    styleUrls: ["./recaptcha.component.less"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ReCaptchaComponent),
            multi: true
        }
    ]
})
export class ReCaptchaComponent implements OnInit, ControlValueAccessor, OnChanges {
    @Input() public siteKey: string = null;
    @Input() public theme = "light";
    @Input() public type = "image";
    @Input() public size = "normal";
    @Input() public tabindex = 0;
    @Input() public badge = "bottomright";
    /* Available languages: https://developers.google.com/recaptcha/docs/language */
    @Input() public language: string = null;

    @Output() public captchaResponse = new EventEmitter<string>();
    @Output() public captchaExpired = new EventEmitter();

    @ViewChild("target") public targetRef: ElementRef;

    private _widgetId: any = null;

    public onChange: Function = () => { };
    public onTouched: Function = () => { };

    constructor(private _zone: NgZone, private _captchaService: ReCaptchaService) { }

    public ngOnInit(): void {
        this._captchaService.getReady(this.language)
            .subscribe((ready) => {
                if (!ready) {
                    return;
                }

                this.init();
            });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes["language"].previousValue !== changes["language"].currentValue) {
            this.reset();
        }
    }

    public init() {
        if (!isBrowser) {
            return;
        }

        this._widgetId = (<any>window).grecaptcha.render(this.targetRef.nativeElement,
            {
                "sitekey": this.siteKey,
                "badge": this.badge,
                "theme": this.theme,
                "type": this.type,
                "size": this.size,
                "tabindex": this.tabindex,
                "callback": <any>((response: any) => this._zone.run(this.recaptchaCallback.bind(this, response))
                ),
                "expired-callback": <any>(() => this._zone.run(this.recaptchaExpiredCallback.bind(this)))
            });
    }

    public reset() {
        if (!isBrowser || this._widgetId === null) {
            return;
        }

        (<any>window).grecaptcha.reset(this._widgetId);
        this.onChange(null);
    }

    public execute() {
        if (!isBrowser || this._widgetId === null) {
            return;
        }

        (<any>window).grecaptcha.execute(this._widgetId);
    }

    public getResponse(): string {
        if (!isBrowser || this._widgetId === null) {
            return null;
        }

        return (<any>window).grecaptcha.getResponse(this._widgetId);
    }

    writeValue(newValue: any): void {
        /* ignore it */
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private recaptchaCallback(response: string) {
        this.onChange(response);
        this.onTouched();
        this.captchaResponse.emit(response);
    }

    private recaptchaExpiredCallback() {
        this.onChange(null);
        this.onTouched();
        this.captchaExpired.emit();
    }
}