import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: "[image-src]"
})
export class ImageSrcDirective implements OnChanges {
    @Input("image-src") fileSrc: string;

    constructor(private _element: ElementRef) { }

    /**
     * Listens changes of the image src
     * @param changes changes that happened
     */
    public ngOnChanges(changes: SimpleChanges): void {
        const srcChange = changes["fileSrc"];

        // Update src value only when value has changed
        if (srcChange.currentValue !== srcChange.previousValue) {
            this.changeFileSrc(srcChange.currentValue);
        }
    }

    /**
     * Updates the src of the image
     * @param src new value of the source
     */
    private changeFileSrc(src) {
        if (src) {
            // Try to load the image file
            try {
                const file = require(`./../../assets/images/${src}`);
                this._element.nativeElement.src = file;
            } catch (e) {
                // The image file was not found or something else went wrong
                // Remove the previous src and set empty source
                this._element.nativeElement.src = "";
            }
        }
    }
}