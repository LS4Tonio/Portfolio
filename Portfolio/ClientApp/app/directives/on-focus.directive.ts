import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer } from "@angular/core";

@Directive({
    selector: "[onFocus]"
})
export class OnFocusDirective {
    @Input("target-element") public targetElement: string;

    @Output("on-blur-callback") public onBlurAction: EventEmitter<any>;
    @Output("on-focus-callback") public onFocusAction: EventEmitter<any>;

    constructor(private _element: ElementRef, public renderer: Renderer) {
        this.onBlurAction = new EventEmitter();
        this.onFocusAction = new EventEmitter();
    }

    @HostListener("blur", ["$event"])
    public onBlur(e) {
        const target = this.getTarget();
        if (target !== null) {
            this.onBlurAction.emit({
                rendered: this.renderer,
                target: target
            });
        }
    }

    @HostListener("focus", ["$event"])
    public onFocus(e) {
        const target = this.getTarget();
        if (target !== null) {
            this.onFocusAction.emit({
                rendered: this.renderer,
                target: target
            });
        }
    }

    private getTarget() {
        return this.targetElement
            ? this._element.nativeElement.querySelector(this.targetElement)
            : null;
    }
}